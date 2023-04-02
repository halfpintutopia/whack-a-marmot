/**
 * Initiates the game
 */
class Game extends Board {
  /**
   * Starts the game
   * @param gameId
   * @param gameButtonsClass
   */
  constructor(gameId, gameButtonsClass) {
    super(gameId);
    this.gameId = gameId;
    this.gameButtonsClass = gameButtonsClass;
    this.marmotClass = '.marmot__img';
    this.timerContainerClass = '.timer-container__countdown';
    this.marmotPopTimerId = null;
    this.countdownTimerId = null;
    this.timerInterval = 2000;
    this.countDownTimerInterval = 1000;
    this.currentTime = 30;
    this.currentScore = 0;
    this.gameButtonTypes = ['play', 'instructions', 'settings'];

    this.playModal = new Modal('play-btn', 'modal-play', 'modal-overlay');
    this.instructionsModal = new Modal('instructions-btn', 'modal-instructions', 'modal-overlay');
    this.settingsModal = new Modal('settings-btn', 'modal-settings', 'modal-overlay');

    this.userNameInputDataType = '[data-input="username"]';
    this.addPlayerButtonSelector = 'button[data-type="add-player"]';
    this.currentPlayer = {};
    this.scoreboard = [];
    this.marmotNumberHtml = `<h4><span class="timer-container">Timer: <span class="timer-container__countdown">0</span></span></h4><h4 class="marmot-hit__left">Hits: <span class="marmot-hit__total">0</span></h4>`;

    this.hitMarmotDeclaration = () => this.hitMarmot();

    if (this.gameButtonsContainer) {
      this.createGameButtons();
    }
    if (this.addPlayerButton) {
      this.recoverLocalStorageScores();
      this.addPlayerButton.addEventListener('click', this.addPlayerHandler.bind(this));
    }
  }

  get gameBoard() {
    return document.getElementById(this.gameId);
  }

  get gameButtonsContainer() {
    return this.gameBoard.querySelector(this.gameButtonsClass);
  }

  get timerContainer() {
    return document.querySelector(this.timerContainerClass);
  }

  get exitButton() {
    return document.getElementById(this.exitBtnId);
  }

  get addPlayerButton() {
    return document.querySelector(this.addPlayerButtonSelector);
  }

  get usernameInputField() {
    return document.querySelector(this.userNameInputDataType);
  }

  get validationMessage() {
    return document.querySelector('#validation-message');
  }

  get score() {
    return document.querySelector('.marmot-hit__total').innerHTML;
  }

  /**
   * Starts the game
   * Initiates all the functionality to get the game started
   */
  startGame() {
    this.gameBoard.classList.add('active');
    this.showHideExitBtn();
    this.changeGridLayout();
    this.createMarmotHoles();
    this.setGameDifficulty();
    this.currentScore = 0;
    this.currentTime = 30;
    this.moveMarmot();
  }

  /**
   * Creates the inner HTML for the button container
   */
  createGameButtons() {
    this.gameButtonsContainer.innerHTML = '';

    this.gameButtonTypes.map((type) => {
      let button = this.createButton(type);

      this.gameButtonsContainer.appendChild(button);
    });

    this.playModal = new Modal('play-btn', 'modal-play', 'modal-overlay');
    this.instructionsModal = new Modal('instructions-btn', 'modal-instructions', 'modal-overlay');
    this.settingsModal = new Modal('settings-btn', 'modal-settings', 'modal-overlay');
  }

  /**
   * Adds the class and properties for each button, when created
   * @param type
   * @returns {HTMLButtonElement}
   */
  createButton(type) {
    let button = document.createElement('button');
    button.id = `${type}-btn`;
    button.classList.add('button');
    button.setAttribute('type', 'button');
    button.setAttribute('data-type', type);
    button.innerHTML = type;
    return button;
  }

  /**
   * Adds player
   */
  addPlayerHandler() {
    if (this.validatePlayerName()) {
      this.currentPlayer.name = this.usernameInputField.value;
      this.playModal.closeModal();
      // this.closeAddPlayerModal();
      this.createGameDisplay();
      this.startGame();
    }
  }

  /**
   * Validates the username and adds classes to show the validation message
   * @returns {boolean}
   */
  validatePlayerName() {
    if (this.usernameInputField.value === '' || this.usernameInputField.value.length < 4) {
      this.usernameInputField.classList.add('invalid');
      this.validationMessage.classList.remove('hidden-message');
      return false;
    }
    this.usernameInputField.classList.remove('invalid');
    this.validationMessage.classList.add('hidden-message');
    return true;
  }

  /**
   * Gets the scores saved in local storage
   * @returns {[]}
   */
  recoverLocalStorageScores() {
    this.scoreboard = localStorage.getItem('scoreboard') ? JSON.parse(localStorage.getItem('scoreboard')) : [];
    return this.scoreboard;
  }

  /**
   * Saves the current player's score
   */
  saveCurrentPlayerScores() {
    this.currentPlayer.score = this.currentScore;
    this.scoreboard.push(this.currentPlayer);
  }

  /**
   * Updates the scores saved in local storage with the new player's scores
   */
  updateScoresInLocalStorage() {
    localStorage.setItem('scoreboard', JSON.stringify(this.scoreboard));
  }

  /**
   * Create the game's display to show the score and the timer
   */
  createGameDisplay() {
    this.gameButtonsContainer.innerHTML = '';
    const numberOfMarmotsDiv = document.createElement('div');
    numberOfMarmotsDiv.classList.add('marmot-hit');
    numberOfMarmotsDiv.innerHTML = this.marmotNumberHtml;

    this.gameButtonsContainer.append(numberOfMarmotsDiv);
  }

  /**
   * Shows the scoreboard with the top 5 best players
   * @param score
   */
  endGameDisplay(score) {
    this.gameButtonsContainer.innerHTML = '';

    let maxResults = 5;

    const gameOverDiv = document.createElement('div');
    gameOverDiv.innerHTML = `<h4>Game over! You scored <span class="marmot-hit__total">${score}</span></h4>`;
    const scoreboardDiv = document.createElement('div');
    scoreboardDiv.classList.add('scoreboard');
    const scoreboard = this.recoverLocalStorageScores();
    scoreboard.sort((a, b) => b.score - a.score);

    scoreboardDiv.innerHTML += '<h4>Top 5 Scoreboard</h4>';

    for (let i = 0; i < maxResults; i++) {
      if (scoreboard[i]) {
        scoreboardDiv.innerHTML += "<div><div class='scoreboard__name'>" + scoreboard[i].name + "</div><div class='scoreboard__score'>" + scoreboard[i].score + "</div></div>";
      }
    }
    this.gameButtonsContainer.append(gameOverDiv, scoreboardDiv);
  }

  /**
   * Increments the score
   * @returns {number}
   */
  updateScore() {
    return this.currentScore++;
  }

  /**
   * Set the chosen difficulty level fo the game
   */
  setGameDifficulty() {
    const difficulty = localStorage.getItem('difficulty');
    if (difficulty === 'hard') {
      this.timerInterval = 500;
    } else {
      this.timerInterval = 1000;
    }
  }

  /**
   * Adds incremented score to the scoreboard
   */
  hitMarmot() {
    const score = document.querySelector('.marmot-hit__total');
    score.innerHTML = `${this.updateScore()}`;
    this.removeAllListeners();
  }

  /**
   * Randomly choose a marmot to pop up from the hole
   */
  pickRandomHole() {
    const marmots = document.querySelectorAll(this.marmotClass);
    this.removeAllListeners();
    marmots.forEach(marmot => {
      marmot.classList.remove('pop');
    });

    const marmot = marmots[Math.floor(Math.random() * marmots.length)];
    marmot.classList.add('pop');

    marmot.addEventListener('mousedown', this.hitMarmotDeclaration);
    marmot.addEventListener('touchstart', this.hitMarmotDeclaration);
  }

  /**
   * Remove the event listener attached to each marmot to prevent duplicate event listeners
   */
  removeAllListeners() {
    const marmots = document.querySelectorAll(this.marmotClass);

    marmots.forEach(marmot => {
      marmot.removeEventListener('mousedown', this.hitMarmotDeclaration);
      marmot.removeEventListener('touchstart', this.hitMarmotDeclaration);
    });
  }

  /**
   * Initiates the marmot selection and countdown timer
   */
  moveMarmot() {
    this.marmotPopTimerId = setInterval(() => {
      this.pickRandomHole();
    }, this.timerInterval);
    this.countdownTimerId = setInterval(() => {
      this.countdown();
    }, this.countDownTimerInterval);
  }

  /**
   * Countdown and when zero stops the action
   */
  countdown() {
    this.timerContainer.innerHTML = this.currentTime;
    if (this.currentTime === 0) {
      clearInterval(this.marmotPopTimerId);
      clearInterval(this.countdownTimerId);
      this.saveScore();
      this.holesContainer.innerHTML = '';
      this.endGameDisplay(this.currentScore);
    } else {
      --this.currentTime;
    }
  }

  /**
   * Saves the score taken from the content of the HTML element
   */
  saveScore() {
    this.currentScore = parseInt(this.score);
    this.saveCurrentPlayerScores();
    this.updateScoresInLocalStorage();
  }

  /**
   * Exits the game
   */
  initExitGame() {
    this.gameBoard.classList.remove(this.activeCls);
    this.removeGridLayout();
    this.showHideExitBtn();
    this.createGameButtons();
  }

  /**
   * Shows and hides the exit button
   */
  showHideExitBtn() {
    if (this.exitButton.classList.contains('hidden')) {
      this.exitButton.classList.remove('hidden');
      this.exitButton.addEventListener('click', this.initExitGame.bind(this));
    } else {
      this.exitButton.removeEventListener('click', this.initExitGame);
      this.exitButton.classList.add('hidden');
    }
  }
}
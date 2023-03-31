class Scoreboard {
  constructor(gameId, userNameInputDataType, addPlayerButton) {
    this.userNameInputDataType = userNameInputDataType;
    this.addPlayerButtonSelector = addPlayerButton;
    this.currentPlayer = {};
    this.currentScore = 0;
    this.scoreboard = [];
    if (this.addPlayerButton) {
      this.addPlayerButton.addEventListener('click', this.addPlayer.bind(this));
    }
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

  recover() {
    this.scoreboard = localStorage.getItem('scoreboard') ? JSON.parse(localStorage.getItem('scoreboard')) : [];
    return this.scoreboard;
  }

  save() {
    this.currentPlayer.score = this.currentScore;
    this.scoreboard.push(this.currentPlayer);
  }

  update() {
    localStorage.setItem('scoreboard', JSON.stringify(this.scoreboard));
  }

  addPlayer() {
    if (this.validatePlayerName()) {
      this.usernameInputField.classList.remove('invalid');
      this.validationMessage.classList.add('hidden-message');
      this.currentPlayer.name = this.usernameInputField.value;
    } else {
      this.usernameInputField.classList.add('invalid');
      this.validationMessage.classList.remove('hidden-message');
    }
  }

  validatePlayerName() {
    return !(this.usernameInputField.value === '' || this.usernameInputField.value.length < 4);
  }

  getRecords() {
    return this.recover();
  }

  updateRecords(score) {
    this.currentScore = parseInt(score);
    this.save();
    this.update();
  }
}
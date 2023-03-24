class Records {
  constructor(userNameInputDataType, addPlayerButton) {
    this.userNameInputDataType = userNameInputDataType;
    this.addPlayerButtonSelector = addPlayerButton;
    this.currentPlayer = {};
    this.currentScore = 0;
    this.scoreboard = [];
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
    const userNameInput = document.querySelector(this.userNameInputDataType);
    this.currentPlayer.name = userNameInput.value !== '' ? userNameInput.value : "NoName";
  }

  getRecords() {
    return this.recover();
  }
}
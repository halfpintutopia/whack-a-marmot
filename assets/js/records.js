/*jshint esversion: 6, expr: true */

/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

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
}

const records = new Records('[data-input="username"]', 'button[data-type="add-player"]');
const addPlayerButton = document.querySelector(records.addPlayerButtonSelector);
const userNameInput = document.querySelector(records.userNameInputDataType);
records.recover();
addPlayerButton.addEventListener('click', addPlayer);

export function addPlayer() {
    records.currentPlayer.name = userNameInput.value !== '' ? userNameInput.value : "NoName";
}

export function updateRecords(score) {
    records.currentScore = parseInt(score);
    records.save();
    records.update();
}

export function getRecords() {
    return records.recover();
}

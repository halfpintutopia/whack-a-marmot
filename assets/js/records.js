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
        this.player = {};
        this.currentScore = 0;
        this.currentPlayer = '';
        this.leaderboard = [];
        this.records = [];
    }

    recover() {
        const leaderboard = localStorage.getItem('leaderboard') ? localStorage.getItem('leaderboard').split(',') : [];
        // const records = [];
        leaderboard.forEach((person) => {
            console.log(JSON.parse(person));
            this.records.push(JSON.parse(person));
        });
        return this.records;
    }

    save() {
        this.player[this.currentPlayer] = this.currentScore;
        // this.leaderboard[this.currentPlayer] = this.currentScore;
    }

    update() {
        // Update after the game has finished
        this.leaderboard.push(JSON.stringify(this.player));
        localStorage.setItem('leaderboard', this.leaderboard.toString());
    }
}

const records = new Records('[data-input="username"]', 'button[data-type="add-player"]');
const addPlayerButton = document.querySelector(records.addPlayerButtonSelector);
const userNameInput = document.querySelector(records.userNameInputDataType);
records.recover();
addPlayerButton.addEventListener('click', addPlayer); // this needs to be moved to the game

export function addPlayer() {
    records.currentPlayer = userNameInput.value;
    records.save();
    console.log(records.leaderboard);
}

export function updateRecords(score) {
    records.currentScore = parseInt(score);
    records.save();
    records.update();
}

export function getRecords() {
    return records.recover();
}

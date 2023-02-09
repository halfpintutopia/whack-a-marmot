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
        this.leaderboard = {};
    }

    recover() {
        return localStorage.getItem('leaderboard') ? JSON.parse(localStorage.getItem('leaderboard')) : {};
    }

    initialSave(username) {
        this.leaderboard[username] = '0';
    }

    update() {
        // Update after the game has finished
        localStorage.setItem('leaderboard', JSON.stringify(this.leaderboard));
    }
}

const records = new Records('[data-input="username"]', 'button[data-type="add-player"]');
const addPlayerButton = document.querySelector(records.addPlayerButtonSelector);
const userNameInput = document.querySelector(records.userNameInputDataType);
records.recover();
addPlayerButton.addEventListener('click', addPlayer);

function addPlayer() {
    const username = userNameInput.value;
    records.initialSave(username);
}

export function updateRecords () {
    // On click - Update after the game has finished
}

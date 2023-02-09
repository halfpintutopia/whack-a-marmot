/*jshint esversion: 6, expr: true */

/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

export class Leaderboard {
    constructor(userNameInputDataType, addPlayerButton) {
        this.userNameInputDataType = userNameInputDataType;
        this.addPlayerButtonSelector = addPlayerButton;
        this.clickEvent = 'click';
        this.leaderboard = {};

        this.initHTMLElements();
        this.initEvents();

    }

    initHTMLElements() {
        this.addPlayerButton = document.querySelector(this.addPlayerButtonSelector);
        this.userNameInput = document.querySelector(this.userNameInputDataType);
    }

    initEvents() {
        this.addPlayerButton.addEventListener(this.clickEvent, this.addPlayer);
        this.leaderboard = localStorage.getItem('leaderboard') ? JSON.parse(localStorage.getItem('leaderboard')) : {};
    }

    addPlayer() {
        const username = this.userNameInput.value;
        this.saveToLeaderboard(username);
    }

    saveToLeaderboard(username) {
        this.leaderboard[username] = '0';
    }
}


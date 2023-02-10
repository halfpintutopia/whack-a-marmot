/*jshint esversion: 6, expr: true */
/* jshint -W117 */
/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

import {capitaliseFirstLetter} from "./helpers.js";
import {openModal} from "./modal.js";
import {getRecords} from "./records.js";

class GameButton {
    constructor(
        gameAreaId,
        gameButtonsClass
    ) {
        this.gameAreaId = gameAreaId;
        this.gameButtonsClass = gameButtonsClass;
        this.gameButtonTypes = ['play', 'instructions', 'settings'];
        this.marmotNumberHtml = `<h4><span class="timer-container">Timer: <span class="timer-container__countdown">0</span></span></h4><h4 class="marmot-hit__left">Hits: <span class="marmot-hit__total">0</span></h4>`;
    }
}

const gameButton = new GameButton('game-area', '.game-buttons');
const gameArea = document.getElementById(gameButton.gameAreaId);
const gameButtonContainer = gameArea.querySelector(gameButton.gameButtonsClass);

export function createGameButtons() {
    gameButtonContainer.innerHTML = '';

    gameButton.gameButtonTypes.map((type, index) => {
        let button = document.createElement('button');
        button.id = `${type}-btn`;
        button.classList.add('button');
        button.setAttribute('type', 'button');
        button.setAttribute('data-type', type);
        button.innerHTML = `${capitaliseFirstLetter(type)}`;
        button.addEventListener('click', openModal);

        gameButtonContainer.appendChild(button);
    });
}

createGameButtons();

export function createGameDisplay() {
    gameButtonContainer.innerHTML = '';
    const numberOfMarmotsDiv = document.createElement('div');
    numberOfMarmotsDiv.classList.add('marmot-hit');
    numberOfMarmotsDiv.innerHTML = gameButton.marmotNumberHtml;

    gameButtonContainer.append(numberOfMarmotsDiv);
}

export function endGameDisplay(score) {
    gameButtonContainer.innerHTML = '';

    const gameOverDiv = document.createElement('div');
    gameOverDiv.innerHTML = `<h4>Game over! You scored <span class="marmot-hit__total">${score}</span></h4>`;
    const scoreboardDiv = document.createElement('div');
    scoreboardDiv.classList.add('scoreboard');
    const scoreboard = getRecords();
    scoreboardDiv.innerHTML += '<h4>Scoreboard</h4>';

    for (let i = 0; i < scoreboard.length; i++) {
        scoreboardDiv.innerHTML += "<div><div class='scoreboard__name'>" + scoreboard[i].name + "</div><div class='scoreboard__score'>" + scoreboard[i].score + "</div></div>";
    }

    gameButtonContainer.append(gameOverDiv, scoreboardDiv);
}
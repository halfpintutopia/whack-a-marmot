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

class GameButton {
    constructor(
        gameAreaId,
        gameButtonsClass
    ) {
        this.gameAreaId = gameAreaId;
        this.gameButtonsClass = gameButtonsClass;
        this.gameButtonTypes = ['play', 'instructions', 'settings'];
        this.timerHtml = `<h4><span class="timer-container">Timer: <span class="timer-container__countdown">0</span></span></h4>`;
        this.marmotNumberHtml = `<h4>Hits: <span class="marmot-hit__total">0</span></h4><h4 class="marmot-hit__left">Missed: <span class="marmot-hit__miss">0</span></h4>`;

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

    const timerDiv = document.createElement('div');
    timerDiv.innerHTML = gameButton.timerHtml;

    const numberOfMarmotsDiv = document.createElement('div');
    numberOfMarmotsDiv.classList.add('marmot-hit');
    numberOfMarmotsDiv.innerHTML = gameButton.marmotNumberHtml;

    gameButtonContainer.append(timerDiv, numberOfMarmotsDiv);
}
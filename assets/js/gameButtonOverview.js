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

class GameButtonOverview {
    constructor(
        gameAreaId,
        gameButtonsClass
    ) {
        this.gameAreaId = gameAreaId;
        this.gameButtonsClass = gameButtonsClass;
        this.gameButtonTypes = ['play', 'instructions', 'settings'];
    }
}

const gameButtonOverview = new GameButtonOverview('game-area', '.game-buttons');
const gameArea = document.getElementById(gameButtonOverview.gameAreaId);
const gameButtonContainer = gameArea.querySelector(gameButtonOverview.gameButtonsClass);

function createGameButtons() {
    gameButtonContainer.innerHTML = '';

    gameButtonOverview.gameButtonTypes.map((type, index) => {
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

export function createGameBoard() {
    gameButtonContainer.innerHTML = '';

    const timerDiv = document.createElement('div');
    timerDiv.innerHTML = `<h4><span class="timer-container">Timer: <span class="timer-container__countdown">0</span></span></h4>`;

    const numberOfMarmotsDiv = document.createElement('div');
    numberOfMarmotsDiv.classList.add('marmot-hit');
    numberOfMarmotsDiv.innerHTML = `<h4>Hits: <span class="marmot-hit__total">0</span></h4><h4 class="marmot-hit__left">Missed: <span class="marmot-hit__miss">0</span></h4>`;

    gameButtonContainer.append(timerDiv, numberOfMarmotsDiv);
}
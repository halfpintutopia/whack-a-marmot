/*jshint esversion: 6, expr: true */
/* jshint -W117 */

/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

import {addShakeAnimation} from "./hammer.js";

export class Game {
    constructor(gameId) {
        this.gameId = gameId;
        this.marmotClass = '.marmot__img';
        this.timerContainerClass = '.timer-container__countdown';
        this.marmotPopTimerId = null;
        this.countdownTimerId = null;
        this.timerInterval = 1000;
        this.countDownTimerInterval = 1000;
        this.currentTime = 10;
        this.currentScore = 0;
    }

    updateScore() {
        return this.currentScore++;
    }
}

const game = new Game('game-area');
const gameBoard = document.getElementById(game.gameId);


function hitMarmot() {
    const score = document.querySelector('.marmot-hit__total');
    score.innerHTML = game.updateScore();
}

function pickRandomHole() {
    const marmots = document.querySelectorAll(game.marmotClass);

    marmots.forEach(marmot => {
        marmot.classList.remove('pop');
        marmot.removeEventListener('click', hitMarmot);
        marmot.removeEventListener('click', addShakeAnimation);
    });

    const marmot = marmots[Math.floor(Math.random() * marmots.length)];
    marmot.classList.add('pop');
    marmot.addEventListener('click', hitMarmot);
    marmot.addEventListener('click', addShakeAnimation);
}

function moveMarmot() {
    game.marmotPopTimerId = setInterval(pickRandomHole, game.timerInterval);
    game.countdownTimerId = setInterval(countdown, game.countDownTimerInterval);
}

function countdown() {
    const timerContainer = document.querySelector(game.timerContainerClass);
    timerContainer.innerHTML = game.currentTime;
    if (game.currentTime === 0) {
        clearInterval(game.marmotPopTimerId);
        clearInterval(game.countdownTimerId);
        removeAllListeners();
    } else {
        --game.currentTime;
    }
}

function removeAllListeners() {
    const marmots = document.querySelectorAll(game.marmotClass);

      marmots.forEach(marmot => {
        marmot.removeEventListener('click', hitMarmot);
        marmot.removeEventListener('click', addShakeAnimation);
    });
}

export function startGame() {
    gameBoard.classList.add('active');
    moveMarmot();
}
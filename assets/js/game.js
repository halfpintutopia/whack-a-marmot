/*jshint esversion: 6, expr: true */
/* jshint -W117 */

/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

import {addShakeAnimation} from "./hammer.js";
import {updateRecords} from "./records.js";
import {endGameDisplay} from "./gameButton.js";
import {createMarmotHoles} from "./board.js";

export class Game {
    constructor(gameId) {
        this.gameId = gameId;
        this.marmotClass = '.marmot__img';
        this.timerContainerClass = '.timer-container__countdown';
        this.marmotPopTimerId = null;
        this.countdownTimerId = null;
        this.timerInterval = 2000;
        this.countDownTimerInterval = 1000;
        this.currentTime = 30;
        this.currentScore = 0;
    }

    updateScore() {
        return this.currentScore++;
    }

    updateDifficulty(level) {
        if (level === 'hard') {
            game.timerInterval = 500;
        } else {
            game.timerInterval = 1000;
        }
    }
}

const game = new Game('game-area');
const gameBoard = document.getElementById(game.gameId);
const holesContainer = document.querySelector('.holes-container');

function hitMarmot(e) {
    const score = document.querySelector('.marmot-hit__total');
    score.innerHTML = game.updateScore();
    e.currentTarget.removeEventListener('mousedown', hitMarmot);
    e.currentTarget.removeEventListener('touchstart', hitMarmot);
}

function pickRandomHole() {
    const marmots = document.querySelectorAll(game.marmotClass);

    marmots.forEach(marmot => {
        marmot.classList.remove('pop');
        marmot.removeEventListener('mousedown', hitMarmot);
        marmot.removeEventListener('touchstart', hitMarmot);
        marmot.removeEventListener('mousedown', addShakeAnimation);
        marmot.removeEventListener('touchstart', addShakeAnimation);
    });

    const marmot = marmots[Math.floor(Math.random() * marmots.length)];
    marmot.classList.add('pop');
    marmot.addEventListener('mousedown', hitMarmot);
    marmot.addEventListener('touchstart', hitMarmot);
    marmot.addEventListener('mousedown', addShakeAnimation);
    marmot.addEventListener('touchstart', addShakeAnimation);
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
        saveScore();
        holesContainer.innerHTML = '';
        endGameDisplay(game.currentScore);
    } else {
        --game.currentTime;
    }
}

function removeAllListeners() {
    const marmots = document.querySelectorAll(game.marmotClass);

    marmots.forEach(marmot => {
        marmot.removeEventListener('mousedown', hitMarmot);
        marmot.removeEventListener('touchstart', hitMarmot);
        marmot.removeEventListener('mousedown', addShakeAnimation);
        marmot.removeEventListener('touchstart', addShakeAnimation);
    });
}

function saveScore() {
    updateRecords(document.querySelector('.marmot-hit__total').innerHTML);
}

export function startGame() {
    gameBoard.classList.add('active');
    createMarmotHoles();
    game.currentTime = 30;
    moveMarmot();
}

export function updateSpeedSetting(level) {
    game.updateDifficulty(level);
}
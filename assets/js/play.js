/*jshint esversion: 6, expr: true */
/* jshint -W117 */
/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

import {createGameBoard} from "./gameButton.js";
import {closeModal} from "./modal.js";
import {startGame} from "./game.js";
import {showHideExitBtn} from "./board.js";

const timerContainer = document.querySelector('.timer-container__countdown');
const start = document.querySelector('[data-type="add-player"]');

start.addEventListener('click', function (e) {
    closeModal(e);
    createGameBoard();
    showHideExitBtn();
    startGame();
});
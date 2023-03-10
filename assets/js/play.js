/*jshint esversion: 6, expr: true */
/* jshint -W117 */
/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

import {createGameDisplay} from "./gameButton.js";
import {closeModal} from "./modal.js";
import {startGame} from "./game.js";
import {changeGridLayout, showHideExitBtn} from "./board.js";

const start = document.querySelector('[data-type="add-player"]');

start.addEventListener('click', function (e) {
    closeModal(e);
    createGameDisplay();
    showHideExitBtn();
    changeGridLayout();
    startGame();
});
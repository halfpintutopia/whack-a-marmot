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
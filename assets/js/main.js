import {Game} from "./game.js";
import {Audio} from "./audio.js";
import {Carousel} from "./carousel.js";
import {Hammer} from "./hammer.js";
import {Modal} from "./modal.js";
import {SwitchButton} from "./switchButton.js";

const game = new Game('game-area');
const audio = new Audio('#music-button', 'button__music--audio', 'silent');
const carouselSettings = new Carousel('#carousel-settings');
const carouselInstructions = new Carousel('#carousel-instructions');
const hammer = new Hammer('#game-area', '.hammer');
const modalSettings = new Modal('#modal-settings', '.modal__overlay', '#settings-btn', '.modal__button--close');
const modalInstructions = new Modal('#modal-instructions', '.modal__overlay', '#instructions-btn', '.modal__button--close');
const switchButton = new SwitchButton('.button-container');
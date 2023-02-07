import {Game} from "./game.js";
import {Audio} from "./audio.js";
import {Carousel} from "./carousel.js";
import {Hammer} from "./hammer.js";
import {SwitchButton} from "./switchButton.js";

window.addEventListener('DOMContentLoaded', function () {
    const game = new Game('game-area');

    window.addEventListener('gameReady', function () {
        const audio = new Audio('#music-button', 'button__music--audio', 'silent');
        const carouselSettings = new Carousel('#carousel-settings');
        const carouselInstructions = new Carousel('#carousel-instructions');
        const hammer = new Hammer('#game-area', '.hammer');
        const switchButton = new SwitchButton('.button-container');
    });
});
import {Game} from "./game.js";
import {Audio} from "./audio.js";
import {Carousel} from "./carousel.js";
import {Hammer} from "./hammer.js";
import {SwitchButton} from "./switchButton.js";
import {Leaderboard} from "./leaderboard.js";

window.addEventListener('DOMContentLoaded', function () {
    const game = new Game('game-area');
    const audio = new Audio('#music-button', 'button__music--audio', 'silent');
    const leaderboard = new Leaderboard('[data-input="username"]', 'button[data-type="add-player"]');

    window.addEventListener('gameReady', function () {
        const carouselSettings = new Carousel('#carousel-settings');
        const carouselInstructions = new Carousel('#carousel-instructions');
        const hammer = new Hammer('#game-area', '.hammer');
        const switchButton = new SwitchButton('.button-container');
    });
});
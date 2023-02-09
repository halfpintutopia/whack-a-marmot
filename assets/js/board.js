/*jshint esversion: 6, expr: true */
/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

import {createGameButtons} from "./gameButton.js";
import {debounce} from "./helpers.js";

export class Board {
    constructor(gameId, gameButtonsClass) {
        this.gameId = gameId;
        this.gameButtonsClass = gameButtonsClass;
        this.playBtnId = 'play-btn';
        this.exitBtnId = 'exit-btn';
        this.screenSize = '';
        this.gameResponsiveMinWidth = 768;
        this.desktopClass = 'desktop';
        this.mobileClass = 'mobile';
        this.gameGridColumn = 0;
        this.gameGridRow = 0;
        this.gameGridColumnMobile = 3;
        this.gameGridColumnDesktop = 4;
        this.gameGridRowMobile = 2;
        this.gameGridRowDesktop = 4;
        this.numberOfHoles = 0;
        this.holeClass = 'hole';
        this.marmotContainerClass = 'marmot__container';
        this.holeContainerClass = 'hole__container';
        this.marmotImageClass = 'marmot__img';
        this.marmotImageSrc = 'assets/media/images/marmot.svg';
        this.marmotImageAlt = 'Marmot';
    }


    removeGridLayout() {
        const holesContainer = document.querySelector('.holes-container');
        holesContainer.innerHTML = '';
    }

    createMarmotHoles() {
        let start = this.screenSize === 'desktop' ? 2 : 1;

        for (let i = start; i <= this.gameGridRow; i++) {
            for (let j = 1; j <= this.gameGridColumn; j++) {
                const holesContainer = document.querySelector('.holes-container');
                const hole = document.createElement('div');
                hole.classList.add(this.holeClass);

                hole.style.gridArea = `${i} / ${j} / ${i + 1} / ${j + 1}`;

                const marmotContainer = document.createElement('div');
                marmotContainer.classList.add(this.marmotContainerClass);

                const holeContainer = document.createElement('div');
                holeContainer.classList.add(this.holeContainerClass);

                const marmotImage = document.createElement('img');
                marmotImage.classList.add(this.marmotImageClass);
                marmotImage.setAttribute('src', this.marmotImageSrc);
                marmotImage.setAttribute('alt', this.marmotImageAlt);

                marmotContainer.append(holeContainer, marmotImage);

                hole.append(marmotContainer);
                holesContainer.append(hole);
            }
        }

        this.marmots = document.querySelectorAll(`.${this.marmotImageClass}`);
        // this.moveMarmot();
    }

    revealGameArea() {
        this.showHideExitBtn();
    }
}

const board = new Board('game-area', '.game-buttons');
const game = document.getElementById(board.gameId);
const holesContainer = document.querySelector('.holes-container');
const gameButtonContainer = document.querySelector(board.gameButtonsClass);
const exitButton = document.getElementById(board.exitBtnId);

export function changeGridLayout() {
    console.log(holesContainer);
    holesContainer.innerHTML = '';

    if (window.innerWidth > board.gameResponsiveMinWidth) {
        document.body.classList.add(board.desktopClass);
        document.body.classList.remove(board.mobileClass);
        board.screenSize = 'desktop';
        board.numberOfHoles = 12;
        board.gameGridColumn = board.gameGridColumnDesktop;
        board.gameGridRow = board.gameGridRowDesktop;
    } else {
        document.body.classList.add(board.mobileClass);
        document.body.classList.remove(board.desktopClass);
        board.screenSize = 'mobile';
        board.numberOfHoles = 6;
        board.gameGridColumn = board.gameGridColumnMobile;
        board.gameGridRow = board.gameGridRowMobile;
    }

    board.createMarmotHoles();
}

export function initExitGame() {
    game.classList.remove('active');
    board.removeGridLayout();
    showHideExitBtn();
    createGameButtons();
}

exitButton.addEventListener('click', initExitGame);

export function showHideExitBtn() {
    if (exitButton.classList.contains('hidden')) {
        exitButton.classList.remove('hidden');
        exitButton.addEventListener('click', initExitGame);
    } else {
        exitButton.removeEventListener('click', initExitGame);
        exitButton.classList.add('hidden');
    }
}

window.addEventListener('resize', debounce(changeGridLayout, 500));
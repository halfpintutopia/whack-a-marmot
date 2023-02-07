/*jshint esversion: 6, expr: true */
/* jshint -W117 */
/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */
/* https://github.com/jshint/jshint/issues/3361 */

/* https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/ */
import {openModal} from "./modal.js";

export class Game {
    constructor(gameId) {
        this.gameId = gameId;
        this.playBtnId = 'play-btn';
        this.exitBtnId = 'exit-btn';
        this.gameButtonsClass = '.game-buttons';
        this.activeClass = 'active';
        this.hiddenClass = 'hidden';
        this.desktopClass = 'desktop';
        this.mobileClass = 'mobile';
        this.holeClass = 'hole';
        this.marmotContainerClass = 'marmot__container';
        this.holeContainerClass = 'hole__container';
        this.marmotImageClass = 'marmot__img';
        this.marmotImageSrc = 'assets/media/images/marmot.svg';
        this.marmotImageAlt = 'Marmot';

        this.clickEvent = 'click';
        this.customEvent = 'gameReady';
        this.resizeEvent = 'resize';

        this.game = document.getElementById(this.gameId);
        this.gameButtonContainer = this.game.querySelector(this.gameButtonsClass);
        this.playBtn = '';
        this.exitBtn = '';
        this.screenSize = '';
        this.numberOfHoles = 0;
        this.marmotPlacementArray = [];

        this.gameButtons = ['play', 'instructions', 'settings'];
        this.gameLocalStorageKeyGame = 'game';
        this.gameGridColumnMobile = 3;
        this.gameGridColumnDesktop = 4;
        this.gameGridRowMobile = 2;
        this.gameGridRowDesktop = 4;
        this.gameResponsiveMinWidth = 768;
        this.timeout = 300;

        if (this.game && this.gameButtonContainer) {
            this.createButtons();
            this.initHTMLElements();
            this.initEvents();
            this.changeGridLayout();
        }
    }

    createButtons() {
        this.gameButtonContainer.innerHTML = '';

        this.gameButtons.map((type, index) => {
            let button = document.createElement('button');
            button.id = `${type}-btn`;
            button.classList.add('button');
            button.setAttribute('type', 'button');
            button.setAttribute('data-type', type);
            button.innerHTML = `${this.capitaliseFirstLetter(type)}`;
            switch (type) {
                case 'play':
                    button.addEventListener(this.clickEvent, e => this.initStartGame(e));
                    break;
                case 'settings':
                    button.addEventListener(this.clickEvent, openModal);
                    break;
                case 'instructions':
                    button.addEventListener(this.clickEvent, openModal);
                    break;
            }

            this.gameButtonContainer.appendChild(button);
        });

    }

    initHTMLElements() {
        this.playBtn = document.getElementById(this.playBtnId);
        this.exitBtn = document.getElementById(this.exitBtnId);
    }

    initEvents() {
        const gameEvent = new CustomEvent(this.customEvent);
        window.dispatchEvent(gameEvent);

        // Issue with on resizing losing this https://stackoverflow.com/questions/47017093/es6-class-variable-gets-undefined
        window.addEventListener(this.resizeEvent, this.changeGridLayout.bind(this));
    }

    initStartGame(e) {
        this.game.classList.add(this.activeClass);
        this.revealGameArea();
    }

    revealGameArea() {
        this.createInnerGameBoard();
        this.showHideExitBtn();
    }

    hideGameArea() {
        this.createButtons();
        this.showHideExitBtn();
    }

    createInnerGameBoard() {
        this.gameButtonContainer.innerHTML = '';

        const numberOfLivesDiv = document.createElement('div');
        numberOfLivesDiv.innerHTML = `<h4><span class="lives__remaining">3</span> out of <span class="lives__total">3</span></h4>`;

        const numberOfMarmotsDiv = document.createElement('div');
        numberOfMarmotsDiv.innerHTML = `<h4 class="marmot-hit__total"><span>0</span> marmots</h4>`;

        this.gameButtonContainer.append(numberOfLivesDiv, numberOfMarmotsDiv);
    }


    showHideExitBtn() {
        if (this.exitBtn.classList.contains(this.hiddenClass)) {
            this.exitBtn.classList.remove(this.hiddenClass);
            this.exitBtn.addEventListener(this.clickEvent, e => this.initExitGame(e));
        } else {
            this.exitBtn.removeEventListener(this.clickEvent, e => this.initExitGame(e));
            this.exitBtn.classList.add(this.hiddenClass);
        }

    }

    initExitGame(e) {
        this.game.classList.remove(this.activeClass);
        this.hideGameArea();
    }

    // https://www.freecodecamp.org/news/javascript-capitalize-first-letter-of-word/
    capitaliseFirstLetter(word) {
        return `${word.charAt(0).toUpperCase()}${word.substring(1)}`;
    }

    changeGridLayout() {
        if (window.innerWidth > this.gameResponsiveMinWidth) {
            document.body.classList.add(this.desktopClass);
            document.body.classList.remove(this.mobileClass);
            this.screenSize = 'desktop';
            this.numberOfHoles = 8;
        } else {
            document.body.classList.add(this.mobileClass);
            document.body.classList.remove(this.desktopClass);
            this.screenSize = 'mobile';
            this.numberOfHoles = 6;
        }

        this.placeMarmotHoles();
    }

    placeMarmotHoles() {
        let i = 0;
        while (i < this.numberOfHoles) {
            this.createMarmotHole();
            i++;
        }
    }

    createMarmotHole() {
        const hole = document.createElement('div');
        const holesContainer = document.querySelector('.holes-container');
        hole.classList.add('hole');

        hole.style.gridArea = this.generateGridArea();

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

    generateGridArea() {
        let startRow, startColumn, placement;
        if (this.screenSize === 'mobile') {
            startRow = this.generateNumberBetweenMinAndMax(1, this.gameGridRowMobile);
            startColumn = this.generateNumberBetweenMinAndMax(1, this.gameGridColumnMobile);
        } else {
            startRow = this.generateNumberBetweenMinAndMax(this.gameGridRowDesktop / 2, this.gameGridRowDesktop);
            startColumn = this.generateNumberBetweenMinAndMax(1, this.gameGridColumnDesktop);
        }

        placement = `${startRow} / ${startColumn} / ${startRow + 1} / ${startColumn + 1}`;

        if (this.marmotPlacementArray.includes(placement)) {
            console.log('already inside');
            this.generateGridArea();
        }

        this.marmotPlacementArray.push(`${startRow} / ${startColumn} / ${startRow + 1} / ${startColumn + 1}`);

        return placement
    }

    // https://stackoverflow.com/a/24152886/8614652
    generateNumberBetweenMinAndMax(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
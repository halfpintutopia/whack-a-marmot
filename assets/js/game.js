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
import {debounce, generateNumberBetweenMinAndMax, capitaliseFirstLetter} from "./helpers.js";

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
        this.marmots = '';
        this.timerDiv = '';

        this.playBtn = '';
        this.exitBtn = '';
        this.screenSize = '';
        this.numberOfHoles = 0;
        this.marmotPlacementArray = [];

        this.gameButtons = ['play', 'instructions', 'settings'];
        this.gameLocalStorageKeyGame = 'game';
        this.gameGridColumn = 0;
        this.gameGridRow = 0;
        this.gameGridColumnMobile = 3;
        this.gameGridColumnDesktop = 4;
        this.gameGridRowMobile = 2;
        this.gameGridRowDesktop = 4;
        this.gameResponsiveMinWidth = 768;
        this.timeout = 300;
        this.marmotPopTimerId = null;
        this.countdownTimerId = null;
        this.lastMarmot = '';
        this.timer = 30000;
        this.timerInterval = 500;
        this.countDownTimerInterval = 1000;
        this.currentTime = 60;
        this.currentScore = 0;

        // Fix events with bind https://stackoverflow.com/a/22870717/8614652
        this.initStartListener = this.initStartGame.bind(this);
        this.hitMarmotListener = this.hitMarmot.bind(this);

        if (this.game && this.gameButtonContainer) {
            this.createButtons();
            this.initHTMLElements();
            this.initEvents();
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
            button.innerHTML = `${capitaliseFirstLetter(type)}`;
            switch (type) {
                case 'play':
                    button.addEventListener(this.clickEvent, this.initStartListener);
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

        const timerDiv = document.createElement('div');
        timerDiv.innerHTML = `<h4><span class="timer-container">Timer: <span class="timer-container__countdown">0</span></span></h4>`;

        const numberOfMarmotsDiv = document.createElement('div');
        numberOfMarmotsDiv.classList.add('marmot-hit');
        numberOfMarmotsDiv.innerHTML = `<h4>Hits: <span class="marmot-hit__total">0</span></h4><h4 class="marmot-hit__left">Missed: <span class="marmot-hit__miss">0</span></h4>`;

        this.gameButtonContainer.append(timerDiv, numberOfMarmotsDiv);

        this.timerDiv = document.querySelector('.timer-container__countdown');

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


    changeGridLayout() {
        if (window.innerWidth > this.gameResponsiveMinWidth) {
            document.body.classList.add(this.desktopClass);
            document.body.classList.remove(this.mobileClass);
            this.screenSize = 'desktop';
            this.numberOfHoles = 12;
            this.gameGridColumn = this.gameGridColumnDesktop;
            this.gameGridRow = this.gameGridRowDesktop;
        } else {
            document.body.classList.add(this.mobileClass);
            document.body.classList.remove(this.desktopClass);
            this.screenSize = 'mobile';
            this.numberOfHoles = 6;
            this.gameGridColumn = this.gameGridColumnMobile;
            this.gameGridRow = this.gameGridRowMobile;
        }

        this.createMarmotHoles();
    }

    removeGridLayout() {
        const holesContainer = document.querySelector('.holes-container');
        holesContainer.innerHTML = '';
    }

    createMarmotHoles() {
        let numberOfMarmots,
            start = this.screenSize === 'desktop' ? 2 : 1;

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
        this.moveMarmot();
    }

    startGame() {
        this.moveMarmot();
    }

    hitMarmot() {
        const score = document.querySelector('.marmot-hit__total');
        score.innerHTML = ++this.currentScore;
    }

    moveMarmot() {
        this.marmotPopTimerId = setInterval(this.pickRandomHole.bind(this), this.timerInterval);
        this.countdownTimerId = setInterval(this.countdown.bind(this), this.countDownTimerInterval);
    }

    pickRandomHole() {
        console.log(this.hitMarmotListener);
        this.marmots.forEach(marmot => {
            console.log(marmot);
            marmot.classList.remove('pop');
            marmot.removeEventListener(this.clickEvent, this.hitMarmotListener);
        });

        const marmot = this.marmots[Math.floor(Math.random() * this.marmots.length)];
        marmot.classList.add('pop');
        marmot.addEventListener(this.clickEvent, this.hitMarmotListener);
    }

    countdown() {
        this.timerDiv.innerHTML = --this.currentTime;
        if (this.currentTime === 0) {
            clearInterval(this.marmotPopTimerId);
            clearInterval(this.countdownTimerId);
        }
        //TODO add leaderboard
    }

    initHTMLElements() {
        this.playBtn = document.getElementById(this.playBtnId);
        this.exitBtn = document.getElementById(this.exitBtnId);
    }

    initEvents() {
        const gameEvent = new CustomEvent(this.customEvent);
        window.dispatchEvent(gameEvent);

        // Issue with on resizing losing this https://stackoverflow.com/questions/47017093/es6-class-variable-gets-undefined
        window.addEventListener(this.resizeEvent, debounce(this.changeGridLayout.bind(this), 500));
    }

    initStartGame() {
        this.game.classList.add(this.activeClass);
        this.revealGameArea();
        this.changeGridLayout();
        this.startGame();
    }

    initExitGame() {
        this.game.classList.remove(this.activeClass);
        this.hideGameArea();
        this.removeGridLayout();
    }
}
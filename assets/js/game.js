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

        this.clickEvent = 'click';
        this.customEvent = 'gameReady';
        this.resizeEvent = 'resize';

        this.game = document.getElementById(this.gameId);
        this.gameButtonContainer = this.game.querySelector(this.gameButtonsClass);
        this.playBtn = '';
        this.exitBtn = '';

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
            button.innerHTML = `${this.capitaliseFirstLetter(type)}`;
            if (type === 'play') {
                button.addEventListener(this.clickEvent, e => this.initStartGame(e));
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
        console.log(typeof window.innerWidth, typeof this.gameResponsiveMinWidth, this.gameResponsiveMinWidth);
        if (window.innerWidth > this.gameResponsiveMinWidth) {
            console.log('desktop');
            document.body.classList.add(this.desktopClass);
            document.body.classList.remove(this.mobileClass);
        } else {
            console.log('mobile');
            document.body.classList.add(this.mobileClass);
            document.body.classList.remove(this.desktopClass);
        }
    }


}
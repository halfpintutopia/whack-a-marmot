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
class Game {
    #htmlElements = {
        game: '',
        gameButtonContainer: '',
        playBtn: '',
        exitBtn: ''
    };
    #settings = {
        id: {
            game: '',
            playBtn: 'play-btn',
            exitBtn: 'exit-btn'
        },
        classes: {
            active: 'active',
            hidden: 'hidden',
            gameButtons: '.game-buttons',
            desktop: 'desktop',
            mobile: 'mobile'
        },
        events: {
            click: 'click',
            custom: 'gameReady',
            resize: 'resize'
        },
        game: {
            buttons: ['play', 'instructions', 'settings'],
            localStorageKeyGame: 'game',
            gridColumnMobile: 3,
            gridColumnDesktop: 4,
            gridRowMobile: 2,
            gridRowDesktop: 4,
            responsiveMinWidth: 768,
        }
    };

    constructor(gameId) {
        this.#settings.id.game = gameId;
        this.#htmlElements.game = document.getElementById(this.#settings.id.game);
        this.#htmlElements.gameButtonContainer = this.#htmlElements.game.querySelector(this.#settings.classes.gameButtons);
        if (this.#htmlElements.game) {
            this.createButtons();
            this.initHTMLElements();
            this.initEvents();
            this.changeGridLayout();
        }
    }

    createButtons() {
        this.#htmlElements.gameButtonContainer.innerHTML = '';

        this.#settings.game.buttons.map((type, index) => {
            let button = document.createElement('button');
            button.id = `${type}-btn`;
            button.classList.add('button');
            button.setAttribute('type', 'button');
            button.innerHTML = `${this.capitaliseFirstLetter(type)}`;
            if (type === 'play') {
                button.addEventListener(this.#settings.events.click, e => this.initStartGame(e));
            }
            this.#htmlElements.gameButtonContainer.appendChild(button);
        });

    }

    initHTMLElements() {
        this.#htmlElements.playBtn = document.getElementById(this.#settings.id.playBtn);
        this.#htmlElements.exitBtn = document.getElementById(this.#settings.id.exitBtn);
    }

    initEvents() {
        const gameEvent = new CustomEvent(this.#settings.events.custom);
        window.dispatchEvent(gameEvent);

        window.addEventListener(this.#settings.events.resize, this.changeGridLayout);
    }

    initStartGame(e) {
        this.#htmlElements.game.classList.add(this.#settings.classes.active);
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

    storageHandler() {

    }

    createInnerGameBoard() {
        this.#htmlElements.gameButtonContainer.innerHTML = '';

        const numberOfLivesDiv = document.createElement('div');
        numberOfLivesDiv.innerHTML = `<h4><span class="lives__remaining">3</span> out of <span class="lives__total">3</span></h4>`;

        const numberOfMarmotsDiv = document.createElement('div');
        numberOfMarmotsDiv.innerHTML = `<h4 class="marmot-hit__total"><span>0</span> marmots</h4>`;

        this.#htmlElements.gameButtonContainer.append(numberOfLivesDiv, numberOfMarmotsDiv);
    }


    showHideExitBtn() {
        if (this.#htmlElements.exitBtn.classList.contains(this.#settings.classes.hidden)) {
            this.#htmlElements.exitBtn.classList.remove(this.#settings.classes.hidden);
            this.#htmlElements.exitBtn.addEventListener(this.#settings.events.click, e => this.initExitGame(e));
        } else {
            this.#htmlElements.exitBtn.removeEventListener(this.#settings.events.click, e => this.initExitGame(e));
            this.#htmlElements.exitBtn.classList.add(this.#settings.classes.hidden);
        }

    }

    initExitGame(e) {
        this.#htmlElements.game.classList.remove(this.#settings.classes.active);
        this.hideGameArea();
    }

    // https://www.freecodecamp.org/news/javascript-capitalize-first-letter-of-word/
    capitaliseFirstLetter(word) {
        return `${word.charAt(0).toUpperCase()}${word.substring(1)}`;
    }

    changeGridLayout(e) {
        console.log(window.innerWidth > this.#settings.game.responsiveMinWidth);
        // if (window.innerWidth > this.#settings.game.responsiveMinWidth) {
        //     document.body.classList.add(this.#settings.classes.desktop);
        //     document.body.classList.remove(this.#settings.classes.mobile);
        // } else {
        //     document.body.classList.add(this.#settings.classes.mobile);
        //     document.body.classList.remove(this.#settings.classes.desktop);
        // }
    }
}
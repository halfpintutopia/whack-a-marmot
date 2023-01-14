/*jshint esversion: 6, expr: true */
/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */
class Hammer {
    #htmlElements = {
        gameContainer: '',
        cursor: ''
    };
    #settings = {
        ids: {
            gameContainer: ''
        },
        classes: {
            cursor: '',
            whack: 'whack'
        },
        events: {
            mouseMove: 'mousemove',
            click: 'click'
        },
    };

    constructor(gameContainerId, cursorClass) {
        this.#settings.ids.gameContainer = gameContainerId;
        this.#settings.classes.cursor = cursorClass;

        if (document.querySelector(this.#settings.ids.gameContainer)) {
            this.#htmlElements.gameContainer = document.querySelector(this.#settings.ids.gameContainer);
            this.initHTMLElements();
            this.initEvents();
        }
    }

    initHTMLElements() {
        this.#htmlElements.cursor = this.#htmlElements.gameContainer.querySelector(this.#settings.classes.cursor);
        document.getElementById('play-btn').addEventListener('mousedown', function () {
            // document.querySelector('.hammer').classList.add('active')
            this.style.animation = 'shake 150ms 2 linear';
        })
        document.getElementById('play-btn').addEventListener('mouseup', function () {

            this.style.animation = '';
        })
         document.getElementById('play-btn').addEventListener('mouseleave', function () {
            // document.querySelector('.hammer').classList.add('active')
            this.style.animation = '';
        })
    }

    initEvents() {
        this.#htmlElements.gameContainer.addEventListener('mousemove', e => this.initCursor(e));
        this.#htmlElements.gameContainer.addEventListener('mousedown', e => this.addAnimationCursor(e));
    };

    initCursor(e) {
        const {clientWidth, clientHeight} = this.#htmlElements.cursor;
        // console.log(this.#htmlElements.cursor, e, e.pageY, e.pageX, e.pageY - 50, e.pageX - 50);

        // console.log(this.#htmlElements.cursor, e, e.pageY, e.pageX, e.pageY - 50, e.pageX - 50);
        this.#htmlElements.cursor.style.top = `${e.pageY - (clientHeight * 1.8)}px`;
        // this.#htmlElements.cursor.style.top = (e.pageY - (clientHeight / 2)) + 'px';
        this.#htmlElements.cursor.style.left = `${e.pageX + (clientWidth * .05)}px`;
        // this.#htmlElements.cursor.style.left = (e.pageX) + 'px';

        // this.#htmlElements.cursor.style.top = `${e.pageY - (clientHeight * 1.6)}px`;
        // this.#htmlElements.cursor.style.top = (e.pageY - (clientHeight / 2)) + 'px';
        // this.#htmlElements.cursor.style.left = `${e.pageX - (clientWidth * .3)}px`
    };

    addAnimationCursor(e) {
        e.target.addEventListener('mouseup', e => this.removeAnimationCursor(e));

        // e.target.addEventListener('mouseleave', e => this.removeAnimationCursor(e));

        // this.#htmlElements.cursor.classList.add('hit')
        this.#htmlElements.cursor.style.animation = `hammer-hit 550ms`;


    }

    removeAnimationCursor(e) {

        // this.#htmlElements.cursor.classList.add('hit')
        this.#htmlElements.cursor.style.animation = '';


    }
}


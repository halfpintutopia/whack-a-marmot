/*jshint esversion: 6, expr: true */

/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */
class Hammer {

    constructor(gameContainerId, cursorClass) {
        this.gameContainerId = gameContainerId;
        this.cursorClass = cursorClass;
        this.gameContainer = '';
        this.cursor = '';
        this.playBtnClass = 'play-btn';

        if (document.querySelector(this.gameContainerId)) {
            this.gameContainer = document.querySelector(this.gameContainerId);
            this.initHTMLElements();
            this.initEvents();
        }
    }

    initHTMLElements() {
        this.cursor = this.gameContainer.querySelector(this.cursorClass);
        document.getElementById(this.playBtnClass).addEventListener('mousedown', function () {
            // document.querySelector('.hammer').classList.add('active')
            this.style.animation = 'shake 150ms 2 linear';
        });
        document.getElementById(this.playBtnClass).addEventListener('mouseup', function () {

            this.style.animation = '';
        });
        document.getElementById(this.playBtnClass).addEventListener('mouseleave', function () {
            // document.querySelector('.hammer').classList.add('active')
            this.style.animation = '';
        });
    }

    initEvents() {
        this.gameContainer.addEventListener('mousemove', e => this.initCursor(e));
        this.gameContainer.addEventListener('mousedown', e => this.addAnimationCursor(e));
    }

    initCursor(e) {
        const {clientWidth, clientHeight} = this.cursor;
        // this.cursor.style.top = (e.pageY - (clientHeight / 2)) + 'px'; // perfect setting
        // this.cursor.style.left = (e.pageX - (clientWidth / 2)) + 'px'; // perfect setting
        this.cursor.style.top = `${e.pageY - (clientHeight * 1.25)}px`;
        this.cursor.style.left = `${e.pageX + (clientWidth * 0.1)}px`;
    }

    addAnimationCursor(e) {
        e.target.addEventListener('mouseup', e => this.removeAnimationCursor(e));
        // e.target.addEventListener('mouseleave', e => this.removeAnimationCursor(e));
        // this.cursor.classList.add('hit')
        this.cursor.style.animation = `hammer-hit 550ms`;
    }

    removeAnimationCursor(e) {
        // this.cursor.classList.add('hit')
        this.cursor.style.animation = '';
    }
}


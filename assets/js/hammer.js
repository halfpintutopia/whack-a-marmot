/*jshint esversion: 6, expr: true */

/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */
export class Hammer {
    constructor(gameContainerId, cursorClass) {
        this.gameContainerId = gameContainerId;
        this.cursorClass = cursorClass;
        this.gameContainer = '';
        this.cursor = '';
        this.playBtnId = 'play-btn';
    }
}

const hammer = new Hammer('game-area', '.hammer');
const gameContainer = document.getElementById(hammer.gameContainerId);
const cursor = document.querySelector(hammer.cursorClass);
const playBtn = document.getElementById(hammer.playBtnId)

gameContainer.addEventListener('mousemove', initCursor);
gameContainer.addEventListener('mousedown', e => addAnimationCursor(e));

function initCursor(e) {
    const {clientWidth, clientHeight} = cursor;
    // this.cursor.style.top = (e.pageY - (clientHeight / 2)) + 'px'; // perfect setting
    // this.cursor.style.left = (e.pageX - (clientWidth / 2)) + 'px'; // perfect setting
    cursor.style.top = `${e.pageY - (clientHeight * 1.25)}px`;
    cursor.style.left = `${e.pageX + (clientWidth * 0.1)}px`;
}


export function addShakeAnimation(e) {
    e.currentTarget.style.animation = 'shake 150ms 2 linear';
}

export function addAnimationCursor(e) {
    e.target.addEventListener('mouseup', removeAnimationCursor);
    // e.target.addEventListener('mouseleave', e => this.removeAnimationCursor(e));
    // this.cursor.classList.add('hit')
    cursor.style.animation = `hammer-hit 550ms`;
}

export function removeAnimationCursor(e) {
    // this.cursor.classList.add('hit')
    cursor.style.animation = '';
}
/*jshint esversion: 6, expr: true */
/* jshint -W117 */

/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */
export class Game {
    constructor(gameId) {
        this.gameId = gameId;
        this.marmots = '';
        this.timerDiv = '';
        this.marmotPopTimerId = null;
        this.countdownTimerId = null;
        this.timerInterval = 500;
        this.countDownTimerInterval = 1000;
        this.currentTime = 60;
        this.currentScore = 0;
    }

    startGame() {
        this.moveMarmot();
    }

    hitMarmot() {
        const score = document.querySelector('.marmot-hit__total');
        score.innerHTML = ++this.currentScore;
    }

    moveMarmot() {
        this.marmotPopTimerId = setInterval(this.pickRandomHoleListener, this.timerInterval);
        this.countdownTimerId = setInterval(this.countdownListener, this.countDownTimerInterval);
    }

    pickRandomHole() {
        this.marmots.forEach(marmot => {
            marmot.classList.remove('pop');
            marmot.removeEventListener(this.clickEvent, this.hitMarmotListener);
        });

        const marmot = this.marmots[Math.floor(Math.random() * this.marmots.length)];
        marmot.classList.add('pop');
        marmot.addEventListener(this.clickEvent, this.hitMarmotListener);
    }

    countdown() {
        this.timerDiv.innerHTML = this.currentTime;
        if (this.currentTime === 0) {
            clearInterval(this.marmotPopTimerId);
            clearInterval(this.countdownTimerId);
        } else {
            --this.currentTime;
        }
        //TODO add leaderboard
    }


}

const game = new Game('game-area');
const gameBoard = document.getElementById(game.gameId);

export function startGame() {
    gameBoard.classList.add('active');
    // this.revealGameArea();
    // this.changeGridLayout();
    // this.startGame();
}

export function exitGame() {
    gameBoard.classList.remove('active');
    // this.hideGameArea();
    // this.removeGridLayout();
}


/*jshint esversion: 6, expr: true */
/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

/* https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/ */
class Game {
    constructor(gameId) {
        this.gameId = gameId;
        this.playBtnId = '#play-btn';
        this.playBtn = '';
        this.eventClick = 'click';
        this.activeClass = 'active';
        this.hiddenClass = 'hidden';
        this.exitBtnId = '#exit-btn';

        if (document.querySelector(this.gameId)) {
            this.game = document.querySelector(this.gameId);
            this.initHTMLElements();
            this.initEvents();
        }
    }

    initHTMLElements() {
        this.playBtn = this.game.querySelector(this.playBtnId);
        this.exitBtn = document.querySelector(this.exitBtnId);
    }

    initEvents() {
        this.playBtn.addEventListener(this.eventClick, (e) => this.revealGamePage(e));
        this.exitBtn.addEventListener(this.eventClick, (e) => this.exitGame(e));
    }

    revealGamePage(e) {
        this.game.classList.add(this.activeClass);
        this.createInnerGameBoard(e.currentTarget.closest('.game-buttons'));
        this.showHideExitBtn();
    }

    createInnerGameBoard(gameButtonsDiv) {
        gameButtonsDiv.innerHTML = '';

        const numberOfLivesDiv = document.createElement('div');
        numberOfLivesDiv.innerHTML = `<h4><span class="lives__remaining">3</span> out of <span class="lives__total">3</span></h4>`;

        const numberOfMarmotsDiv = document.createElement('div');
        numberOfMarmotsDiv.innerHTML = `<h4 class="marmot-hit__total"><span>0</span> marmots</h4>`;

        gameButtonsDiv.append(numberOfLivesDiv, numberOfMarmotsDiv);
    }

    exitGame() {
        window.location.reload();
    }

    showHideExitBtn() {
        this.exitBtn.classList.contains(this.hiddenClass) ? this.exitBtn.classList.remove(this.hiddenClass) : this.exitBtn.classList.add(this.hiddenClass);
    }
}
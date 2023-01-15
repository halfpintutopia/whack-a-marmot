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

        this.pathTest();
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

    pathTest() {
        const hill2Path = document.querySelector('#hill-2-path');

        let randomPercent = Math.floor((Math.random()) * 100);
        const hillPathLength = Math.floor(hill2Path.getTotalLength());

        /*Get percentage for path*/
        randomPercent = randomPercent * hillPathLength / 100;
        let randomPoint = hill2Path.getPointAtLength(randomPercent);
        let angleCoordinatesA = hill2Path.getPointAtLength(randomPercent - 1);
        let angleCoordinatesB = hill2Path.getPointAtLength(randomPercent + 1);

        let currentAngle = Math.atan2(angleCoordinatesA.y - angleCoordinatesB.y, angleCoordinatesA.x - angleCoordinatesB.x) * 180 / Math.PI;
        console.log(randomPoint.x, randomPoint.y, currentAngle);
        const red = document.querySelector('div.red');
        red.style.transform = `translate3d(${randomPoint.x}px, ${randomPoint.y - 51}px, 0) rotate(${currentAngle}deg)`;

        red.addEventListener('click', function() {
            console.log(this);
        });
        // marmot.style.transform = `rotate(${currentAngle}deg)`;
        // const marmot = document.getElementById('marmot')
        // console.log(marmot);
        // marmot.setAttribute('transform', `translate(${randomPoint.x}, ${randomPoint.y})`);
        // hillSVG.appendChild(marmot);
        // console.log(randomPoint, currentAngle);
    }
}
/*jshint esversion: 6, expr: true */
/* jshint -W117 */
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
        this.gameButtonsClass = '.game-buttons';
        this.exitBtnId = '#exit-btn';
        this.localStorageKeyGame = 'game';

        if (document.querySelector(this.gameId)) {
            this.game = document.querySelector(this.gameId);
            this.initHTMLElements();
            this.initEvents();
        }
    }

    initHTMLElements() {
        this.playBtn = this.game.querySelector(this.playBtnId);
        this.exitBtn = document.querySelector(this.exitBtnId);
        this.gameButtonContainer = this.game.querySelector(this.gameButtonsClass);
    }

    initEvents() {
        this.playBtn.addEventListener(this.eventClick, this.initStartGame);
        this.exitBtn.addEventListener(this.eventClick, this.initExitGame);
        window.addEventListener('storage', (event) => {
            console.log(event);
            //
            // return true;
        });


        console.log(new URLSearchParams(window.location.search));


        // listen for keys in localhost
        // if (localStorage.getItem(this.localStorageKeyGame)) {
        //     // change to play view
        //     if (localStorage.getItem(this.localStorageKeyGame) === 'play') {
        //         this.revealGameArea();
        //     } else {
        //         // hide the game
        //         this.hideGameArea();
        //     }
        // }

        this.pathTest();
    }

    // TODO add debounce

    initStartGame() {
        localStorage.setItem('game', 'play');
    }

    initExitGame() {
        localStorage.setItem('game', 'off');
    }

    revealGameArea() {
        this.game.classList.add(this.activeClass);
        this.createInnerGameBoard();
        this.showHideExitBtn();
    }

    hideGameArea() {
        window.location.reload();
    }

    storageHandler() {

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
        this.exitBtn.classList.contains(this.hiddenClass) ? this.exitBtn.classList.remove(this.hiddenClass) : this.exitBtn.classList.add(this.hiddenClass);
    }

    pathTest() {
        const hill2Path = document.getElementById('hill-2-stroke');
        const hill2PathLength = Math.floor(hill2Path.getTotalLength());

        const target = document.querySelector('div.red');

        let randomPercent = Math.floor(Math.random() * 100 + 1);
        /*Get percentage for path*/
        let lengthPercentage = (randomPercent * hill2PathLength) / 100;

        const {x, y} = hill2Path.getPointAtLength(lengthPercentage);
        const {x: x2, y: y2} = hill2Path.getPointAtLength(lengthPercentage + 15);
        const slope = Math.atan2(y - y2, x - x2);

        console.log(target);
//         target.setAttribute('transform', `translate(${x}px ${y})px rotate(${slope * 180 / Math.PI}deg)`);
// target.style.transform = 'translate3d('+x+'px,'+y+'px, 0)';
target.style.transform = `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0) rotate(${180 - Math.round(slope * 180 / Math.PI)}deg)`;
target.style.transformOrigin = `center`;

        let hill2PathPoint = hill2Path.getPointAtLength(lengthPercentage);
        let pointX = Math.round(hill2PathPoint.x);
        let pointY = Math.round(hill2PathPoint.y);

        // let angleCoordinatesA = hill2Path.getPointAtLength(randomPercent - 1);
        // let angleCoordinatesB = hill2Path.getPointAtLength(randomPercent + 1);
        //
        // let currentAngle = Math.atan2(angleCoordinatesA.y - angleCoordinatesB.y, angleCoordinatesA.x - angleCoordinatesB.x) * 180 / Math.PI;
        // console.log(randomPoint.x, randomPoint.y, currentAngle);
        // red.style.transform = `translate3d(${randomPoint.x}px, ${randomPoint.y}px, 0) rotate(${currentAngle}deg)`;


        target.addEventListener('click', function () {
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
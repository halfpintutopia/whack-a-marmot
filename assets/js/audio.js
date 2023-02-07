/*jshint esversion: 6, expr: true */
/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

export class Audio {
    constructor(buttonContainer, musicButtonAudioClass, silentClass) {
        this.buttonContainer = buttonContainer;
        this.musicButtonAudio = musicButtonAudioClass;
        this.silent = silentClass;
        this.audioElement = '';
        this.slashIcon = '';

        if (document.querySelector(this.buttonContainer)) {
            this.buttonContainer = document.querySelector(this.buttonContainer);
            this.initHTMLElements();
            this.initEvents();
        }
    }

    initHTMLElements() {
        this.audioElement = this.buttonContainer.querySelector(`.${this.musicButtonAudio}`);
        this.slashIcon = this.buttonContainer.querySelector(`.${this.silent}`);
    }

    initEvents() {
        this.buttonContainer.addEventListener('click', () => {
            this.play();
        });
    }

    play() {
        if (this.audioElement.paused) {
            this.audioElement.play();
        } else {
            this.audioElement.pause();
        }

        if (this.slashIcon.classList.contains('active')) {
            this.slashIcon.classList.remove('active');
        } else {
            this.slashIcon.classList.add('active');
        }
    }
}


// const buttonContainer = document.querySelector(this.buttonContainer);
// const audioElement = this.buttonContainer.querySelector(`.${this.musicButtonAudio}`);
// const slashIcon = this.buttonContainer.querySelector(`.${this.silent}`);
//
// export default class Audio {
//     constructor(
//         buttonContainer,
//         musicButtonAudioClass,
//         silentClass
//     ) {
//         this.buttonContainer = buttonContainer;
//         this.musicButtonAudio = musicButtonAudioClass;
//         this.silent = silentClass;
//     }
// }
//
// export const audio = (function () {
//
//   // Keep this variable private inside this closure scope
//   var myGrades = [93, 95, 88, 0, 55, 91];
//
//   var average = function() {
//     var total = myGrades.reduce(function(accumulator, item) {
//       return accumulator + item;
//       }, 0);
//
//     return'Your average grade is ' + total / myGrades.length + '.';
//   };
//
//   var failing = function() {
//     var failingGrades = myGrades.filter(function(item) {
//         return item < 70;
//       });
//
//     return 'You failed ' + failingGrades.length + ' times.';
//   };
//
//   // Explicitly reveal public pointers to the private functions
//   // that we want to reveal publicly
//
//   return {
//     average: average,
//     failing: failing
//   }
// })();

// myGradesCalculate.failing(); // 'You failed 2 times.'
// myGradesCalculate.average(); // 'Your average grade is 70.33333333333333.'
//

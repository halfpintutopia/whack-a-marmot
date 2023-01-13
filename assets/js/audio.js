/*jshint esversion: 6 */

/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

class Audio {
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


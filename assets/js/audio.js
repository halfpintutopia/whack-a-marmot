/*jshint esversion: 6 */

/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

class Audio {
    #htmlElements = {
        buttonContainer: '',
        audioElement: '',
        musicButton: '',
        slashIcon: ''
    };
    #settings = {
        ids: {
            buttonContainer: ''
        },
        classes: {
            musicButtonAudio: '',
            slashIcon: '',
            active: 'active',
            silent: ''
        },
        events: {
            click: 'click'
        },
        tags: {
            icon: 'i'
        }
    };

    constructor(buttonContainer, musicButtonAudioClass, silentClass) {
        this.#settings.ids.buttonContainer = buttonContainer;
        this.#settings.classes.musicButtonAudio = musicButtonAudioClass;
        this.#settings.classes.silent = silentClass;

        if (document.querySelector(this.#settings.ids.buttonContainer)) {
            this.#htmlElements.buttonContainer = document.querySelector(this.#settings.ids.buttonContainer);
            this.initHTMLElements();
            this.initEvents();
        }
    }

    initHTMLElements() {
        this.#htmlElements.audioElement = this.#htmlElements.buttonContainer.querySelector(`.${this.#settings.classes.musicButtonAudio}`);
        this.#htmlElements.slashIcon = this.#htmlElements.buttonContainer.querySelector(`.${this.#settings.classes.silent}`);
    }

    initEvents() {
        this.#htmlElements.buttonContainer.addEventListener(this.#settings.events.click, e => this.play(e));
    }

    play(e) {
        this.#htmlElements.audioElement.paused ? this.#htmlElements.audioElement.play() : this.#htmlElements.audioElement.pause();
        this.#htmlElements.slashIcon.classList.contains(this.#settings.classes.active) ? this.#htmlElements.slashIcon.classList.remove(this.#settings.classes.active) : this.#htmlElements.slashIcon.classList.add(this.#settings.classes.active);
    }
}


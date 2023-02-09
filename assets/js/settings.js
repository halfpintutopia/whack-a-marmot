/*jshint esversion: 6, expr: true */

/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

class Settings {
    constructor(buttonContainerClass) {
        this.buttonContainerClass = buttonContainerClass;
        this.display = 'display';
        this.difficulty = 'difficulty';
        this.displayDefault = 'light';
        this.difficultyDefault = 'easy';
        this.switchOffClass = 'off';
        this.difficulty = '';
        this.selectedDisplay = '';
        this.selectedDifficulty = '';
    }

    initLocalStorage() {
        localStorage.getItem(this.display) ? this.setDisplay(this.display, this.displayDefault) : localStorage.setItem(this.display, this.displayDefault);
        localStorage.getItem(this.difficulty) ? this.setDisplay(this.difficulty, this.difficultyDefault) : localStorage.setItem(this.difficulty, this.difficultyDefault);
    }

    getDisplay() {
        this.selectedDisplay = localStorage.getItem('display') ? localStorage.getItem('display') : {};
    }

    getDifficulty() {
        this.selectedDifficulty = localStorage.getItem('difficulty') ? localStorage.getItem('difficulty') : {};
    }

    setDisplay(settingType, defaultValue) {
        const input = document.querySelector(`[data-input="${settingType}"]`);
        const labelSpans = input.nextElementSibling.querySelectorAll(`[data-${settingType}]`);

        input.checked = localStorage.getItem(`${settingType}`) !== defaultValue;
        labelSpans.forEach(span => {
            span.dataset.display === localStorage.getItem(settingType) || span.dataset.difficulty === localStorage.getItem(settingType) ? span.classList.remove(this.switchOffClass) : span.classList.add(this.switchOffClass);
            console.log(46, span.dataset.display);
        });
    }
}

const settings = new Settings('.button-container');
const buttonContainer = document.querySelector(settings.buttonContainerClass);
const checkboxes = buttonContainer.querySelectorAll('input[type="checkbox"].toggle');
settings.initLocalStorage();
settings.getDisplay();
settings.getDifficulty();

checkboxes.forEach(input => {
    input.addEventListener('change', e => switchAndSetLocalStorage(e));
});

function switchAndSetLocalStorage(e) {
    const spans = e.currentTarget.nextElementSibling.querySelectorAll('span');
    spans.forEach(span => {
        span.classList.remove('off');
    });

    if (e.currentTarget.checked) {
        spans[0].classList.add('off');
        localStorage.setItem(e.currentTarget.dataset.input, spans[1].getAttribute(`data-${e.currentTarget.dataset.input}`));

    } else {
        spans[1].classList.add('off');
        localStorage.setItem(e.currentTarget.dataset.input, spans[0].getAttribute(`data-${e.currentTarget.dataset.input}`));
    }
}
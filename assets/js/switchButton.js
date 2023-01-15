/*jshint esversion: 6, expr: true */
/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

/* https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/ */
class SwitchButton {
    constructor(buttonContainerClass) {
        this.buttonContainerClass = buttonContainerClass;
        this.checkboxes = '';
        this.display = 'display';
        this.playMode = 'play-mode';
        this.displayDefault = 'light';
        this.playModeDefault = 'limited';
        this.switchOffClass = 'off';

        if (document.querySelector(this.buttonContainerClass)) {
            this.buttonContainer = document.querySelector(this.buttonContainerClass);
            this.initHTMLElements();
            this.initEvents();
            this.initLocalStorage();
        }
    }

    initHTMLElements() {
        this.checkboxes = this.buttonContainer.querySelectorAll('input[type="checkbox"].toggle');
    }

    initEvents() {
        this.checkboxes.forEach(input => {
            input.addEventListener('change', e => this.switchAndSetLocalStorage(e));
        });
    }

    initLocalStorage() {
        localStorage.getItem(this.display) ? this.switchDisplaySetting(this.display, this.displayDefault) : localStorage.setItem(this.display, this.displayDefault);
        localStorage.getItem(this.playMode) ? this.switchDisplaySetting(this.playMode, this.playModeDefault) : localStorage.setItem(this.playMode, this.playModeDefault);
    }

    switchDisplaySetting(settingType, defaultValue) {
        const input = document.querySelector(`[data-input="${settingType}"]`);
        const labelSpans = input.nextElementSibling.querySelectorAll(`[data-${settingType}]`);

        input.checked = localStorage.getItem(`${settingType}`) !== defaultValue;
        labelSpans.forEach(span => {
            span.dataset.display === localStorage.getItem(settingType) || span.dataset.playMode === localStorage.getItem(settingType) ? span.classList.remove(this.switchOffClass) : span.classList.add(this.switchOffClass);
        });
    }

    switchAndSetLocalStorage(e) {
        const spans = e.currentTarget.nextElementSibling.querySelectorAll('span');
        console.log(e.currentTarget.dataset.input, spans[0].getAttribute(`data-${e.currentTarget.dataset.input}`));
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
        // TODO could be DRYer?
        // this.initLocalStorage();
    }
}
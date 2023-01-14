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
        this.display = 'display';
        this.playMode = 'play-mode';
        localStorage.getItem('display') ? this.switchDisplaySetting(this.display, 'light') : localStorage.setItem('display', 'light');
        localStorage.getItem('play-mode') ? this.switchDisplaySetting(this.playMode, 'limited') : localStorage.setItem('play-mode', 'limited');





        if (document.querySelectorAll(this.buttonContainerClass)) {
            this.buttonContainers = document.querySelectorAll(this.buttonContainerClass);
            this.initHTMLElements();
            this.initEvents();
        }
    }

    initHTMLElements() {
        this.buttonContainers.forEach(container => {
           this.inputCheckboxes = container.querySelectorAll('input[type="checkbox"].toggle');
           this.inputCheckboxes.forEach(input => {
              input.addEventListener('change', function() {

                  console.log(this.checked);
                  this.labelSpans = this.nextElementSibling.querySelectorAll('span');
                  this.labelSpans.forEach(span => {
                     if (span.classList.contains('off')) {
                         span.classList.remove('off');
                     } else {
                         span.classList.add('off');
                     }
                  });
                  console.log(`I am checked`, this.labelSpans);
              });
           });
        });

    }

    initEvents() {
    }

    switchDisplaySetting(settingType, defaultValue) {
        const input = document.querySelector(`[data-input="${settingType}"]`);
        const labelSpans = input.nextElementSibling.querySelectorAll(`[data-${settingType}]`);

        input.checked = localStorage.getItem(`${settingType}`) !== defaultValue;
        labelSpans.forEach(span => {
            console.log(span.dataset, settingType);
            span.dataset.display === localStorage.getItem(settingType) || span.dataset.playMode === localStorage.getItem(settingType) ? span.classList.remove('off') : span.classList.add('off');
        });
    }

    switchPlayModeSetting() {
        localStorage.getItem('playMode');
    }
}
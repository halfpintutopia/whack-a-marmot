/*jshint esversion: 6 */

/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

/* https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/ */
class Modal {
    'use strict';
    #htmlElements = {
        modal: '',
        modalOverlay: '',
        btnOpen: '',
        btnClose: '',
    };
    #settings = {
        ids: {
            modal: '',
            btnOpen: '',
        },
        classes: {
            modalOverlay: '',
            btnClose: '',
            hidden: 'hidden'
        },
        events: {
            mouseMove: 'mousemove',
            click: 'click'
        },
    };

    constructor(modalClass, modalOverlayClass, btnOpenClass, btnCloseClass) {
        this.#settings.ids.modal = modalClass;
        this.#settings.classes.modalOverlay = modalOverlayClass;
        this.#settings.ids.btnOpen = btnOpenClass;
        this.#settings.classes.btnClose = btnCloseClass;

        if (document.querySelector(this.#settings.ids.modal)) {
            this.#htmlElements.modal = document.querySelector(this.#settings.ids.modal);
            this.initHTMLElements();
            this.initEvents();
        }
    }

    initHTMLElements() {
        this.#htmlElements.modalOverlay = document.querySelector(this.#settings.classes.modalOverlay);
        this.#htmlElements.btnOpen = document.querySelector(this.#settings.ids.btnOpen);
        this.#htmlElements.btnClose = this.#htmlElements.modal.querySelector(this.#settings.classes.btnClose);
    }

    initEvents() {
        this.#htmlElements.btnOpen.addEventListener(this.#settings.events.click, e => this.openModal(e));
        this.#htmlElements.btnClose.addEventListener(this.#settings.events.click, e => this.closeModal(e));
        this.#htmlElements.modalOverlay.addEventListener(this.#settings.events.click, e => this.closeModal(e));
    };

    openModal(e) {
       this.#htmlElements.modal.classList.remove(this.#settings.classes.hidden);
       this.#htmlElements.modalOverlay.classList.remove(this.#settings.classes.hidden);
    };

    closeModal(e) {
        this.#htmlElements.modal.classList.add(this.#settings.classes.hidden);
       this.#htmlElements.modalOverlay.classList.add(this.#settings.classes.hidden);
    }
}
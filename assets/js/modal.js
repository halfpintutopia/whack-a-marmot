/*jshint esversion: 6, expr: true */
/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

/* https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/ */
export class Modal {
    constructor(modalId, modalOverlayClass, btnOpenID, btnCloseClass) {
        this.modalId = modalId;
        this.modalOverlayClass = modalOverlayClass;
        this.btnOpenID = btnOpenID;
        this.btnCloseClass = btnCloseClass;
        this.hiddenClass = 'hidden';
        this.modal = '';
        this.modalOverlay = '';
        this.btnOpen = '';
        this.btnClose = '';

        if (document.querySelector(this.modalId)) {
            this.modal = document.querySelector(this.modalId);
            this.initHTMLElements();
            this.initEvents();
        }
    }

    initHTMLElements() {
        this.modalOverlay = document.querySelector(this.modalOverlayClass);
        this.btnOpen = document.querySelector(this.btnOpenID);
        this.btnClose = this.modal.querySelector(this.btnCloseClass);
    }

    initEvents() {
        this.btnOpen.addEventListener('click', () => {
            this.openModal();
        });
        this.btnClose.addEventListener('click', () => {
            this.closeModal();
        });
        this.modalOverlay.addEventListener('click', () => {
            this.closeModal();
        });
    }

    openModal() {
        this.modal.classList.remove(this.hiddenClass);
        this.modalOverlay.classList.remove(this.hiddenClass);
    }

    closeModal() {
        this.modal.classList.add(this.hiddenClass);
        this.modalOverlay.classList.add(this.hiddenClass);
    }
}
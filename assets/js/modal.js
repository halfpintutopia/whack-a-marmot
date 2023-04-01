class Modal {
  constructor(buttonId, modalId, overlayId) {
    this.buttonId = buttonId;
    this.modalId = modalId;
    this.modalOverlayId = overlayId;
    this.modalCloseButtonClass = '.modal__button--close';
    this.hiddenClass = 'hidden';

    if (this.button) {
      this.button.addEventListener('click', this.openModalHandler.bind(this));
    }
    if (this.modal && this.modal.querySelector(this.modalCloseButtonClass)) {
      const btnClose = this.modal.querySelector(this.modalCloseButtonClass);
      btnClose.addEventListener('click', this.closeModalHandler.bind(this));
    }
  }

  get button() {
    return document.getElementById(this.buttonId);
  }

  get modalOverlay() {
    return document.getElementById(this.modalOverlayId);
  }

  get modal() {
    return document.getElementById(this.modalId);
  }

  openModalHandler() {
    this.modal.classList.remove(this.hiddenClass);
    this.modalOverlay.classList.remove(this.hiddenClass);
  }

  closeModalHandler() {
    this.modal.classList.add(this.hiddenClass);
    this.closeModalOverlay();
  }

  closeModalOverlay() {
    this.modalOverlay.classList.add(this.hiddenClass);
  }
}
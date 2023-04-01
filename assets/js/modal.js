/**
 * Creates a modal if a button and modal has been created in the HTML
 */
class Modal {
  /**
   * Initiates the modal when button, modal and overlay are available
   * @param {string} buttonId
   * @param {string} modalId
   * @param {string} overlayId
   */
  constructor(buttonId, modalId, overlayId) {
    this.buttonId = buttonId;
    this.modalId = modalId;
    this.modalOverlayId = overlayId;
    this.modalCloseButtonClass = '.modal__button--close';
    this.hiddenClass = 'hidden';

    if (this.button) {
      this.button.addEventListener('click', this.openModal.bind(this));
    }
    if (this.modal && this.modal.querySelector(this.modalCloseButtonClass)) {
      const btnClose = this.modal.querySelector(this.modalCloseButtonClass);
      btnClose.addEventListener('click', this.closeModal.bind(this));
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

  /**
   * Opens the modal when the button is clicked
   */
  openModal() {
    this.modal.classList.remove(this.hiddenClass);
    this.showModalOverlay();
  }

  /**
   * Closes the button when the close button is clicked
   */
  closeModal() {
    this.modal.classList.add(this.hiddenClass);
    this.hideModalOverlay();
  }

  /**
   * The modal overlay is visible when the modal has been opened
   */
  showModalOverlay() {
    this.modalOverlay.classList.remove(this.hiddenClass);
  }

  /**
   * The overlay is hidden when the modal has been closed
   */
  hideModalOverlay() {
    this.modalOverlay.classList.add(this.hiddenClass);
  }
}
class Modal {
  constructor() {
    if (this.allOpenModalButtons) {
      [...this.allOpenModalButtons].map(button => {
        button.addEventListener('click', this.openModalHandler.bind(this));
      });
    }
  }

  get modalOverlay() {
    return document.getElementById('modal-overlay');
  }

  get allModals() {
    return document.querySelectorAll('.modal');
  }

  get allOpenModalButtons() {
    return document.querySelectorAll('button.button');
  }

  openModalHandler(openModalEvent) {
    this.openModal(document.querySelector(`#modal-${openModalEvent.target.dataset.type}`));
  }

  closeModalHandler(closeModalEvent) {
    this.closeModal(closeModalEvent.target.closest('.modal'));
  }

  openModal(modal) {
    const btnClose = modal.querySelector('.modal__button--close');
    modal.classList.remove('hidden');
    this.modalOverlay.classList.remove('hidden');

    if (btnClose) {
      btnClose.addEventListener('click', this.closeModalHandler.bind(this));
    }
  }

  closeModal(modal) {
    modal.classList.add('hidden');
    this.closeModalOverlay();
  }

  closeModalOverlay() {
    this.modalOverlay.classList.add('hidden');
  }
}

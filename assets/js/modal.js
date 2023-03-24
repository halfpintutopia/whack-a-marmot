const modals = document.querySelectorAll('.modal');
const modalOverlay = document.querySelector('.modal__overlay');
const closeButtons = document.querySelectorAll('.modal__button--close');

export const openModal = (e) => {
  const modal = document.querySelector(`#modal-${e.target.dataset.type}`);
  const btnClose = modal.querySelector('.modal__button--close');

  modal.classList.remove('hidden');
  modalOverlay.classList.remove('hidden');

  if (btnClose) {
    btnClose.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', closeAllModal);
  window.addEventListener('keydown', keyPressExit);
};

export const closeModal = (e) => {
  const modal = e.target.closest('.modal');
  modal.classList.add('hidden');
  modalOverlay.classList.add('hidden');

  [...closeButtons].map(button => {
    button.removeEventListener('click', closeModal);
  });

  modalOverlay.removeEventListener('click', closeModal);
};

const keyPressExit = (e) => {
  if (e.key === 'Escape' || e.key === 'Enter') {
    closeAllModal();
  }
  window.removeEventListener('keydown', keyPressExit);
};

const closeAllModal = () => {
  [...modals].map(modal => {
    modal.classList.add('hidden');
    modalOverlay.classList.add('hidden');
  });

  modalOverlay.removeEventListener('click', closeAllModal);
};

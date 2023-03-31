
/**
 * Creates the inner content for the buttons container
 */
class GameButton {
  /**
   * Add the buttons when needed to the buttons container
   * @param {string} gameAreaId
   * @param {string} gameButtonsClass
   */
  constructor(
    gameAreaId,
    gameButtonsClass
  ) {
    this.gameAreaId = gameAreaId;
    this.gameButtonsClass = gameButtonsClass;

    if (this.gameButtonsContainer) {
      this.createGameButtons();
    }
  }

  get gameArea() {
    return document.getElementById(this.gameAreaId);
  }

  get gameButtonsContainer() {
    return this.gameArea.querySelector(this.gameButtonsClass);
  }

  get gameButtonTypes() {
    return ['play', 'instructions', 'settings'];
  }

  createGameButtons() {
    this.gameButtonsContainer.innerHTML = '';

    this.gameButtonTypes.map((type) => {
      let button = this.createButton(type);

      this.gameButtonsContainer.appendChild(button);
    });
  }

  createButton(type) {
    let button = document.createElement('button');
    button.id = `${type}-btn`;
    button.classList.add('button');
    button.setAttribute('type', 'button');
    button.setAttribute('data-type', type);
    button.innerHTML = type;

    return button;
  }
}
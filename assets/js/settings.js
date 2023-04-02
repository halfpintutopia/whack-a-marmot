/**
 * Sets the settings chosen by the user in the localstorage
 */
class Settings {
  /**
   * Initiates the settings
   * @param buttonContainerClass
   */
  constructor(buttonContainerClass) {
    this.buttonContainerClass = buttonContainerClass;
    this.display = 'display';
    this.difficulty = 'difficulty';
    this.displayDefault = 'light';
    this.difficultyDefault = 'easy';
    this.switchOffClass = 'off';

    if (this.settingOptions) {
      this.setSettings(this.display);
      this.setSettings(this.difficulty);
      this.setDisplay();

      this.settingOptions.forEach(settingOption => {
        settingOption.addEventListener('change', this.switchAndSetLocalStorage.bind(this));
      });
    }
  }

  /**
   * Gets the settings container element
   * @returns {*}
   */
  get settingsContainer() {
    return document.querySelector(this.buttonContainerClass);
  }

  /**
   * Gets the setting options from the modal container
   * @returns {NodeListOf<Element> | NodeListOf<SVGElementTagNameMap[keyof SVGElementTagNameMap]> | NodeListOf<HTMLElementTagNameMap[keyof HTMLElementTagNameMap]>}
   */
  get settingOptions() {
    return this.settingsContainer.querySelectorAll('input[type="checkbox"].toggle');
  }

  /**
   * Gets the display settings from the local storage
   * @returns {string}
   */
  get displaySetting() {
    if (localStorage.getItem(this.display) === null) {
      localStorage.setItem(this.display, this.displayDefault);
    }
    return localStorage.getItem(this.display);
  }

  /**
   * Gets the difficulty settings from the local storage
   * @returns {string}
   */
  get difficultySetting() {
    if (localStorage.getItem(this.difficulty) === null) {
      localStorage.setItem(this.difficulty, this.difficultyDefault);
    }
    return localStorage.getItem(this.difficulty);
  }

  /**
   * Sets the settings and stores them in local storage
   * @param settingType
   */
  setSettings(settingType) {
    const input = document.querySelector(`[data-input="${settingType}"]`);
    const labelSpans = input.nextElementSibling.querySelectorAll(`[data-${settingType}]`);
    if (settingType === 'display') {
      input.checked = this.displaySetting !== this.displayDefault;
    }
    if (settingType === 'difficulty') {
      input.checked = this.difficultySetting !== this.difficultyDefault;
    }

    labelSpans.forEach(span => {
      span.dataset.display === localStorage.getItem(settingType) || span.dataset.difficulty === localStorage.getItem(settingType) ? span.classList.remove(this.switchOffClass) : span.classList.add(this.switchOffClass);
    });
  }

  /**
   * Changes the settings in the local storage
   * @param switchOptionEvent
   */
  switchAndSetLocalStorage(switchOptionEvent) {
    let choice;
    const spans = switchOptionEvent.target.nextElementSibling.querySelectorAll('span');
    spans.forEach(span => {
      span.classList.remove('off');
    });

    if (switchOptionEvent.target.checked) {
      spans[0].classList.add('off');
      choice = spans[1].getAttribute(`data-${switchOptionEvent.target.dataset.input}`);
      localStorage.setItem(switchOptionEvent.target.dataset.input, choice);
    } else {
      spans[1].classList.add('off');
      choice = spans[0].getAttribute(`data-${switchOptionEvent.target.dataset.input}`);
      localStorage.setItem(switchOptionEvent.target.dataset.input, choice);
    }

    this.setDisplay();
  }

  /**
   * Switches between dark and light mode
   */
  setDisplay() {
    const displaySetting = localStorage.getItem('display');
    if (displaySetting === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
}

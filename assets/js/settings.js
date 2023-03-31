class Settings {
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

      this.settingOptions.forEach(settingOption => {
        settingOption.addEventListener('change', this.switchAndSetLocalStorage);
      });
    }
  }

  get settingsContainer() {
    return document.querySelector(this.buttonContainerClass);
  }

  get settingOptions() {
    return this.settingsContainer.querySelectorAll('input[type="checkbox"].toggle');
  }

  get displaySetting() {
    if (localStorage.getItem(this.display) === '') {
      localStorage.setItem(this.display, this.displayDefault);
    }
    return localStorage.getItem(this.display);
  }

  get difficultySetting() {
    if (localStorage.getItem(this.difficulty) === '') {
      localStorage.setItem(this.difficulty, this.difficultyDefault);
    }
    return localStorage.getItem(this.difficulty);
  }

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
  }
}

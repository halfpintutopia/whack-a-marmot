class Audio {
  constructor() {
    this.buttonContainerId = '#music-button';
    this.buttonAudioCls = 'button__music--audio';
    this.silentCls = 'silent';
    this.activeCls = 'active';
    this.clickEvent = 'click';
    this.buttonContainer = '';
    this.audioElement = '';
    this.slashIcon = '';

    this.initHtmlElements();
    this.initEvents();
  }

  initHtmlElements() {
    this.buttonContainer = document.querySelector(this.buttonContainerId);
    this.audioElement = this.buttonContainer.querySelector(`.${this.buttonAudioCls}`);
    this.slashIcon = this.buttonContainer.querySelector(`.${this.silentCls}`);
  }

  initEvents() {
    this.buttonContainer.addEventListener(this.clickEvent, this.play);

  }

  async play() {
    if (this.audioElement.paused) {
      await this.audioElement.play();
    } else {
      this.audioElement.pause();
    }

    if (this.slashIcon.classList.contains(this.activeCls)) {
      this.slashIcon.classList.remove(this.activeCls);
    } else {
      this.slashIcon.classList.add(this.activeCls);
    }
  }
}
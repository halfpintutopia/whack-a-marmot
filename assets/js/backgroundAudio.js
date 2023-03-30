/**
 * Plays the background sound for the game on and off
 */
class BackgroundAudio {
  constructor() {
    if (this.audioButton && this.silentSymbol) {
      this.audioButtonContainer.addEventListener('click', this.playAudio.bind(this));
    }
  }

  get audioButtonContainer() {
    return document.querySelector('#music-button');
  }

  get audioButton() {
    return document.querySelector('#music-button .button__music--audio');
  }

  get silentSymbol() {
    return document.querySelector('#music-button .silent');
  }

  /**
   * Activates and deactivates the audio
   * Adds the class to hides and shows the slash over the icon, when audio activated and deactivated
   * @returns {Promise<void>}
   */
  async playAudio() {
    if (this.audioButton.paused) {
      await this.audioButton.play();
    } else {
      this.audioButton.pause();
    }

    if (this.silentSymbol.classList.contains('active')) {
      this.silentSymbol.classList.remove('active');
    } else {
      this.silentSymbol.classList.add('active');
    }
  }
}
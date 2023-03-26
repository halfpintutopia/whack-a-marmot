/**
 * Plays the background sound for the game on and off
 */
class BackgroundAudio {
  /**
   * Activates and deactivates the audio
   * Adds the class to hides and shows the slash over the icon, when audio activated and deactivated
   * @returns {Promise<void>}
   */
  async playAudio() {
    const buttonContainer = document.getElementById('music-button');

    const audioElement = buttonContainer.querySelector('.button__music--audio');
    const slashIcon = buttonContainer.querySelector('.silent');

    if (audioElement.paused) {
      await audioElement.play();
    } else {
      audioElement.pause();
    }

    if (slashIcon.classList.contains('active')) {
      slashIcon.classList.remove('active');
    } else {
      slashIcon.classList.add('active');
    }
  }
}
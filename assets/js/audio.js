class Audio {
  constructor(
    buttonContainer,
    musicButtonAudioClass,
    silentClass
  ) {
    this.buttonContainerSelector = buttonContainer;
    this.musicButtonAudioSelector = musicButtonAudioClass;
    this.silentSelector = silentClass;
  }
}

const audio = new Audio('#music-button', 'button__music--audio', 'silent');

const buttonContainer = document.querySelector(audio.buttonContainerSelector);
const audioElement = buttonContainer.querySelector(`.${audio.musicButtonAudioSelector}`);
const slashIcon = buttonContainer.querySelector(`.${audio.silentSelector}`);


async function play() {
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

buttonContainer.addEventListener('click', play);
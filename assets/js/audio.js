/*jshint esversion: 6, expr: true */

/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

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


function play() {
    if (audioElement.paused) {
        audioElement.play();
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
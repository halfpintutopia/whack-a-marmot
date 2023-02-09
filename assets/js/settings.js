/*jshint esversion: 6, expr: true */

/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

class Settings {
    constructor() {
        this.display = '';
        this.difficulty = '';
    }

     getDisplay() {
        this.display = localStorage.getItem('display') ? localStorage.getItem('display') : {};
    }

    getDifficulty() {
        this.difficulty = localStorage.getItem('difficulty') ? localStorage.getItem('difficulty') : {};
    }
}

const settings = new Settings();
settings.getDisplay();
settings.getDifficulty();

function setDisplay() {
    if (settings.display === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

setDisplay();

/*jshint esversion: 6, expr: true */
/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

(function () {
    const CLASS = {
        LOADER: '.loader'
    };

    const EVENT = {
        LOAD: 'load'
    };

    const htmlElementMap = {
        loader: ''
    };

    const initHTMLElements = () => {
        htmlElementMap.loader = document.querySelector(CLASS.LOADER);
    };

    const initEvents = () => {
        window.addEventListener(EVENT.LOAD, () => {
            let pageElements = document.querySelectorAll('body > *:not(div.loader):not(script)');

            pageElements.forEach((el) => {
                el.style.visibility = 'visible';
            });

            htmlElementMap.loader.style.display = 'none';
        });
    };

    initHTMLElements();
    initEvents();
})();

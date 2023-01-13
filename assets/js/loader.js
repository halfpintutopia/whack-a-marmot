(function () {
    const CLASS = {
        LOADER: '.loader'
    }

    const EVENT = {
        LOAD: 'load'
    }

    const htmlElementMap = {
        loader: ''
    }

    const initHTMLElements = () => {
        htmlElementMap.loader = document.querySelector(CLASS.LOADER);
    }

    const initEvents = () => {
        window.addEventListener(EVENT.LOAD, () => {
            pageElements = document.querySelectorAll('body > *:not(div.loader):not(script)');

            pageElements.forEach((el) => {
                el.style.visibility = 'visible';
            })

            htmlElementMap.loader.style.display = 'none';
        })
    }

    initHTMLElements()
    initEvents()
})();

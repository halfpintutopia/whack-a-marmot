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
      setTimeout(function () {
        pageElements.forEach((el) => {
          el.style.visibility = 'visible';
        });

        htmlElementMap.loader.style.display = 'none';
      }, 2500);
    });
  };

  initHTMLElements();
  initEvents();
})();

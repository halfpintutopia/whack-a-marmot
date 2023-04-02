  window.gamePlay = (function () {
    const initModule = () => {
      const backgroundAudio = new BackgroundAudio();
      const game = new Game('game-area', '.game-buttons');
      const carousel = new Carousel('#carousel-instructions');
      const settings = new Settings('.button-container');
      const hammer = new Hammer('#game-area.active', '.hammer');
    };

    return {
      initModule: initModule,
    };
  }());

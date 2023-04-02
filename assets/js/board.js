/**
 * Board class for creating, updating, changing the board according to view size
 */
class Board {
  /**
   * Creates, updates board
   * @param {string} gameId
   */
  constructor(gameId) {
    // IDs
    this.gameId = gameId;
    this.exitBtnId = 'exit-btn';

    // Classes
    this.activeCls = 'active';
    this.desktopCls = 'desktop';
    this.mobileCls = 'mobile';
    this.holesContainerCls = '.holes-container';
    this.holeCls = 'hole';
    this.marmotContainerCls = 'marmot__container';
    this.holeContainerCls = 'hole__container';
    this.marmotImageCls = 'marmot__img';

    // Image attributes
    this.marmotImageSrc = 'assets/media/images/marmot.svg';
    this.marmotImageAlt = 'Marmot';

    // Settings:
    this.numHolesForDesktopView = 12;
    this.numHolesForMobileView = 6;
    this.gameGridColumn = 0;
    this.gameGridRow = 0;
    this.gameGridColumnMobile = 3;
    this.gameGridColumnDesktop = 4;
    this.gameGridRowMobile = 2;
    this.gameGridRowDesktop = 4;
    this.numberOfHoles = 0;
    this.screenSize = '';
    this.gameResponsiveMinWidth = 768;
    this.resetToEmpty = '';
  }

  /**
   * Gets the game element
   * @returns {HTMLElement}
   */
  get game() {
    return document.getElementById(this.gameId);
  }

  /**
   * Gets the holes container element
   * @returns {Element}
   */
  get holesContainer() {
    return document.querySelector(this.holesContainerCls);
  }


  /**
   * Reset the game board.
   * Removes all the holes from the board.
   */
  removeGridLayout() {
    this.holesContainer.innerHTML = this.resetToEmpty;
  }

  /**
   * Changes the board size and the number of holes to display,
   * dependent on view port.
   */
  changeGridLayout() {
    this.holesContainer.innerHTML = this.resetToEmpty;

    if (window.innerWidth > this.gameResponsiveMinWidth) {
      document.body.classList.add(this.desktopCls);
      document.body.classList.remove(this.mobileCls);
      this.screenSize = this.desktopCls;
      this.numberOfHoles = this.numHolesForDesktopView;
      this.gameGridColumn = this.gameGridColumnDesktop;
      this.gameGridRow = this.gameGridRowDesktop;
    } else {
      document.body.classList.add(this.mobileCls);
      document.body.classList.remove(this.desktopCls);
      this.screenSize = this.mobileCls;
      this.numberOfHoles = this.numHolesForMobileView;
      this.gameGridColumn = this.gameGridColumnMobile;
      this.gameGridRow = this.gameGridRowMobile;
    }
  }

  /**
   * Creates the marmot holes for the game board
   */
  createMarmotHoles() {
    const start = this.screenSize === 'desktop' ? 2 : 1;
    const holesContainer = document.querySelector('.holes-container');

    for (let i = start; i <= this.gameGridRow; i++) {
      for (let j = 1; j <= this.gameGridColumn; j++) {
        const hole = document.createElement('div');
        hole.classList.add(this.holeCls);

        hole.style.gridArea = `${i} / ${j} / ${i + 1} / ${j + 1}`;

        const marmotContainer = document.createElement('div');
        marmotContainer.classList.add(this.marmotContainerCls);

        const holeContainer = document.createElement('div');
        holeContainer.classList.add(this.holeContainerCls);
        let randomDirtImageNumber = Math.floor((Math.random() * 5 - 1) + 1) + 1;
        holeContainer.style.backgroundImage = `url('assets/media/images/dirt-mounds/dirt-${randomDirtImageNumber}.svg')`;

        const marmotImage = document.createElement('img');
        marmotImage.classList.add(this.marmotImageCls);
        marmotImage.setAttribute('draggable', 'false');
        marmotImage.setAttribute('src', this.marmotImageSrc);
        marmotImage.setAttribute('alt', this.marmotImageAlt);

        marmotContainer.append(holeContainer, marmotImage);

        hole.append(marmotContainer);
        holesContainer.append(hole);
      }
    }
  }
}
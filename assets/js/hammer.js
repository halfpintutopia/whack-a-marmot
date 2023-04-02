class Hammer {
  constructor(gameContainerId, cursorClass) {
    this.gameContainerId = gameContainerId;
    this.cursorClass = cursorClass;
    this.playBtnId = 'play-btn';

    if (this.gameContainer) {
      this.gameContainer.addEventListener('mousemove', this.initCursor.bind(this));
      this.gameContainer.addEventListener('mousedown', this.addAnimationCursor.bind(this));
    }
  }

  get gameContainer() {
    return document.querySelector(this.gameContainerId);
  }

  get customCursor() {
    return document.querySelector(this.cursorClass);
  }

  initCursor(cursorEvent) {
    const {clientWidth, clientHeight} = this.customCursor;
    this.customCursor.style.top = `${cursorEvent.pageY - (clientHeight * 1.25)}px`;
    this.customCursor.style.left = `${cursorEvent.pageX + (clientWidth * 0.1)}px`;
  }

  addShakeAnimation(e) {
    e.currentTarget.style.animation = 'shake 150ms 2 linear';
  }

  addAnimationCursor(animationEvent) {
    animationEvent.target.addEventListener('mouseup', this.removeAnimationCursor.bind(this));
    this.customCursor.style.animation = `hammer-hit 550ms`;
  }

  removeAnimationCursor() {
    this.customCursor.style.animation = '';
  }
}
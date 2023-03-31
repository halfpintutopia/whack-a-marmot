class Carousel {
  constructor(carouselId) {
    this.carouselId = carouselId;
    this.carouselAreaClass = 'carousel__area';
    this.carouselPageClass = 'carousel__page';
    this.previousBtnClass = 'carousel__previous';
    this.nextBtnClass = 'carousel__next';
    this.currentCounter = 0;

    if (this.previousBtn && this.nextBtn) {
      this.previousBtn.addEventListener('click', this.slideHandler.bind(this));
      this.nextBtn.addEventListener('click', this.slideHandler.bind(this));
      this.hideShowArrows();
    }
  }

  get carouselArea() {
    return document.querySelector(`${this.carouselId} .${this.carouselAreaClass}`);
  }

  get carouselPages() {
    return document.querySelectorAll(`${this.carouselId} .${this.carouselPageClass}`);
  }

  get previousBtn() {
    return document.querySelector(`${this.carouselId} .${this.previousBtnClass}`);
  }

  get nextBtn() {
    return document.querySelector(`${this.carouselId} .${this.nextBtnClass}`);
  }

  slideHandler(slideEvent) {
    this.currentCounter = slideEvent.target.closest('button').classList.contains(this.previousBtnClass) ? this.currentCounter - 1 : this.currentCounter + 1;
    this.slide();
  }

  slide() {
    this.carouselArea.style.transform = `translateX(-${parseInt(this.currentCounter) * 100}%)`;
    this.hideShowArrows();
  }

  hideShowArrows() {
    if (this.currentCounter >= this.carouselPages.length - 1) {
      this.nextBtn.style.visibility = 'hidden';
    } else {
      this.nextBtn.style.visibility = 'visible';
    }

    if (this.currentCounter <= 0) {
      this.previousBtn.style.visibility = 'hidden';
    } else {
      this.previousBtn.style.visibility = 'visible';
    }
  }
}
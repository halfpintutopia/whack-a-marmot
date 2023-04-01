/**
 * Creates a vertical carousel, slides forwards and back one page
 */
class Carousel {
  /**
   * @param {string} carouselId
   */
  constructor(carouselId) {
    this.carouselId = carouselId;
    this.carouselAreaClass = 'carousel__area';
    this.carouselPageClass = 'carousel__page';
    this.previousBtnClass = 'carousel__previous';
    this.nextBtnClass = 'carousel__next';
    this.currentCounter = 0;
    this.visibleClass = 'visible';
    this.hiddenClass = 'hidden';

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

  /**
   * Handles the next and previous button click event
   * Changes the counter to determine which page the carousel should slide to
   * @param slideEvent
   */
  slideHandler(slideEvent) {
    this.currentCounter = slideEvent.target.closest('button').classList.contains(this.previousBtnClass) ? this.currentCounter - 1 : this.currentCounter + 1;
    this.slide();
  }

  /**
   * Slides the horizontal carousel to the left or right
   */
  slide() {
    this.carouselArea.style.transform = `translateX(-${parseInt(this.currentCounter) * 100}%)`;
    this.hideShowArrows();
  }

  /**
   * When the counter exceeds or is below 0 then the arrows are hidden
   */
  hideShowArrows() {
    if (this.currentCounter >= this.carouselPages.length - 1) {
      this.nextBtn.style.visibility = this.hiddenClass;
    } else {
      this.nextBtn.style.visibility = this.visibleClass;
    }

    if (this.currentCounter <= 0) {
      this.previousBtn.style.visibility = this.hiddenClass;
    } else {
      this.previousBtn.style.visibility = this.visibleClass;
    }
  }
}
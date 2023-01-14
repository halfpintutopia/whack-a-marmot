/*jshint esversion: 6, expr: true */
/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

/* https://stackoverflow.com/questions/15338054/horizontal-slideshow-with-divs */
class Carousel {
    constructor(carousel, carouselArea, carouselPage, previousBtn, nextBtn) {
        this.carouselId = carousel;
        this.carouselAreaClass = carouselArea;
        this.carouselPageClass = carouselPage;
        this.previousBtnClass = previousBtn;
        this.nextBtnClass = nextBtn;
        this.carouselPageNumber = 0;
        this.counter = 0;
        this.carouselContainer = '';
        this.carouselArea = '';
        this.carouselPages = '';
        this.previousBtn = '';
        this.nextBtn = '';

        if (document.querySelector(this.carouselId)) {
            this.carouselContainer = document.querySelector(this.carouselId);
            this.initHTMLElements();
            this.initEvents();
        }
    }

    initHTMLElements() {
        this.carouselArea = this.carouselContainer.querySelector(`.${this.carouselAreaClass}`);
        this.carouselPages = this.carouselContainer.querySelectorAll(`.${this.carouselPageClass}`);
        this.previousBtn = this.carouselContainer.querySelector(`.${this.previousBtnClass}`);
        this.nextBtn = this.carouselContainer.querySelector(`.${this.nextBtnClass}`);

        if (this.carouselPages) {
            this.carouselPageNumber = this.carouselPages.length;
        }
    }

    initEvents() {
        this.previousBtn.addEventListener('click', e => this.slide(e));
        this.nextBtn.addEventListener('click', e => this.slide(e));
    }

    slide(e) {
        const currentCounter = e.currentTarget.classList.contains(this.previousBtnClass) ? --this.counter : ++this.counter;
        this.counter = currentCounter < 0 ? parseInt(this.carouselPageNumber) - 1 : parseInt(this.counter) % parseInt(this.carouselPageNumber);
        this.carouselArea.style.transform = `translateX(-${parseInt(this.counter) * 100}%)`;
    }
}


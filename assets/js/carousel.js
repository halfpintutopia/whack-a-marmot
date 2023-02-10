/*jshint esversion: 6, expr: true */
/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

class Carousel {
    constructor(carouselId) {
        this.carouselId = carouselId;
        this.carouselAreaClass = 'carousel__area';
        this.carouselPageClass = 'carousel__page';
        this.previousBtnClass = 'carousel__previous';
        this.nextBtnClass = 'carousel__next';
        this.carouselPageNumber = 0;
        this.counter = 0;
    }

    decreaseCounter() {
        this.counter--;
    }

    increaseCounter() {
        this.counter++;
    }

    updatePageNumber(pageNumber) {
        this.carouselPageNumber = pageNumber;
    }
}

const carouselInstructions = new Carousel('#carousel-instructions');
const carouselContainer = document.querySelector(carouselInstructions.carouselId);
const carouselArea = carouselContainer.querySelector(`.${carouselInstructions.carouselAreaClass}`);
const carouselPages = carouselContainer.querySelectorAll(`.${carouselInstructions.carouselPageClass}`);
const previousBtn = carouselContainer.querySelector(`.${carouselInstructions.previousBtnClass}`);
const nextBtn = carouselContainer.querySelector(`.${carouselInstructions.nextBtnClass}`);
carouselInstructions.updatePageNumber(carouselPages.length);
previousBtn.addEventListener('click', slide);
nextBtn.addEventListener('click', slide);

function slide(e) {
    const currentCounter = e.currentTarget.classList.contains(carouselInstructions.previousBtnClass) ? carouselInstructions.decreaseCounter() : carouselInstructions.increaseCounter();
    carouselInstructions.counter = currentCounter < 0 ? parseInt(carouselInstructions.carouselPageNumber) - 1 : parseInt(carouselInstructions.counter) % parseInt(carouselInstructions.carouselPageNumber);
    carouselArea.style.transform = `translateX(-${parseInt(carouselInstructions.counter) * 100}%)`;
}
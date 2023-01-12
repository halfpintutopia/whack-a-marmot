/*jshint esversion: 6 */
/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

// (function () {
//     'use strict';
//     let configMap = {
//         slideClass: '.slide'
//     };
//     let htmlElementMap = {
//         slideElements: null
//     };
//
//     /* DOM */
//     const initCarousel = () => {
//
//     };
//
//     const initHTMLElement = () => {
//         htmlElementMap.slideElements = document.querySelectorAll(configMap.slideClass);
//     };
//
// })();

/*https://stackoverflow.com/questions/15338054/horizontal-slideshow-with-divs*/
class Carousel {
    /* JS Hint error but is relevant https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields */

    #htmlElements = {
        carouselContainer: '',
        carouselArea: '',
        carouselPages: '',
        previousBtn: '',
        nextBtn: ''
    };
    #settings = {
        ids: {
            carousel: ''
        },
        classes: {
            carouselArea: 'carousel__area',
            carouselPage: 'carousel__page',
            previousBtn: 'carousel__previous',
            nextBtn: 'carousel__next'
        },
        events: {
            click: 'click'
        },
        carouselPageNumber: 0,
        counter: 0,
        intervalTime: null
    };
    #static

    constructor(carousel) {
        this.#settings.ids.carousel = carousel;
        if (document.querySelector(this.#settings.ids.carousel)) {
            this.#htmlElements.carouselContainer = document.querySelector(this.#settings.ids.carousel);
            this.initHTMLElements();
            this.initEvents();
        }
    }

    initHTMLElements() {
        this.#htmlElements.carouselArea = this.#htmlElements.carouselContainer.querySelector(`.${this.#settings.classes.carouselArea}`);
        this.#htmlElements.carouselPages = this.#htmlElements.carouselContainer.querySelectorAll(`.${this.#settings.classes.carouselPage}`);
        this.#htmlElements.previousBtn = this.#htmlElements.carouselContainer.querySelector(`.${this.#settings.classes.previousBtn}`);
        this.#htmlElements.nextBtn = this.#htmlElements.carouselContainer.querySelector(`.${this.#settings.classes.nextBtn}`);

        if (this.#htmlElements.carouselPages) {
            this.#settings.carouselPageNumber = this.#htmlElements.carouselPages.length;
        }
    }

    initEvents() {
        this.#htmlElements.previousBtn.addEventListener(this.#settings.events.click, e => this.slide(e));
        this.#htmlElements.nextBtn.addEventListener(this.#settings.events.click, e => this.slide(e));
    }

    slide(e) {
        const currentCounter = e.currentTarget.classList.contains(this.#settings.classes.previousBtn) ? --this.#settings.counter : ++this.#settings.counter;
        this.#settings.counter = currentCounter < 0 ? parseInt(this.#settings.carouselPageNumber) - 1 : parseInt(this.#settings.counter) % parseInt(this.#settings.carouselPageNumber);
        this.#htmlElements.carouselArea.style.transform = `translateX(-${parseInt(this.#settings.counter) * 100}%)`;
    }
}


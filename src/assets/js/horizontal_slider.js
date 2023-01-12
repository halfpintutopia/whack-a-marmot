/*jshint esversion: 6 */
/*jshint globalstrict: true*/

(function () {
    'use strict';
    let configMap = {
        slideClass: '.slide'
    };
    let htmlElementMap = {
        slideElements: null
    };



    const initHTMLElement = () => {
        htmlElementMap.slideElements = document.querySelectorAll(configMap.slideClass);
    };

})();
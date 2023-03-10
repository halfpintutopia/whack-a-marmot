/*jshint esversion: 6, expr: true */
/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

export const debounce = (callback, wait) => {
    let timeout;
    return (...args) => {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback.apply(context, args);
        }, wait);
    };
};

export const generateNumberBetweenMinAndMax = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const capitaliseFirstLetter = (word) => {
    return `${word.charAt(0).toUpperCase()}${word.substring(1)}`;
};
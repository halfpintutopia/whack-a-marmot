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
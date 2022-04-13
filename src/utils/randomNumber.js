const generate = (min, max) => Math.random() * (max - min + 1) + min;

export const generateRandomFloat = (min, max, precision = 2) => generate(min, max)
  .toFixed(precision);

export const generateRandomInt = (min, max) => generateRandomFloat(min, max, 0);

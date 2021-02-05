export function getRandomInt(minimum, maximum) {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomReal(min, max) {
  return Math.random() * (max - min) + min;
}

export function timeWait(timeout) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), timeout);
  });
}

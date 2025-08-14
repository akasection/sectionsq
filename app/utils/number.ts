export function getRandomInt(minimum: number, maximum: number) {
  const min = Math.ceil(minimum)
  const max = Math.floor(maximum)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getRandomReal(min: number, max: number) {
  return (Math.random() * (max - min)) + min
}

export function timeWait(timeout: number) {
  return new Promise<void>(resolve => {
    setTimeout(() => resolve(), timeout)
  })
}

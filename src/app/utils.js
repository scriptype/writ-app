export const getRandomFrom = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

export const sleep = (seconds) => {
  const milliseconds = seconds * 1000
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds)
  })
}

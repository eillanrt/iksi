function randomFrom(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start
}

export default randomFrom

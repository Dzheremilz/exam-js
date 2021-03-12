const numberPyramid = (nbBase) => {
  for (let i = 0; i <= nbBase; i++) {
    console.log(`${i}`.repeat(i))
  }
}

numberPyramid(8)
console.log()
numberPyramid(5)
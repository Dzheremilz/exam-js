const checkRow = (array, nb) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].reduce((a, b) => a + b) !== nb) {
      return false
    }
    if (i === array.length - 1) {
      return true
    }
  }
}

const checkCol = (array, nb) => {
  let counter = 0
  for (let j = 0; j < array.length; j++) {
    counter = 0
    for (let i = 0; i < array.length; i++) {
      counter += array[i][j]
      if (i === array.length - 1 && counter !== nb) {
        return false
      }
    }
  }
  return true
}

const checkDiag = (array, nb) => {
  let diag = false
  let counter = 0
  for (let i = 0, j = 0; i < array.length; i++, j++) {
    counter += array[i][j]
  }
  if (counter === nb) {
    diag = true
    counter = 0
  } else {
    return false
  }
  for (let i = 0, j = array.length - 1; i < array.length; i++, j--) {
    counter += array[j][i]
  }
  if (counter === nb && diag) {
    return true
  } else {
    return false
  }
}


const isMagicSquare = (array) => {
  let magicNumber = array[0].reduce((a, b) => a + b)
  if (checkRow(array, magicNumber) && checkCol(array, magicNumber) && checkDiag(array, magicNumber)) {
    return true
  } else {
    return false
  }
}


const square = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
]

const square2 = [
  [16, 3, 2, 13],
  [5, 10, 11, 8],
  [9, 6, 7, 12],
  [4, 15, 14, 1],
]

const square3 = [
  [32, 29, 4, 1, 24, 21],
  [30, 31, 2, 3, 22, 23],
  [12, 9, 17, 20, 28, 25],
  [10, 11, 18, 19, 26, 27],
  [13, 16, 36, 33, 5, 8],
  [14, 15, 34, 35, 6, 7],
]

const square4 = [
  [138, 8, 17, 127, 114, 32, 41, 103, 90, 56, 65, 79],
  [19, 125, 140, 6, 43, 101, 116, 30, 67, 77, 92, 54],
  [128, 18, 7, 137, 104, 42, 31, 113, 80, 66, 55, 89],
  [5, 139, 126, 20, 29, 115, 102, 44, 53, 91, 78, 68],
  [136, 10, 15, 129, 112, 34, 39, 105, 88, 58, 63, 81],
  [21, 123, 142, 4, 45, 99, 118, 28, 69, 75, 94, 52],
  [130, 16, 9, 135, 106, 40, 33, 111, 82, 64, 57, 87],
  [3, 141, 124, 22, 27, 117, 100, 46, 51, 93, 76, 70],
  [134, 12, 13, 131, 110, 36, 37, 107, 86, 60, 61, 83],
  [23, 121, 144, 2, 47, 97, 120, 26, 71, 73, 96, 50],
  [132, 14, 11, 133, 108, 38, 35, 109, 84, 62, 59, 85],
  [1, 143, 122, 24, 25, 119, 98, 48, 49, 95, 74, 72],

]

const squarePrime = [
  [1480028159, 1480028153, 1480028201],
  [1480028213, 1480028171, 1480028129],
  [1480028141, 1480028189, 1480028183],
]

console.log(isMagicSquare(square))
console.log(isMagicSquare(square2))
console.log(isMagicSquare(square3))
console.log(isMagicSquare(square4))
console.log(isMagicSquare(squarePrime))

console.log()
console.log(checkRow(squarePrime, 4440084513))
console.log(checkCol(squarePrime, 4440084513))
console.log(checkDiag(squarePrime, 4440084513))
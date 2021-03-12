const average = (array) => {
  return array.reduce((a, b) => a + b) / (array.length)
}


tab = [2, 3, 3, 5, 7, 10, 12]
tab2 = [50, 45, 55, 44, 46]

console.log(average(tab))
console.log(average(tab2))
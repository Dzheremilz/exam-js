const podium = (array) => {
  const cpyArray = [...array]
  cpyArray.sort((a, b) => b - a)
  console.log(`1st: ${cpyArray[0]}`)
  console.log(`2nd: ${cpyArray[1]}`)
  console.log(`3rd: ${cpyArray[2]}`)
}

tab = [2, 20, 3, 3, 42, 5, 7, 10, 12]

podium(tab)
const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve', 'Jérémie']

//for
for (let i = 0; i < tab.length; i++) {
  console.log(`${tab[i]}, length: ${tab[i].length}`)
}

console.log()
// for-of
for (const elem of tab) {
  console.log(`${elem}, length: ${elem.length}`)
}

console.log()
// forEach
tab.forEach((elem) => {
  console.log(`${elem}, length: ${elem.length}`)
})
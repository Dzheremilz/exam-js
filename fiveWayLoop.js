const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

let i = 0

do {
  console.log(`${tab[i]}, length: ${tab[i].length}`)
  i++
} while (i < tab.length)

console.log()

let j = 0

while (j < tab.length) {
  console.log(`${tab[j]}, length: ${tab[j].length}`)
  j++
}
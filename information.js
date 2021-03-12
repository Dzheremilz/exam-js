const information = (firstName, lastName, age) => {
  console.log(`prenom: ${firstName}`)
  console.log(`nom: ${lastName}`)
  console.log(`age: ${age}`)
  if (age >= 18) {
    console.log(`vous êtes majeur depuis ${age - 18} an${age > 19 ? 's' : ''}`)
  } else {
    console.log(`vous serez majeur dans ${18 - age} an${age < 17 ? 's' : ''}`)
  }
}

information('Sofiane', 'Akermoun', 39)
console.log()
information('Alice', 'Liddell', 7)
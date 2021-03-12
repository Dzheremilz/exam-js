const guess = (userGuess, secret) => {
  if (userGuess < secret) {
    console.log('Too small!')
  } else if (userGuess > secret) {
    console.log('Too big!')
  } else if (userGuess === secret) {
    console.log('You win')
  }
}

guess(41, 42)
guess(43, 42)
guess(42, 42)
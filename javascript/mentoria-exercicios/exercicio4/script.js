function triangle() {
  let number = Number(prompt('Digite uma quantidade'))

  for (let i = 0; i <= number; i++) {
    let result = ''
    for (let j = 0; j < i; j++) {
      result += '*'
    }
    console.log(result)
  }

  for (let i = number; i > 0; i--) {
    let result = ''
    for (let j = 0; j < i; j++) {
      result += '*'
    }
    console.log(result + '\n')
  }
}

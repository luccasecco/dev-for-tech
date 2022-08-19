function triangle() {
  let number = Number(prompt('Digite uma quantidade'))
  let result = ''

  for (let i = 0; i <= number; i++) {
    for (let j = 0; j < i; j++) {
      result += '*'
    }
    console.log(result)
  }
}

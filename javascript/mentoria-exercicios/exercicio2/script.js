function calculator(number1, number2, operation) {
  switch (operation) {
    case '+':
      console.log(number1 + number2)
      break
    case '*':
      console.log(number1 * number2)
      break
    case '-':
      console.log(number1 - number2)
      break
    case '/':
      console.log(number1 / number2)
      break
  }
}

console.log(calculator(10, 5, '+')) // 15

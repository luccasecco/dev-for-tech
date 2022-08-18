function calculator(number1, number2, operation) {
  let result = 0
  switch (operation) {
    case '+':
      result = number1 + number2
      break
    case '*':
      result = number1 * number2
      break
    case '-':
      result = number1 - number2
      break
    case '/':
      result = number1 / number2
      break
    default:
      break
  }

  return result
}

console.log(calculator(10, 5, '+')) // 15

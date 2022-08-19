function getEntries() {
  let num1 = Number(prompt('Digite o primeiro valor: ', ''))
  let operator = promp('+, -, *, /', '')
  let num2 = Number(prompt('Digite o segundo valor: ', ''))
  calculator(num1, num2, operator)
}

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

getEntries()

console.log(calculator(10, 5, '+')) // 15

function getEntries() {
  let num1 = Number(prompt('Digite o primeiro valor: '))
  let num2 = Number(prompt('Digite o segundo valor: '))
  let operator = prompt('Qual a operação que você deseja realizar?')

  while (
    operator != '+' &&
    operator != '-' &&
    operator != '*' &&
    operator != '/'
  ) {
    alert('Por favor escolha um operador válido: +, -, * ou /')
    operator = prompt('+, -, *, /', '')
  }

  console.log(calculator(num1, num2, operator))
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

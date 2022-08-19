function calculator() {
  let number1 = Number(prompt('Digite o primeiro valor: '))
  let number2 = Number(prompt('Digite o segundo valor: '))

  if (isNaN(number1) || isNaN(number2)) {
    return alert(
      `
      Ops... 😔
      Você precisa passar valores numéricos. 
      Por favor, tente novamente`
    )
  }

  let operation = prompt('Qual a operação que você deseja realizar?')

  while (
    operation != '+' &&
    operation != '-' &&
    operation != '*' &&
    operation != '/'
  ) {
    alert('Por favor escolha um operador válido: +, -, * ou /')
    operation = prompt('+, -, *, /', '')
  }

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
  }

  document.querySelector('#result').innerHTML = `
  <p>Primeiro valor: <strong>${number1}</strong></p>
  <br />
  <p>Operação escolhida: <strong>${operation}</strong></p>
  <br />
  <p>Segundo valor: <strong>${number2}</strong></p>
  <br />
  <h1>Resultado: ${result.toFixed(2)}</h1>
`
}

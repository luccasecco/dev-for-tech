// Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function dividedNumbers(number1, number2) {
  let result = (number1 / number2).toFixed(2)
  console.log(
    `O resultado da divisão entre ${number1} e ${number2} é ${result}`
  )

  if (result % 2 === 0) {
    console.log(`O resultado é par`)
  }
}

dividedNumbers(8, 2) // O resultado da divisão entre 8 e 2 é 4.00 / O resultado é par

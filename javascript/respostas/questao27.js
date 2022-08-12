// Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

// a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
// b) Deverá ser possível passar 2 números para a operação escolhida
// c) Deverá retornar o resultado e imprimir no console|

var number1 = 0
var number2 = 0

function calculator(number1, number2, operation) {
  switch (operation) {
    case 'soma':
      console.log(number1 + number2)
      break
    case 'multiplicacao':
      console.log(number1 * number2)
      break
    case 'subtracao':
      console.log(number1 - number2)
      break
    case 'divisao':
      console.log(number1 / number2)
      break
  }
}

calculator(5, 5, 'soma') // 10
calculator(5, 5, 'multiplicacao') // 25

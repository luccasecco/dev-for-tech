// Utilize a estrutura de repetição for para imprimir no console conforme instruções:

// a) números de 1 a 50
// b) quando chegar no número 25 interrompa a instrução e pare o loop
// c) quando chegar no número 10 pule a instrução|

var number = 0

while (number < 50) {
  number++

  console.log(number)
} // números de 1 a 50

while (number < 50) {
  number++

  if (number === 25) {
    break
  }

  console.log(number)
} // quando chegar no número 25 interrompa a instrução e pare o loop

while (number < 50) {
  number++
  if (number === 10) {
    continue
  }

  console.log(number)
} // quando chegar no número 10 pule a instrução|

// Utilize a estrutura de repetição for para imprimir no console conforme instruções abaixo:

// a) números de 1 a 100
// b) quando chegar no número 50 interrompa a instrução e pare o loop
// c) quando chegar no número 50 pule a instrução |

let i = 0

while (i < 100) {
  i++
  console.log(i)
} // números de 1 a 100

while (i < 100) {
  i++
  if (i === 50) break
  console.log(i)
} //quando chegar no número 50 interrompa a instrução e pare o loop

while (i < 100) {
  i++
  if (i === 50) continue
  console.log(i)
} // quando chegar no número 50 pule a instrução

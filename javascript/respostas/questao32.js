// Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

function biggerThan(a, b) {
  if (a > b) {
    console.log(`O número ${a} é maior que o número ${b}`)
    return
  }

  if (b > a) {
    console.log(`O número ${b} é maior que o número ${a}`)
    return
  }

  console.log('Os números são iguais')
}

biggerThan(10, 5) // O número 10 é maior que o número 5
biggerThan(10, 32) // O número 32 é maior que o número 10
biggerThan(20, 20) // Os números são iguais

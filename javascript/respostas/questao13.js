// Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10.

function tabuada(entrada) {
  for (let i = 1; i <= 10; i++) {
    let resultado = entrada * i
    console.log(`${entrada} * ${i} = ${resultado}`)
  }
}

tabuada(5)

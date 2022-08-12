// Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function oddOrEven(number) {
  if (number % 2 === 0) {
    console.log('par')
  } else {
    console.log('ímpar')
  }
}

oddOrEven(10) // par
oddOrEven(15) // ímpar

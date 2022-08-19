function isNumberEvenOrOdd() {
  let number = Number(prompt('Digite um número'))
  let result = 0

  while (isNaN(number)) {
    alert('Valor inválido. Por favor digite um número inteiro')
    number = Number(prompt('Digite um número'))
  }

  if (number % 2 === 0) {
    result = `O número ${number} é par`
  } else {
    result = `O número ${number} é ímpar`
  }

  document.querySelector('#result').innerHTML = `
  <h3>${result}</h3>
`
}

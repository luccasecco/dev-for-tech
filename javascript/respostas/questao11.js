// Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg.

function IMC(altura, peso) {
  let resultado = (peso / (altura * altura)).toFixed(2)

  if (resultado < 18.5) {
    return `Seu IMC é ${resultado} e está classificado como: abaixo do peso`
  }

  if (resultado >= 18.5 && resultado <= 24.9) {
    return `Seu IMC é ${resultado} e está classificado como: peso normal`
  }

  if (resultado >= 25 && resultado <= 29.9) {
    return `Seu IMC é ${resultado} e está classificado como: sobrepeso`
  }

  if (resultado >= 30 && resultado <= 39.9) {
    return `Seu IMC é ${resultado} e está classificado como: obesidade`
  }

  if (resultado >= 40) {
    return `Seu IMC é ${resultado} e está classificado como: obesidade grave`
  }
}

console.log(IMC(1.67, 69)) // Seu IMC é 24.74 e está classificado como: peso normal

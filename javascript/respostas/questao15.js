// Crie uma função que recebe uma temperatura em graus celsius retorna o valor convertido em Fahrenheit.

function celsiusToFahrenheit(value) {
  let result = (value * 1.8 + 32).toFixed(2)
  return result
}

console.log(celsiusToFahrenheit(37)) // 98.60

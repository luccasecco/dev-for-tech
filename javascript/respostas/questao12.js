// Crie uma função que determina se um número é par ou impar.

function isOddOrEven(value) {
  if (value % 2 === 0) {
    return `O número ${value} é par`
  } else {
    return `O número ${value} é ímpar`
  }
}

console.log(isOddOrEven(3)) // O número 3 é ímpar
console.log(isOddOrEven(8)) // O número 8 é par

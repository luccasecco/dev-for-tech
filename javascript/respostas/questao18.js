// Crie uma função que calcula 5% de desconto retornando o valor do desconto.

function valueWithDiscount(value, discount) {
  let discountInPercent = discount / 100
  let result = value - value * discountInPercent
  return result
}

console.log(valueWithDiscount(50, 5)) // 47.5

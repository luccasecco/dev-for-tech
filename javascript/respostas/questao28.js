// Solicite o preço de uma mercadoria e o percentual de desconto. Exiba no console o valor do desconto e o preço a pagar.

function finalPrice(price, discount) {
  let discountInPercent = discount / 100
  let result = (price - price * discountInPercent).toFixed(2)
  console.log(`O valor com desconto é: R$${result}`)
}

finalPrice(50, 10) // O valor com desconto é: R$45.00

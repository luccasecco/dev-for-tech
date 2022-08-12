// Crie um programa que me diga quanto cobrar para vender um notebook usado: o seu custo foi R$3000, por quanto devo vendê-lo descontando 25%?

function valueWithDiscount(value, discount) {
  let discountInPercent = discount / 100
  return value - value * discountInPercent
}

console.log(valueWithDiscount(3000, 25)) // 2250

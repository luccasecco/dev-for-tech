// Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

function priceOfDinner(price, tip) {
  let tipInPercent = tip / 100
  let waiterFee = price * tipInPercent
  let finalPrice = price + waiterFee
  console.log(`
  O valor do jantar foi de R$${price}. 
  A taxa do garçom é R$${waiterFee} e equivale à ${tip}% do valor total.
  O valor total a ser pago é R$${finalPrice}
  `)
}

priceOfDinner(200, 10)

// O valor do jantar foi de R$200.
// A taxa do garçom é R$20 e equivale à 10% do valor total.
// O valor total a ser pago é R$220

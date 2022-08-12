// Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%?

function valueToGain(number) {
  let value = (number * 100) / 60
  return value + value * 0.25
}

console.log(valueToGain(300)) // 625

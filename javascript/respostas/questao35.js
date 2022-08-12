// Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function calculateAge(year) {
  let result = 2022 - year
  if (result > 18) {
    console.log(`Você tem ${result} anos e é maior de idade`)
  } else {
    console.log(`Você tem ${result} anos e é menor de idade`)
  }
}

calculateAge(1990) //Você tem 32 anos e é maior de idade
calculateAge(2005) //Você tem 17 anos e é menor de idade

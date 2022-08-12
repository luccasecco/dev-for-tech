// Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

// - Se a media for igual ou maior que 7 - Aprovado
// - Se a media for maior e igual a cinco e menor que 7 - Recuperação
// - Se a media for menor que 5 - Reprovado|

function calculaMedia(nota1, nota2, nota3) {
  let resultado = ((nota1 + nota2 + nota3) / 3).toFixed(2)

  if (resultado >= 7) {
    console.log(`Sua média foi ${resultado} e você está aprovado`)
  }

  if (resultado >= 5 && resultado < 7) {
    console.log(`Sua média foi ${resultado} e você está em recuperação`)
  }

  if (resultado < 5) {
    console.log(`Sua média foi ${resultado} e você está reprovado`)
  }
}

calculaMedia(8, 9, 10) // Sua média foi 9.00 e você está aprovado
calculaMedia(8, 4, 6) // Sua média foi 6.00 e você está em recuperação
calculaMedia(2, 4, 6) // Sua média foi 4.00 e você está reprovado

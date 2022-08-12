// Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

function dayOfWeek(day) {
  switch (day) {
    case 1:
      console.log(`O dia ${day} equivale à segunda feira`)
      break
    case 2:
      console.log(`O dia ${day} equivale à terça feira`)
      break
    case 3:
      console.log(`O dia ${day} equivale à quarta feira`)
      break
    case 4:
      console.log(`O dia ${day} equivale à quinta feira`)
      break
    case 5:
      console.log(`O dia ${day} equivale à sexta feira`)
      break
    case 6:
      console.log(`O dia ${day} equivale à sábado`)
      break
    case 7:
      console.log(`O dia ${day} equivale à domingo`)
      break
    default:
      console.log(`Não encontramos um dia referete ao número ${day}`)
  }
}

dayOfWeek(5) // O dia 5 equivale à sexta feira
dayOfWeek(7) // O dia 7 equivale à domingo
dayOfWeek(8) // Não encontramos um dia referete ao número 8

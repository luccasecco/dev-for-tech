// Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6

function factoryNumber(value) {
  if (value === 0 || value === 1) {
    return `O fatorial é 1`
  }

  for (let i = 1; i < value; i++) {
    let result = value * i
    console.log(result)
  }
}

factoryNumber(3)

function averageOfNumber() {
  let numeros = parseInt(prompt('Numero: '))
  let vetor = new Array(numeros)

  for (let i = 0; i < numeros; i++)
    vetor[i] = parseFloat(prompt('Número ' + (i + 1) + ':'))

  let soma = vetor.reduce((t, n) => t + n, 0)
  let media = soma / numeros

  document.querySelector('#result').innerHTML = `
        <h2>Nº de números: ${numeros}</h2>
        <h2>Média dos números: ${media.toFixed(2)}</h2>
   `
}

averageOfNumber()

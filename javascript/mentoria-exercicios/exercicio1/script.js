function averageOfNumber() {
  let quantityNumbers = parseInt(prompt('Quantidade de números: '))
  let vectorNumbers = new Array(quantityNumbers)

  for (let i = 0; i < quantityNumbers; i++)
    vectorNumbers[i] = parseFloat(prompt('Número ' + (i + 1) + ':'))

  let sum = vectorNumbers.reduce((t, n) => t + n, 0)
  let average = sum / quantityNumbers

  document.querySelector('#result').innerHTML = `
        <h2>Nº de números: ${quantityNumbers}</h2>
        <h2>Média dos números: ${average.toFixed(2)}</h2>
   `
}

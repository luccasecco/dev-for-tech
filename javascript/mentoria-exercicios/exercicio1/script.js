function averageOfNumber() {
  let quantityNumbers = parseInt(prompt('Quantidade de números: '))
  let vectorNumbers = [quantityNumbers]

  if (isNaN(true)) {
    return
  } else {
    for (let i = 0; i < quantityNumbers; i++)
      vectorNumbers[i] = parseFloat(prompt('Número ' + (i + 1) + ':'))

    let sum = vectorNumbers.reduce((t, n) => t + n, 0)
    let average = sum / quantityNumbers

    document.querySelector('#result').innerHTML = `
          <h2>Quantidade de números: ${quantityNumbers}</h2>
          <br />
          <h2>Média dos números: ${average.toFixed(2)}</h2>
     `
  }
}

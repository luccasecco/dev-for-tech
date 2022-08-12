// Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer e a velocidade média esperada para a viagem..

function timeOfTravel(distance, speed) {
  let result = distance / speed
  console.log(
    `Você chegará ao seu destino em aproximadamente ${result} horas a uma velocidade média de ${speed}km/h`
  )
}

timeOfTravel(200, 100) //Você chegará ao seu destino em aproximadamente 2 horas a uma velocidade média de 100km/h
timeOfTravel(300, 120) //Você chegará ao seu destino em aproximadamente 2.5 horas a uma velocidade média de 120km/h

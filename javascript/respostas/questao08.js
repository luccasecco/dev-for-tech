// Utilizando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de transito.

function semaforo(cor) {
  if (cor === 'vermelho') {
    return 'Proibido atravessar'
  }
  if (cor === 'amarelo') {
    return 'Atenção'
  }
  if (cor === 'verde') {
    return 'Permitido atravessar'
  }
}

console.log(semaforo('vermelho'))
console.log(semaforo('amarelo'))
console.log(semaforo('verde'))

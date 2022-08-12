// Vamos criar uma conta bancária com as 3 operações básicas? rs

// a) A conta deverá iniciar com o saldo de 100
// b) Deverá ser possível escolher uma operação em forma de string: 'depositar', 'sacar', 'consultar saldo'
// c) Deverá ser possível passar 1 valor para a operação escolhida
// d) Deverá retornar o resultado e imprimir no console o saldo atual|

var cliente = {
  nome: 'João',
  login: 'joaojavascript',
  senha: '123',
  conta: 'XXXX',
  saldo: 100
}

function depositar(valor) {
  cliente.saldo += valor
}

function sacar(valor) {
  cliente.saldo -= valor
}

function consultarSaldoAtual() {
  console.log('Seu saldo atual: ' + cliente.saldo)
}

consultarSaldoAtual() // Seu saldo atual: 100
depositar(200)
consultarSaldoAtual() // Seu saldo atual: 300
sacar(50)
consultarSaldoAtual() // Seu saldo atual: 250

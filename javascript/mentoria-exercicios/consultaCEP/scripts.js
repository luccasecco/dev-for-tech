const endpoint = 'https://viacep.com.br/ws/value/json/'

const cepInput = document.getElementById('cep')
const button = document.getElementById('send')
const card = document.querySelector('#card-body')
const box = document.querySelector('#results')
const emptyText = document.querySelector('#empty-text')
const buttonClear = document.querySelector('#btn-clear')

let arrDataBase = JSON.parse(localStorage.getItem('consultaCep'))

if (!!arrDataBase && arrDataBase.length > 0) {
  arrDataBase.map(consultaCep => render(consultaCep))
}

function render(consultaCep) {
  if (!arrDataBase) {
    initializeArr(consultaCep)
  }

  if (!!arrDataBase && arrDataBase.indexOf(consultaCep) === -1) {
    arrDataBase.push(consultaCep)
  }

  localStorage.setItem('consultaCep', JSON.stringify(arrDataBase))

  emptyText.style.display = 'none'
  card.classList.remove('hide')

  setCard(consultaCep)
}

const removeItems = () => {
  if (arrDataBase.length > 0) {
    listaEnderecos = JSON.parse(localStorage.getItem('enderecos'))
    arrDataBase = []
    card.classList.add('hide')
    emptyText.style.display = 'block'
    localStorage.removeItem('consultaCep')
  }
}

function setCard() {
  arrDataBase = JSON.parse(localStorage.getItem('consultaCep'))

  if (arrDataBase) {
    emptyText.style.display = 'none'
    card.classList.remove('hide')

    arrDataBase.map(data => {
      card.innerHTML = `
          <button id="btn-clear" onClick=removeItems()><i class="icon-trash"></i></button>
          <p>CEP</p> <span>${data.cep}</span><hr />
          <p>ENDEREÇO</p> <span>${data.logradouro}</span><hr />
          <p>BAIRRO</p> <span>${data.bairro}</span><hr />
          <p>CIDADE</p> <span>${data.localidade}</span><hr />
          <p>ESTADO</p> <span>${data.uf}</span><hr />
        `
    })
  }
}

function formatStr(str) {
  return str.replace(/[^0-9]/g, '').trim()
}

const initializeArr = consultaCep => {
  arrDataBase = []
  arrDataBase.push(consultaCep)
}

const getCep = async cep => {
  const res = await fetch(endpoint.replace('value', formatStr(cep)))
  const body = await res.json()

  body.hasOwnProperty('erro') ? alert('Endereço não existe') : render(body)
}

button.addEventListener('click', e => {
  e.preventDefault()

  !!arrDataBase &&
  !!arrDataBase.length &&
  !!arrDataBase.find(e => formatStr(e.cep) === formatStr(cepInput.value))
    ? alert(`CEP ${cepInput.value} já consultado.`)
    : getCep(cepInput.value)

  cepInput.value = null
  cepInput.focus()
})

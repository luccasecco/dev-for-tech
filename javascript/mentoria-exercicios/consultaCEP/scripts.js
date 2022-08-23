const button = document.getElementById('send')
const cep = document.querySelector('#cepNumber')
const street = document.querySelector('#street')
const district = document.querySelector('#district')
const local = document.querySelector('#local')
const table = document.querySelector('#table-cep')
const box = document.querySelector('#results')
const emptyText = document.querySelector('#empty-text')
const buttonClear = document.querySelector('#button-clear')

const arrDataBase = []

const setTable = arrDataBase => {
  buttonClear.classList.remove('hide')
  emptyText.style.display = 'none'
  table.classList.remove('hide')
  arrDataBase.map(item => {
    cep.innerText = item.cep
    street.innerText = item.logradouro
    district.innerText = item.bairro
    local.innerText = item.localidade
  })
}

const getCep = async () => {
  const cep = document.getElementById('cep').value
  const url = `https://viacep.com.br/ws/${cep}/json/`

  const api = await fetch(url)
  const data = await api.json()

  arrDataBase.push(data)

  localStorage.setItem('@consulta_CEP: ', JSON.stringify(data))
  const getLocalStorage = localStorage.getItem('@consulta_CEP: ')
  const dataBase = JSON.parse(getLocalStorage)

  setTable(arrDataBase)
}

button.addEventListener('click', getCep)

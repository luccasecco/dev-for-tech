const button = document.getElementById('send')
const table = document.querySelector('#table-cep')
const box = document.querySelector('#results')
const emptyText = document.querySelector('#empty-text')
const buttonClear = document.querySelector('#button-clear')

const arrDataBase = []

const getDataBase = () => {
  JSON.parse(localStorage.getItem('@consulta_CEP')) ?? []
}

const setDataBase = arrDataBase => {
  localStorage.setItem('@consulta_CEP', JSON.stringify(arrDataBase))
}

const removeItems = () => {
  buttonClear.classList.add('hide')
  table.classList.add('hide')
  emptyText.style.display = 'block'

  localStorage.removeItem('@consulta_CEP: ')
}

const setTable = arrDataBase => {
  const item = document.querySelector('#table-body')
  buttonClear.classList.remove('hide')
  emptyText.style.display = 'none'
  table.classList.remove('hide')

  for (let i = 0; i < arrDataBase.length; i++) {
    item.innerHTML = `
    <tr id="${arrDataBase[i]}">
      <td>${arrDataBase[i].cep}</td>
      <td>${arrDataBase[i].logradouro}</td>
      <td>${arrDataBase[i].bairro}</td>
      <td>${arrDataBase[i].localidade} / ${arrDataBase[i].uf}</td>
    </tr>
    `
    document.querySelector('#table-cep').appendChild(item)
  }
}

const getCep = async () => {
  const cep = document.getElementById('cep').value
  const url = `https://viacep.com.br/ws/${cep}/json/`

  const api = await fetch(url)
  const data = await api.json()

  arrDataBase.push(data)

  // localStorage.setItem('@consulta_CEP: ', localStorageData)

  // if (localStorage) {
  //   const getLocalStorage = localStorage.getItem(arrDataBase)
  //   const dataBase = JSON.parse(getLocalStorage)
  //   arrDataBase.push(dataBase)
  // }
  setDataBase(arrDataBase)
  setTable(arrDataBase)
}

button.addEventListener('click', getCep)
buttonClear.addEventListener('click', removeItems)

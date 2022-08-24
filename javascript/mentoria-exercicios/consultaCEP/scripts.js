const cep = document.getElementById('cep')
const button = document.getElementById('send')
const table = document.querySelector('#card-body')
const box = document.querySelector('#results')
const emptyText = document.querySelector('#empty-text')
const buttonClear = document.querySelector('#btn-clear')

let arrDataBase = JSON.parse(localStorage.getItem('dataBase')) ?? []

const removeItems = () => {
  if (arrDataBase.length > 0) {
    arrDataBase = []
    localStorage.removeItem('dataBase')
    // buttonClear.classList.add('hide')
    table.classList.add('hide')
    emptyText.style.display = 'block'
  }
  // localStorage.removeItem(arrDataBase)
}

const setTable = () => {
  arrDataBase = JSON.parse(localStorage.getItem('dataBase'))

  // const item = document.querySelector('#table-body')

  if (arrDataBase) {
    // buttonClear.classList.remove('hide')
    emptyText.style.display = 'none'
    table.classList.remove('hide')

    arrDataBase.map(data => {
      table.innerHTML = `
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

const getCep = async () => {
  let cepInput = cep.value.replace('-', '')
  const url = `https://viacep.com.br/ws/${cepInput}/json/`

  await fetch(url)
    .then(response => response.json())
    .then(data => arrDataBase.push(data))

  localStorage.setItem('dataBase', JSON.stringify(arrDataBase))
  setTable(arrDataBase)
}

button.addEventListener('click', getCep)

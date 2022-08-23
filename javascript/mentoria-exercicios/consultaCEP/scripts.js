const button = document.getElementById('send')
const cep = document.querySelector('#cepNumber')
const street = document.querySelector('#street')
const district = document.querySelector('#district')
const local = document.querySelector('#local')

const setTable = data => {
  cep.innerText = data.cep
  street.innerText = data.logradouro
  district.innerText = data.bairro
  local.innerText = data.localidade
}

const getCep = async () => {
  const cep = document.getElementById('cep').value
  const url = `https://viacep.com.br/ws/${cep}/json/`

  const api = await fetch(url)
  const data = await api.json()

  setTable(data)
}

button.addEventListener('click', getCep)

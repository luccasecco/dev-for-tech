const button = document.getElementById('send')

const setTable = data => {
  const box1 = document.createElement('span')
  const box2 = document.createElement('span')
  const box3 = document.createElement('span')
  const box4 = document.createElement('span')

  const cep = document.createTextNode(data.cep)
  const street = document.createTextNode(data.logradouro)
  const district = document.createTextNode(data.bairro)
  const local = document.createTextNode(data.localidade)

  box1.appendChild(cep)
  box2.appendChild(street)
  box3.appendChild(district)
  box4.appendChild(local)

  document.getElementById('results').appendChild(box1)
  document.getElementById('results').appendChild(box2)
  document.getElementById('results').appendChild(box3)
  document.getElementById('results').appendChild(box4)
}

const searchCep = async () => {
  const cep = document.getElementById('cep').value
  const url = `https://viacep.com.br/ws/${cep}/json/`

  const api = await fetch(url)
  const data = await api.json()

  setTable(data)
}

button.addEventListener('click', searchCep)

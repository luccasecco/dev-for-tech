const endpoint = 'https://rickandmortyapi.com/api'

const container = document.querySelector('#container')
const input = document.querySelector('#search-input')
const button = document.querySelector('#search-button')

function render(character) {}

;(async function getApi() {
  fetch(endpoint + '/character')
    .then(response => response.json())
    .then(function (json) {
      json.results.map(function (results) {
        container.innerHTML += `
          <div class="card-container"> 
          <img src=${results.image} />
          <h2> ${results.name}</h2>
          <p>Espécie: ${results.species}</p>
          <p>Gênero: ${results.gender}</p>
          <p>Origem: ${results.origin.name}</p>
          <p>Local: ${results.location.name}</p>
          <p>Aparições: ${results.episode.length}</p>
          <p>Status: ${results.status} </p>
          </div>
        `
      })
    })
})()

function lookUpCharacter() {
  const content = input.value
  alert(content)
}

button.addEventListener('click', lookUpCharacter)

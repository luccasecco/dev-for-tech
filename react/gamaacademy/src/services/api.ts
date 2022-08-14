import axios from 'axios'

export const api = axios.create({
  baseURL: "http://localhost:3000"
})

// 'https://webhook.site/7cc597f5-7f3b-4f5b-a2c8-e96243c9d17d'
// 'https://gamabackend-with-node.herokuapp.com/'
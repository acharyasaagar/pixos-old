import Axios from '../../services/Api'
let genres = []

// Initial genres state
const state = {
  genres
}
Axios.get('/genre/movie/list')
  .then(res => {
  const allGenres= res.data.genres
  allGenres.forEach(element => {
    genres.push(element)
  });
})

const getters = {
  allGenres: state => state.genres
}

export default {
  state,
  getters
}

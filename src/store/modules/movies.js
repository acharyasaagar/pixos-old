import axios from 'axios'
import truncateString from '../../services/truncateString'
let movies = []

// Initial movies state
const state = {
  movies
}
const Axios = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'd9dbf53e99fd477a1b9c4ae5257a669d',
    language: 'en-US',
    page: 1
  }
})

const returnMovieMetaData = (arr) => {
  return arr.map( movie => {
    const thumbnailUrl = 'http://image.tmdb.org/t/p/w185'
    return {
      title: truncateString(movie.title, 18),
      thumbnail: thumbnailUrl + movie.poster_path,
      overview: movie.overview,
      id: movie.id
    }
  })
}

Axios.get('/movie/popular')
  .then(res => {
    const moviesArr = res.data.results
    returnMovieMetaData(moviesArr).forEach(movie => {
      movies.push(movie)
    })
})

const getters = {
  allMovies: state => state.movies
}

const mutations = {
  CHANGE_MOVIE_DATA: (state, Movies) => {
    state.movies = Movies
  }
}
const actions = {
  getMoviesByCategory (context, url) {
    Axios.get(url)
    .then(res => {
      const moviesArr = res.data.results
      const Movies = returnMovieMetaData(moviesArr)
      context.commit('CHANGE_MOVIE_DATA', Movies)
    })
  },
  getMoviesByGenre (context, id) {
    const url = `/genre/${id}/movies`
    Axios.get(url)
    .then(res => {
      const moviesArr = res.data.results
      const Movies = returnMovieMetaData(moviesArr)
      context.commit('CHANGE_MOVIE_DATA', Movies)
    })
  },
  getMoviesByQuery (context, query) {
    Axios.get('/search/movie', {
      params: {
        query: query
      }
    })
    .then(res => {
      const moviesArr = res.data.results
      const Movies = returnMovieMetaData(moviesArr)
      context.commit('CHANGE_MOVIE_DATA', Movies)
    })
  }
} 
export default {
  state,
  getters,
  mutations,
  actions
}
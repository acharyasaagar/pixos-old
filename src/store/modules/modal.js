import axios from 'axios'
let modalData = {} 

// Initial genres state
const state = {
  modalData
}

const getters = {
  getModalData: state => state.modalData
}

const Axios = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'd9dbf53e99fd477a1b9c4ae5257a669d',
    language: 'en-US',
    append_to_response: 'videos'
  }
})

const mutations = {
  ADD_MODAL_DATA: (state, movieData) => {
    state.modalData = movieData
  }
}

const actions = {
  getMovieData(context, id) {
    Axios.get(`/movie/${id}`)
    .then(res => {
      const movieData = res.data
      context.commit('ADD_MODAL_DATA', movieData)
    })  
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

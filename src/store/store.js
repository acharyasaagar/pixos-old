import Vue from 'vue'
import Vuex from 'vuex'
import movieCategories from './modules/moviesCategories'
import genres from './modules/genres'
import movies from './modules/movies'
import modal from './modules/modal'



Vue.use(Vuex);

export const store = new Vuex.Store({
 modules: {
  movieCategories,
  genres,
  movies,
  modal
 }
})
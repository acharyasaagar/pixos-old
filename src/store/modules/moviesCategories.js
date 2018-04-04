//Initial movie categories state

const state = {
  movieCategories: [
    {
      id: 1,
      name: 'Popular',
      url: '/movie/popular'
    },
    {
      id: 2,
      name: 'Top Rated',
      url: '/movie/top_rated'
    },
    {
      id: 3,
      name: 'Now Playing',
      url: '/movie/now_playing'
    },
    {
      id: 4,
      name: 'Upcoming',
      url: '/movie/upcoming'
    }
  ] 
}

// getter for movie categories state

const getters = {
  allMovieCategories: state => state.movieCategories
}

export default {
  state,
  getters
}
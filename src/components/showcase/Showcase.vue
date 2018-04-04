<template>
  <div class="cards-container mx-auto p-1">
    <div class="card my-4" v-for="movie in movies" v-bind:key="movie.id" style="height:20rem; overflow:hidden;">
      <movie-card v-bind:movie="movie"></movie-card>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapState
  } from 'vuex'
  import Cards from './Cards'
  export default {
    name: 'Showcase',
    components: {
      'movie-card': Cards
    },
    computed: {
      ...mapGetters({
        movies: 'allMovies'
      })
    }
  }
</script>

<style>
  .cards-container{
    display: flex;
    max-width: 90vw;
    flex-wrap: wrap;
    justify-content: space-around
  }
  .card {
    flex-basis: 14rem;
  }
  @media (max-width: 768px) { 
    .card{
      flex-basis: 45%;
    }
  }
  @media (max-width: 560px) { 
    .card{
      flex-basis: 80%;
    }
  }
  
</style>
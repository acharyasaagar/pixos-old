<template>
  <div class="dropdown-menu">
    <a v-for="item in allItems" href="#" v-bind:key="item.id" class="dropdown-item" v-on:click="getMovies(item)"> {{ item.name }} 
    </a>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  props: ['allItems'],
  methods: {
    ...mapActions([
      'getMoviesByCategory',
      'getMoviesByGenre'
    ]),
    getMovies (item) {
      if(item.url){
        this.getMoviesByCategory(item.url)
      } else {
        this.getMoviesByGenre(item.id)
      }
    }
  }
}
</script>
<template>
  <form class="form-inline my-2 my-lg-0" v-on:submit.prevent="getMovies(query)">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="query">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
  </form>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data () {
    return {
      query: ''
    }
  },
  methods: {
    ...mapActions([
      'getMoviesByQuery'
    ]),
    getMovies (query) {
      this.getMoviesByQuery(query)
      this.query = ''
    }
  }
}
</script>


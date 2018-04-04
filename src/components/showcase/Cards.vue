<template>
  <div>
    <div class="card-body">
      <img class="card-img-top" v-bind:src="movie.thumbnail" alt="Card image cap">
      <h5 class="card-title text-center"> {{ movie.title }} </h5>
      <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#modal" v-on:click="fetchMovieData(movie.id)">See Details</button>
      <modal v-bind:movie="movie"></modal>
    </div>
  </div>
</template>

<script>
import Modal from './Modal'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  props: ['movie'],
  components: {
    'modal': Modal
  },
  computed: {
    ...mapGetters(['getModalData'])
  },
  methods: {
    ...mapMutations([
      'ADD_MODAL_DATA'
    ]),
    ...mapActions([
      'getMovieData'
    ]),
    fetchMovieData (id) {
      this.getMovieData(id)
    }
  }
}
</script>

<style scoped>
  img {
    width: 11rem;
    height:13rem;
    display: block;
    margin-top: 2px;
    margin-left: auto;
    margin-right: auto;
  }  
</style>


<template>
  <div class="modal fade bd-example-modal-lg" tabindex="-1" id="modal" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"> {{ getModalData.title }} </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" >
        <div class="row">
          <div class="col-md-6">
            <img class="img-fluid d-block mx-auto mb-2" v-bind:src="imagePreUrl+getModalData.poster_path" alt="Image" style="height:400px;">   
          </div>
          <div class="col-md-6">
            <h5>Overview:</h5>
            <p class="lead"> {{ getModalData.overview }} </p>
            <h5>Genres:</h5>
            <div v-for="genre in getModalData.genres" v-bind:key="genre.id" class="d-flex justify-content-around align-items-center flex-wrap">
              <span class="border border-primary my-1 genre text-center p-1"> {{ genre.name }} </span>
            </div>
          </div> 
          <div class="row container mt-2">
            <div class="col-md-6 text-center">
              <button type="button" class="btn btn-warning" v-on:click="showTrailer(getModalData.videos.results[0].key)">Watch Trailer</button> 
            </div>
            <div class="col-md-6 text-center">
              <button type="button" class="btn btn-danger " data-dismiss="modal">Close</button>              
            </div>            
          </div>
        </div>
      </div> 
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      imagePreUrl: 'http://image.tmdb.org/t/p/w500'
    }
  },
  computed: {
    ...mapGetters(['getModalData'])
  },
  methods: {
    showstate () {
      console.log(this.getModalData.overview)
    },
    showTrailer(key) {
      const youTubePreUrl = 'https://www.youtube.com/watch?v='
      const youTubeUrl = `${youTubePreUrl}${key}`
      window.open(youTubeUrl, '_blank')
    }
  }
}

</script>

<style scoped>
  .genre{
    flex-basis:80%;
  }
  .btn{
    width: 100%;
  }
</style>



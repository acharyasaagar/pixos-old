<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="../../assets/pixos.png" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav mr-auto">
  
        <!-- Movies Dropdown menu -->
  
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Movies
            </a>
          <link-items-movies v-bind:allItems="allMovieCategories"></link-items-movies>
        </li>
  
        <!-- Genres dropdown menu -->
  
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Genres
            </a>
          <link-items-genres v-bind:allItems="allGenres"></link-items-genres>
        </li>
  
      </ul>
      <!-- Search form component  -->
      <search-form></search-form>
    </div>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex'
  import LinkItem from './Linkitem.vue'
  import SearchForm from './Search.vue'
  
  export default {
    components: {
      'link-items-movies': LinkItem,
      'link-items-genres': LinkItem,
      'search-form': SearchForm
  
    },
    computed: {
      ...mapGetters([
        'allMovieCategories',
        'allGenres'
      ])
    }
  }
</script>



<template>
  <div id="app">
    <navbar></navbar>
    <showcase></showcase>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'
import Showcase from './components/showcase/Showcase.vue'
export default {
  name: 'App',
  components: {
    'navbar': Navbar,
    'showcase': Showcase
  },
  data () {
    return {
    }
  }
}
</script>
<style>
</style>
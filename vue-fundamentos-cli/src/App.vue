<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <Counter :start="100" /> -->
  <Fieldselect />
  <!--<Indecision />-->
  

</template>

<script>
// import Counter from './components/Counter.vue'
import Indecision from './components/Indecision.vue'
import Fieldselect from '@/components/Fieldselect.vue'

export default {
  name: 'App',
  components: {
    // Counter,
    //Indecision,
    Fieldselect,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

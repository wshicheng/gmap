<template>
  <div id="app">
      <my-home></my-home>
  </div>
</template>

<script>
import myHome from './pages/home.vue'
export default {
  name: 'app',
  components: {
    myHome
  }
}
</script>

<style>
*{margin:0;padding:0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>

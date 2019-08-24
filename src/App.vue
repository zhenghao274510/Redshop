<template>
  <div id="app">
    <tar v-if="$route.meta.showtabar"></tar>
    <router-view/>
  </div>
</template>

<script>

import set from './../static/font/rem'
import tar from './components/public/nav'
export default {
  name: 'App',
  mounted(){
  window.onload=window.onresize=set.setrem;
  },
  components:{
    tar
  }
}
</script>

<style>
@import url('../static/css/commont.css');
@import url('../static/css/van.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>

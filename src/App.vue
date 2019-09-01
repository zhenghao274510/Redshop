<template>
  <div id="app">
    <Top :title="$route.name"></Top>
    
    <tar v-if="$route.meta.showtabar"></tar>
    
      <router-view />
 
  </div>
</template>

<script>
import Top from "@/components/public/heade";
import Hid from "@/components/public/hidden";
import set from "../static/font/rem";
import tar from "./components/public/nav";
export default {
  name: "App",
  data() {
    return {

    };
  },
  mounted() {
    window.onload = window.onresize = set.setrem;
  },
  components: {
    tar,
    Top,
    Hid
  },
  methods: {
  }
};
</script>

<style>
@import url("../static/css/commont.css");
@import url("../static/css/van.css");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>

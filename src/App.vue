<template>
  <div id="app">
    <Top :title="$route.name"></Top>
    
    <tar v-if="$route.meta.showtabar"></tar>
    <transition :name="transitionName" mode="out-in">
      <router-view />
      </transition>
 
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
      transitionName:''
    };
  },
  watch:{
 // 使用watch 监听$router的变化
      $route (to, from) {
        // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
        if (to.meta.index > from.meta.index){
          // 设置动画名称
          this.transitionName = 'slide-right';
        } else{
          this.transitionName = 'slide-left';
        }
      }
     
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
  },
  computed:{
    store(){
    }
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

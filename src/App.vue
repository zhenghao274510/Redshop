<template>
  <div id="app">
    <Top :title="$route.name"></Top>

    <tar v-if="$route.meta.showtabar"></tar>
    <router-view />
  </div>
</template>

<script>
import Top from "@/components/public/heade";
import set from "../static/font/rem";
import tar from "./components/public/nav";
export default {
  name: "App",
  data() {
    return {
      docmHeight: "0", //默认屏幕高度
      showHeight: "0", //实时屏幕高度
      isResize: false //默认屏幕高度是否已获取
    };
  },
  watch:{
  showHeight: function() {
      if (this.docmHeight > this.showHeight) {
        if(this.$route.meta.showtabar){
          this.$route.meta.showtabar=false
        }
      } else {
        this.$route.meta.showtabar= true;
      }
    }
  },
  mounted() {
    window.onload = window.onresize = set.setrem;
    window.onresize = () => {
      return (() => {
        if (!this.isResize) {
          this.docmHeight = document.documentElement.clientHeight;
          this.isResize = true;
        }
        this.showHeight = document.body.clientHeight;
      })();
    };
  },
  components: {
    tar,
    Top
  },
  methods: {
    back() {
      this.$router.go(-1);
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

<template>
  <div class="islonding">
    <van-loading size="24px" type="spinner" vertical color="#000000">加载中...</van-loading>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
    };
  },
  methods: {},
  moutend() {},

};
</script>
 
<style scoped lang = "less">
.islonding{
 width: 100%;
 height:100% ;
 background-color: rgba(3, 3, 3, 0.8);
 position: absolute;
 top:0;
 z-index:99999;
 .van-loading--vertical{
    position: absolute;
    top: 50%;left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
 }
}
</style>
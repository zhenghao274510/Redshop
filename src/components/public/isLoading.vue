<template>
  <div v-if="$store.state.isLoading" class="islonding">
    <van-loading size="24px" type="spinner" vertical color="#000000">加载中...</van-loading>
  </div>
</template>
 
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  moutend() {}
};
</script>
 
<style scoped lang = "less">
.islonding{
 width: 100%;
 height:107.4% ;
 background-color: rgba(250, 247, 247, 1);
 position: absolute;
 top:-.5rem;
 z-index:99999;
 .van-loading--vertical{
    position: absolute;
    top: 50%;left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
 }
}
</style>
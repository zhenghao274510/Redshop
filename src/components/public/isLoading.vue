<template>
  <div v-if="$store.state.isLoading" class="islonding">
    <van-loading size="24px" type="spinner" vertical color="#FFF">加载中...</van-loading>
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
 height: 100%;
 background-color: rgba(0, 0, 0, .3);
 /* position: absolute;
 top: 0; */
}
</style>
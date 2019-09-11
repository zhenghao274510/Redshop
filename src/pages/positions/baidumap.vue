<template>
  <div class="map" id="container"></div>
</template>
 
<script>
import LocationAMap from '@/mixins/pos'
export default {
  data() {
    return {};
  },
  moutend() {
    setTimeout(() => {
      this.addmap();
    }, 1000);
  },
  methods: {
    addmap(){
              LocationAMap.getPosition(function(res_data) {
          if (res_data.status) {
            Toast({
              message: '获取当前位置成功！',
              duration: 1000
            })
            // that.driverParam.nowLocation = res_data.nowLocation // 具体返回的相关位置信息
          } else {
            Toast({
              message: '获取当前位置失败！',
              duration: 1000
            })
          }
        })

    }
  }
};
</script>
 
<style scoped lang = "less">
.map {
  width: 100%;
  height: 4rem;
}
</style>
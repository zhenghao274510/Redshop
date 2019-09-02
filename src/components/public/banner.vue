<template>
  <div class="banner">
    <van-swipe :autoplay="0" indicator-color="white" @change="Onchange">
      <van-swipe-item v-for="i in list" :key="i">
        <img :src="i" alt />
      </van-swipe-item>
      <!-- <van-swipe-item>
        <img src="/static/test/bg.png" alt />
      </van-swipe-item> -->
      <div class="custom_indicator" slot="indicator">{{ current + 1 }}/2</div>
    </van-swipe>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  props:['list'],
  data() {
    return {
      current:0
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {
    Onchange(index){
      this.current=index;
    }
  },
  //生命周期 - 创建之前
  beforeCreate() {},
  //生命周期 - 挂载之前
  beforeMount() {},
  //生命周期 - 更新之前
  beforeUpdate() {},
  //生命周期 - 更新之后
  updated() {},
  //生命周期 - 销毁之前
  beforeDestroy() {},
  //生命周期 - 销毁完成
  destroyed() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {}
};
</script>
<style scoped lang='less' rel='stylesheet/stylus'>
.banner {
  margin-top: 0.5rem;
  position: relative;
  .custom_indicator{
    position: absolute;
    right: .15rem;
    bottom: .07rem;
    width: .43rem;
    height: .21rem;
    background: rgba(0, 0, 0, .3);
    color: #fff;
    font-size: .15rem;
    border-radius: .11rem;
    text-align: center;
    line-height: .21rem;
  }
}
</style>
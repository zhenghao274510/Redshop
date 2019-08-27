<template>
  <div class="page_tel">
    <div class="tel_bg"></div>
    <div class="tel_cont">
      <div class="tel_info">
        
      </div>
    </div>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  data() {
    return {};
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
  methods: {},
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
.page_tel {
  width: 100%;
  margin-top: 0.5rem;
  position: relative;
  .tel_bg {
    width: 100%;
    height: 1.8rem;
    background-color: #72bb29;
  }
  .tel_cont {
    margin-top: -0.5rem;
     padding: 0 0.15rem;
    .tel_info{
    
    height: 5rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 .01rem .06rem 0 rgba(51, 51, 51, 0.2);
    border-radius: 0.2rem;
    }
  }
}
</style>
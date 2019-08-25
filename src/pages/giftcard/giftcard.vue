<template>
  <div class="li_pin_card">
    <div class="li_search"><span>查询</span></div>
    <Crd></Crd>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import Crd from "./../../components/public/lipincard";
export default {
  data() {
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {
    Crd
  },
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
.li_pin_card{
  .li_search{
    overflow: hidden;
    padding:.15rem;
    margin-top: .5rem;
    span{
      float: right;
      width: .43rem;
      height: .3rem;
      border-radius: .05rem;
      background: #72BB29;
      text-align: center;
      line-height: .3rem;
      font-size: .13rem;
      color: #FFF;
      
    }
  }
}
</style>
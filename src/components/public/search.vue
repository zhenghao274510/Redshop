<template>
  <div class='sear'>
    <div>
      <span></span>
      <input type="text" placeholder="输入关键词搜索">
    </div>
    <span class="btn">
     搜索
    </span>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  data() {
    return {

    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  //方法集合
  methods: {

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
  activated() {},
}
</script>
<style scoped lang='less'>
.sear{
  width: 100%;
  height: .5rem;
  margin-top: .5rem;
  padding: .1rem .15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div{
    width: 2.9rem;
    height: .3rem;
    border: .01rem solid #E5E5E5;
    border-radius: .05rem;
    position: relative;
    font-size: 0;
    overflow: hidden;
    input{
      width: 100%;
      height: 100%;
      padding-left: .36rem;
      font-size: .13rem;
    }
    ::-webkit-input-placeholder{
       color: #9C9FA4;
    }
    span{
      position: absolute;
      top: .07rem;
      left: .13rem;
      width: .16rem;
      height: .16rem;
      background: url('/static/icon/souuso.png') no-repeat;
      background-size: 100% 100%;
      display: block;
    }
  }
  .btn{
    width: .43rem;
    height: .3rem;
    border-radius: .05rem;
    background-color: #72BB29;
    color: #fff;
    text-align: center;
    font-size: .13rem;
    line-height: .3rem;
  }
}
</style>
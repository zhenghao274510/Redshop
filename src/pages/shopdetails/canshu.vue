<template>
  <div class="box">
    <em @click="close"></em>
    <p>参数</p>
    <ul class="content">
      <li>
        <span>生产日期</span>
        <i>2016-10-01 至 2017-07-01</i>
      </li>
     
    </ul>
<div class="buy_or">

  <span class="btn" @click="close">完成</span>
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
  methods: {
  close(){
    this.$emit('closec',1);
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
.box {
  position: relative;
  em {
    position: absolute;
    right: 0.15rem;
    top: 0.15rem;
    width: 0.23rem;
    height: 0.22rem;
    background: url("/static/icon/bianjidizhi-quxiao.png") center center
      no-repeat;
    background-size: 100% 100%;
    display: block;
  }
  p {
    font-size: 0.18rem;
    text-align: center;
    line-height: 0.5rem;
    border-bottom: .01rem solid #e5e5e5;
  }
  .content {
    padding: 0 0.15rem;
    height: 3.5rem;
     overflow-y: auto;
    li {
      height: 0.5rem;
      border-bottom: 0.01rem solid #e5e5e5;
      display: flex;
      align-items: center;
      span {
        display: block;
        color: #333333;
        font-size: 0.15rem;
        width: 1rem;
      }
      i {
        display: block;
        font-size: 0.14rem;
        color: #666666;
        flex: 1;
      }
    }
  }
  .buy_or{
        padding: 0 .15rem;
    .btn {
      position: absolute;
      // bottom: .12rem;
      width: 3.45rem;
      margin:0 auto;
    display: block;
    height: 0.44rem;
    line-height: .44rem;
    font-size: 0.17rem;
    background-color: #72bb29;
    border-radius: 0.05rem;
    color: #fff;
    text-align: center;
  }
  }

}
</style>
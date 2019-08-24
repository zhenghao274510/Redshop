<template>
  <div class="all_chose">
    <div class="all_left">
      <div class="all_s" @click="choseall">
        <img src="/static/icon/gouwuche-weixuanzhong.png" v-if="checked" />
        <img src="/static/icon/gouwuche-xuanzhong.png" v-else />
      </div>
      <span>全选</span>
    </div>
    <div class="all_right">
      <span>总价:</span>
      <div class="all_price">￥0<i></i></div>
      <div class="all_jie" @click="gotopay">去结算<i>(0)</i></div>
      
    </div>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  data() {
    return {
      checked: true
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
    choseall(){
      this.checked=!this.checked;
    },
    gotopay(){
      this.$router.push('/success');
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
.all_chose {
  position: fixed;
  bottom: 0.5rem;
  width: 100%;
  height: 0.44rem;
  background: #fff;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  .all_left {
    width: 0.91rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .all_s {
      width: 0.23rem;
      height: 0.23rem;
      border-radius: 50%;
      position: relative;
      img {
        position: absolute;
        top: 0;
      }
    }
    span{
      font-size: .15rem;
      color: #333;
      display: inline-block;
      margin-left: .09rem;
    }
  }
  .all_right {
    width: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
      font-size: .15rem;
      color: #333;
      display: inline-block;
    }
    .all_price{
       font-size: 0.15rem;
       color: #ed670d;
       flex: 1;
       text-align: left;
       margin-left: .05rem;
    }
    .all_jie{
      width: 1.05rem;
      text-align: center;
      line-height: .44rem;
      background: #72BB29;
      color: #FFF;
      font-size: .15rem;
    }

  }
}
</style>
<template>
  <div class="box">
    <div class="shop_info">
      <img src="/static/test/bg.png" alt />
      <div>
        <p>
          ￥
          <span>219</span>
        </p>
        <p>库存721件</p>
      </div>
      <i @click="close"></i>
    </div>
    <div class="shop_can">
      <span>威士忌原装进口洋酒</span>
      <span>威士忌原装进口洋酒礼盒</span>
    </div>
    <div class="buy_num">
      <span>购买数量</span>
      <van-stepper v-model="value" integer />
    </div>
    <div class="buy_or">
      <span class="btn" @click="gotobuy">确定</span>
    </div>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  data() {
    return {
      value: 1
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
    close() {
      this.$emit("closec", 2);
    },
    gotobuy() {
      this.$router.push("/orderdetails");
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
.shop_info {
  position: relative;
  padding: 0.15rem;
  display: flex;
  img {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 0.05rem;
  }
  div {
    margin-left: 0.26rem;
    p {
      font-size: 0.14rem;
      color: #666666;
      margin-top: 0.18rem;
      &:first-child {
        color: #ed670d;
        font-size: 0.25rem;
      }
    }
  }
  i {
    position: absolute;
    right: 0.15rem;
    width: 0.23rem;
    height: 0.22rem;
    background: url("/static/icon/bianjidizhi-quxiao.png") center center
      no-repeat;
    background-size: 100% 100%;
    display: block;
  }
}
.shop_can {
  border-top: 0.01rem solid #eeeeee;
  border-bottom: 0.01rem solid #eeeeee;
  height: 1.9rem;
  padding: 0.15rem;
  font-size: 0;
  display: flex;
  flex-direction: column;
  span {
    padding: 0.1rem;
    font-size: 0.13rem;
    background-color: #eeeeee;
    color: #333;
    margin-bottom: 0.15rem;
    border-radius: 0.05rem;
  }
}
.buy_num {
  height: 0.44rem;
  padding: 0 0.15rem;
  border-bottom: 0.01rem solid #eeeeee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 0.14rem;
    color: #333333;
  }
}
.buy_or {
  padding: 0 0.15rem;
  .btn {
    margin-top: 0.21rem;
    display: block;
    height: 0.44rem;
    line-height: 0.44rem;
    font-size: 0.17rem;
    background-color: #72bb29;
    border-radius: 0.05rem;
    color: #fff;
    text-align: center;
  }
}
</style>
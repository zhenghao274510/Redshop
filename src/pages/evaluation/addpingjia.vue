<template>
  <div class>
    <ul class="add_inf">
      <li>
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        />
        <div class="ev_star">
          <span>商品评星</span>
          <van-rate v-model="value" readonly />
        </div>
        <div class="ev_int">
          <textarea name="ev_main" id="ev_main" placeholder="留下您的评价吧（选填）"></textarea>
        </div>

        <div class="add_img" @click="show=true">
          <span></span>
          <p>上传照片</p>
        </div>
      </li>
    </ul>
    <van-popup v-model="show" round position="bottom" :style="{ height: '30%' }">
      <van-button type="primary" size="large" >拍照</van-button>
      <van-button type="primary" size="large">相册</van-button>
      </van-popup>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
export default {
  data() {
    return {
      show:false,
      value: 5
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
/deep/ .van-rate__icon {
  font-size: 0.13rem;
}
/deep/.van-popup--bottom.van-popup--round{
  padding:.15rem;
  font-size: 0;
}
/deep/.van-button--large{
  margin-top: .2rem;
}

.add_inf {
  margin-top: 0.5rem;
  font-size: 0;
  li {
    position: relative;
    height: 3rem;
    background-color: #fff;
    .ev_star {
      font-size: 0.14rem;
      padding: 0.15rem;
      display: flex;
      align-items: center;
      span {
        margin-right: 0.15rem;
      }
    }
    .ev_int {
      padding: 0 0.15rem;
      overflow: hidden;
      #ev_main {
        padding: 0.09rem 0.15rem;
        box-sizing: border-box;
        width: 3.45rem;
        height: 1.4rem;
        background-color: #eeeeee;
        font-size: 0.14rem;
        border: none;
        border-radius: 0.1rem;
      }
    }

    .add_img {
      position: absolute;
      bottom: 0.15rem;
      left: 0.3rem;
      width: 0.56rem;
      height: 0.56rem;
      border: 0.01rem solid #d5d5d5;
      border-radius: 0.03rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      p {
        color: #999999;
        font-size: 0.11rem;
      }
      span {
        width: 0.25rem;
        height: 0.22rem;
        background: url("/static/icon/xiangji.png") center center no-repeat;
        background-size: 100% 100%;
        display: block;
      }
    }
  }
}
</style>
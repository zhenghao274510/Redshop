<template>
  <div class="order_mo">
    <div class="order_con">
      <div class="order_tit">
        <span>
          订单编号：
          <i>921029020992910</i>
        </span>
        <em>待支付</em>
      </div>
      <Info></Info>
      <div class="order_tot" v-if="change!=5">共2件商品&nbsp;&nbsp;&nbsp;&nbsp; 合计￥419.00</div>
      <div class="order_zhuang" v-if="change!=5">
        <span class="one" v-if="change==0||change==1">取消订单</span>
        <span class="two" v-if="change==0||change==1">去支付</span>
        <span class="one" v-if="change==2">申请退换</span>
        <span class="two" v-if="change==3" @click="shou_huo">确认收货</span>
        <span class="two" v-if="change==4" @click="goto">去评价</span>
      </div>
    </div>
    <van-overlay :show="show" @click="show = false" />
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import Info from "./carIfo";
import { Dialog } from "vant";
export default {
  props: ["come"],
  data() {
    return {
      show: false,
      change: this.come
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {
    Info
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {
    goto() {
      this.$router.push("/addpingjia");
    },
    shou_huo() {
      Dialog.confirm({
        title: "确认收货成功",
        message: "赶快去评论一下~"
      })
        .then(() => {
          this.$router.push("/addpingjia");
        })
        .catch(() => {
          // on cancel
        });
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

.order_mo {
  padding: 0.15rem;
  width: 100%;
  
  .order_con {
    // font-size: 0;
    background-color: #ffffff;
    border-radius: 0.1rem;
    .order_tit {
      padding: 0 0.15rem;
      height: 0.44rem;
      border-bottom: 0.01rem solid #e5e5e5;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.13rem;
      span {
        display: block;
        color: #999999;
      }
      em {
        display: block;
        color: #72bb29;
      }
    }
    .order_tot {
      padding: 0 0.15rem 0.15rem 0;
      font-size: 0.14rem;
      color: #333333;
      text-align: right;
    }
    .order_zhuang {
      height: 0.58rem;
      border-top: 0.01rem solid #e5e5e5;
      padding-right: 0.15rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      span {
        display: block;
        width: 0.77rem;
        height: 0.28rem;
        line-height: 0.28rem;
        font-size: 0.15rem;
        border-radius: 0.05rem;
        text-align: center;
      }
      .one {
        border: 0.01rem solid #666666;
      }
      .two {
        border: 0.01rem solid #72bb29;
        color: #72bb29;
        margin-left: 0.15rem;
      }
    }
  }
}
</style>
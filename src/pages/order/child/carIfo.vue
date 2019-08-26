<template>
  <ul class="order_info bg_wh">
    <!-- 订单详情购物车信息 -->
    <li v-for="item in arr">
      <router-link to="/orderdetails">
        <img src="/static/test/bg.png" alt />
        <div class="info_name">
          <p class="info_top">凯宝利519红葡萄酒750ml *6澳大利亚进口红酒</p>
          <p class="info_bot">进口葡萄酒礼盒</p>
        </div>
        <div class="info_price">
          <p>
            ￥
            <span>219</span>
          </p>
          <p>
            ×
            <span>1</span>
          </p>
        </div>
      </router-link>
      <div class="tui" v-if="num=='1'">
              <span>申请退换</span>
      </div>
    </li>
   
  </ul>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import btn from './btn'
export default {
  props:["num","item"],
  data() {
    return {
      arr:[1,2]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {
    btn
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
 .order_info {
      padding: 0.15rem .1rem;
      li {
        margin-bottom: 0.15rem;
        &:last-child {
          margin-bottom: 0;
        }
        .tui{
          padding: 0 .15rem;
         overflow: hidden;
          span{
            display: block;
            width: .9rem;
            height: .3rem;
            border-radius: .05rem;
            border: .01rem solid #999999;
            color: #999999;
            font-size: .14rem;
            text-align: center;
            line-height: .3rem;
            float: right;
          }
        }
        a {
          display: flex;
          justify-content: space-between;

          img {
            width: 0.85rem;
            height: 0.85rem;
            margin-right: 0.15rem;
          }
          .info_name {
            display: flex;
            flex: 3;
            flex-direction: column;
            text-align: left;
            .info_top {
              font-size: 0.14rem;
              color: #333333;
            }
            .info_bot {
              font-size: 0.12rem;
              color: #999999;
              margin-top: .06rem;
            }
          }
          .info_price {
            margin-left: 0.2rem;
            display: flex;
            flex-direction: column;
            font-size: 0.12rem;
            color: #333333;
            p {
              &:last-child {
                text-align: right;
                margin-top: 0.34rem;
              }
            }
          }
        }
      }
    }
</style>
<template>
  <div class="order_mo">
    <div class="order_con" v-for="(item,index) in arry" :key="index">
      <div @click="LookDetails(item)">
        <div class="order_tit">
          <span>
            订单编号：
            <i>{{item.orderid}}</i>
          </span>
          <em>已完成</em>
        </div>
        <Info :list="item.orderItem" :totalprice="total"></Info>
      </div>
      <div class="order_zhuang">
        <span class="one">已完成</span>

      </div>
    </div>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import Info from "./carIfo";
export default {
  props: ["list"],
  data() {
    return {
      show: false,
      dataList: [],
      arry: this.list,
      uid:'',
    };
  },
  //监听属性 类似于data概念
  computed: {
      total(){
          let totalprice=[]
          this.arry.forEach(item => {
              totalprice.push(item.orderAmount);
          });
          return totalprice;
      }
  },
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {
    Info
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.arry = [];
    //  this.uid=localStorage.getItem('uid');
    // let params = { cmd: "myOrder", uid: this.uid, nowPage: "1", pageCount: "10",status:'1' };
    // this.http(params).then(res => {
    //   console.log(res);
    //   if (res.data.result == 0) {
    //     this.arry = res.data.dataList;
    //     this.arry.forEach(item => {
    //       this.total.push(item.orderAmount);
    //     });
    //   }
    // });
  },
  //方法集合
  methods: {
    LookDetails(e) {
      console.log(e);
      this.$router.push({
        path: "/orderdetails",
        query: { orderid: e.orderid}
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
  // margin-bottom: 0.1rem;
  margin-top: .9rem;
  .order_con {
    margin-bottom: 0.1rem;
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
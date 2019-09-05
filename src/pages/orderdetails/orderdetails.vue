<template>
  <div class="order_de bg_c">
    <div class="order_de_info">
      <div class="tit bg_wh ft_mid pad mg_bot" v-if="status=='1'">等待买家付款</div>
      <div class="tit bg_wh ft_mid pad mg_bot" v-if="status=='4'">您已收货成功，赶快去评价啦~</div>
      <div class="tit bg_wh ft_mid pad mg_bot" v-if="status=='2'">正在配送中</div>
       <div class="de_zhi pad bg_wh">
        <span class="pos"></span>
        <div class="info col_mix no_use">
          <p class="ft_mid">收货人：{{productObject.receiverName}}&nbsp; &nbsp; &nbsp;{{productObject.receiverPhone}}</p>
          <p class="ft_mix">收货地址：{{productObject.receiverAddress}}</p>
        </div>
        <i class="back"></i>
      </div>
      <div class="tit bg_wh ft_mid pad mg_top bo_bot" >购物清单</div>
      <Info :list="productList"></Info>
      <div class="tit bg_wh ft_max pad bo_top">
        配送方式：&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="col_mid ft_mix">同城配送</span>
        <span class="col_mid ft_mix fr">配送费￥10元</span>
      </div>
      <div class="tit bg_wh ft_mid pad bo_bot bo_top">
        买家留言
        <input class="pad_l" type="text" v-if="status==0" placeholder="给买家留言（选填）" />
        <p class="pad_l" v-else></p>
      </div>
      <ul class="de_info bg_wh">
        <li class="col_mid">
          <span class="ft_mid">商品总价</span>
          <span class="ft_cmix">
            ￥
            <i>{{productObject.orderPrice}}</i>
          </span>
        </li>
        <li class="col_mid">
          <span class="ft_mid">配送费</span>
          <span class="ft_cmix">
            ￥
            <i>{{Freight}}</i>
          </span>
        </li>
        <li class="col_mid">
          <span class="ft_mid">优惠卷抵扣</span>
          <span class="ft_cmix">
            -￥
            <i>{{productObject.couponAmount}}</i>
          </span>
        </li>
        <li class="col_mid">
          <span class="ft_mid">实际支付</span>
          <span class="ft_cmix col_max">
            ￥
            <i>{{productObject.orderAmount}}</i>
          </span>
        </li>
      </ul>
      <div class="tit bg_wh ft_mid pad mg_top" v-if="status==1">订单信息</div>

      <ul class="de_info bg_wh">
        <li class="col_mid">
          <span class="ft_mid">订单编号：{{orderid}}</span>
          <span class="ft_cmix">复制</span>
        </li>
        <li class="col_mid">
          <span class="ft_mid">创建时间：{{productObject.createdDate}}</span>
        </li>
        <li class="col_mid">
          <span class="ft_mid" v-if="status!=1">付款时间：{{productObject.payDate}}</span>
        </li>
        <li class="col_mid">
          <span class="ft_mid" v-if="status==5">退款时间：{{productObject.refundDate}}</span>
        </li>
         <li class="col_mid">
          <span class="ft_mid" v-if="status!=3 || status==1">配送时间：{{productObject.deliveryDate}}</span>
        </li>
         <li class="col_mid">
          <span class="ft_mid" v-if="status==4">收货时间：{{productObject.finishDate}}</span>
        </li>
      </ul>

      <!-- 层高度 -->
      <!-- <div class="no_more bg_wh mg_top"></div> -->

      <!-- 底部 -->
      <!-- <div class="end bg_wh" v-if="status==1"> -->
        <btn :come="status"></btn>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import deZhi from "./adderss";
import Info from "./orderInfo";
import btn from "./../order/child/btn";

export default {
  data() {
    return {
      isaddress: true,
      //配送费
      Freight: "",
      uid: "",
      productObject:{},
      productList:[],
      status:0,
      orderid:''
    };
  },
  //监听属性 类似于data概念
  computed: {
    store(){
      return 
    }
  },
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {
    deZhi,
    Info,
    btn
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.uid = "1";
 this.orderid=this.$store.state.orderDetails.orderid;
   this.status=this.$store.state.orderDetails.status;
   console.log(this.status);
      let parmas = {
        cmd: "orderDetail",
        orderid: this.orderid,
        uid: this.uid
      };
      this.postRequest(parmas).then(res => {
     
        this.productObject=res.data.dataObject;
        this.productList=res.data.dataObject.orderItem ;
           console.log(this.productObject);

      });
 

    let parmas1 = { cmd: "getFreight" };
    this.postRequest(parmas1).then(res => {
      // console.log(res);
      this.Freight = res.data.amount;
    });
  },
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
 .de_zhi {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.79rem;
 .pos {
      width: 0.2rem;
      height: 0.2rem;
      background: url("/static/icon/dingdanxiangqing-dizhi.png") no-repeat;
      background-size: 100% 100%;
      display: block;
      margin-right: 0.14rem;
    }
      .back {
      display: block;
      width: 0.1rem;
      height: 0.17rem;
      background: url("/static/icon/dingdanxiangqing-jiantou.png") no-repeat;
      background-size: 100% 100%;
    }
 }
 .order_de{overflow: auto;}
.order_de_info {
  margin-top: 0.5rem;
  height: 100%;
  .tit {
    line-height: 0.49rem;
    overflow: hidden;
    .more_j {
      display: block;
      width: 0.09rem;
      height: 0.15rem;
      background: url("/static/icon/dingdan-jiantou.png") no-repeat;
      background-size: 100% 100%;
      margin-left: 0.15rem;
    }
  }
  .btn {
    height: 0.44rem;
    width: 3.45rem;
    margin: 0 auto;
    display: block;
    text-align: center;
    line-height: 0.44rem;
    border-radius: 0.05rem;
    margin-top: 0.63rem;
  }
  .mothed {
    padding: 0 0.15rem;
    li {
      line-height: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 0.16rem;
        color: #333333;
      }
      div {
        width: 0.23rem;
        height: 0.23rem;
        position: relative;
        img {
          position: absolute;
          top: 0;
        }
      }
    }
  }
  .de_info {
    padding: 0.07rem 0.15rem;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 0.27rem;
    }
  }

  .no_more {
    height: 0.2rem;
  }
  .end {
    position: fixed;
    bottom: 0;
    height: 0.49rem;
    width: 100%;
    z-index: 999;
    .ok {
      height: 0.49rem;
      overflow: hidden;
      span {
        display: block;
        float: right;
      }
      .lin_h {
        line-height: 0.49rem;
        margin-right: 0.15rem;
      }
      .sub {
        padding: 0.17rem 0.23rem;
      }
    }
  }
}
</style>
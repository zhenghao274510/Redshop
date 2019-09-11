<template>
  <div class="order_de bg_c">
    <div class="order_de_info">
      <div class="tit bg_wh ft_mid pad mg_bot" v-if="!goHome">等待买家付款</div>
      <div class="de_zhi pad bg_wh" @click="goto" v-if="!goHome">
        <span class="pos"></span>
        <div class="info col_mix no_use" v-if="defaultAddress.isDefault==1">
          <p class="ft_mid">收货人：{{defaultAddress.name}}&nbsp; &nbsp; &nbsp;{{defaultAddress.phone}}</p>
          <p class="ft_mix">收货地址：{{defaultAddress.address}}{{defaultAddress.detail}}</p>
        </div>
        <div class="col_mix ft_mid no_use" v-else>请选择你的收货地址</div>
        <i class="back"></i>
      </div>
      <div class="tit bg_wh ft_mid pad mg_top bo_bot" v-if="!goHome">购物清单</div>
      <!-- 订单详细信息 -->
      <ul class="order_info bg_wh">
        <li v-for="(item,index) in productList" :key="index">
          <router-link to>
            <img :src="item.image" alt />
            <div class="info_name">
              <p class="info_top txt-cut">{{item.productName}}</p>
              <p class="info_bot txt-cut">{{item.skuName}}</p>
            </div>
            <div class="info_price">
              <p>
                ￥
                <span>{{item.skuPrice}}</span>
              </p>
              <p>
                ×
                <span>{{item.count}}</span>
              </p>
            </div>
          </router-link>
        </li>
      </ul>
      <div class="tit bg_wh ft_max pad bo_top">
        配送方式：&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="col_mid ft_mix">同城配送</span>
        <span class="col_mid ft_mix fr">配送费￥{{freight}}元</span>
      </div>
      <div class="tit bg_wh ft_mid pad bo_bot bo_top">
        买家留言
        <input class="pad_l" type="text" placeholder="给买家留言（选填）" />
      </div>
      <div class="tit bg_wh ft_mid pad mg_top bo_bot clearfix">
        <div class="fr">
          <span>共{{totalcount}}件商品</span> &nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            合计:
            <i class="col_max">￥{{shoptotal}}</i>
          </span>
        </div>
      </div>
      <ul class="de_info bg_wh">
        <li class="col_mid">
          <span class="ft_mid">商品总价</span>
          <span class="ft_cmix">
            ￥
            <i>{{shoptotal}}</i>
          </span>
        </li>
        <li class="col_mid">
          <span class="ft_mid">配送费</span>
          <span class="ft_cmix">
            ￥
            <i>{{freight}}</i>
          </span>
        </li>
        <li class="col_mid" v-if="!goHome">
          <span class="ft_mid">优惠卷抵扣</span>
          <span class="ft_cmix" v-if="choseCard!=''">
            -￥
            <i>{{choseCard}}</i>
          </span>
        </li>
        <li class="col_mid">
          <span class="ft_mid">实际支付</span>
          <span class="ft_cmix col_max">
            ￥
            <!--  -->
            <i>{{MinTotalPrice}}</i>
          </span>
        </li>
      </ul>
      <!-- <div class="tit bg_wh ft_mid pad mg_top">订单信息</div> -->
      <div class="tit bg_wh ft_mid pad mg_top d_flex" @click="changej(0)">
        <span>可使用优惠卷</span>
        <i class="more_j"></i>
      </div>
      <div class="tit bg_wh ft_mid pad mg_top bo_bot">配送方式</div>
      <ul class="mothed bg_wh">
        <li @click="changeMothed(0)">
          <span>配送到家</span>
          <div>
            <img src="/static/icon/goumaifangshi-weixuanzhong.png" v-if="goHome" />
            <img src="/static/icon/goumaifangshi-xuanzhong.png" v-else />
          </div>
        </li>
        <li @click="changeMothed(1)">
          <span>存为礼品卡</span>
          <div>
            <img src="/static/icon/goumaifangshi-weixuanzhong.png" v-if="goCrd" />
            <img src="/static/icon/goumaifangshi-xuanzhong.png" v-else />
          </div>
        </li>
      </ul>
      <div class="tit bg_wh ft_mid pad mg_top mg_bot" @click="changej(1)">
        <div class="d_flex">
          <span>支付方式</span>
          <div class="d_flex">
            <span>{{payMothed[radioPay-1]}}</span>
            <i class="more_j"></i>
          </div>
          <!-- <div class="pay_icon">
              <span></span>
          </div>-->
        </div>
      </div>

      <div class="end bg_wh">
        <div class="ok bo_top ft_max">
          <span class="bg_g col_wh ft_mid sub" @click="SubOrder">提交订单</span>
          <span class="col_mix lin_h">
            实付:
            <i class="col_max">￥{{MinTotalPrice}}</i>
          </span>
        </div>
      </div>
      <!-- 层高度 -->
      <div class="no_more bg_wh mg_top"></div>
      <!-- 优惠卷 -->
      <van-popup
        v-model="show_juan"
        round
        position="bottom"
        :style="{ height:'50%'}"
        class="hidden"
      >
        <van-radio-group v-model="radioYouhui">
          <van-cell title="优惠"></van-cell>
          <van-cell-group>
            <van-cell
              clickable
              v-for="(item,index) in CanuseCard"
              :key="index"
              @click="onClick"
              style="z-index:99;"
            >
              满{{item.couponPrice}} 减{{item.couponAmount}}元
              <van-radio slot="right-icon" :name="index+1" checked-color="#72BB29" />
            </van-cell>
          </van-cell-group>
        </van-radio-group>

        <van-cell @click="show_juan=false">
          <span class="btn bg_g col_wh ft_mid">确定</span>
        </van-cell>
      </van-popup>
      <!-- 充值卡 支付  账号 密码 -->
      <van-popup v-model="paystyle" round position="bottom" :style="{ height:'50%'}" class="hidden">
        <van-radio-group v-model="radioPay">
          <van-cell title="请选择支付方式"></van-cell>
          <van-cell-group>
            <van-cell title="微信支付" clickable>
              <van-radio slot="right-icon" name="1" checked-color="#72BB29" />
            </van-cell>
            <van-cell title="充值卡支付" clickable>
              <van-radio slot="right-icon" name="2" checked-color="#72BB29" />
            </van-cell>
          </van-cell-group>
        </van-radio-group>
        <van-cell @click="payCard">
          <span class="btn bg_g col_wh ft_mid">确定</span>
        </van-cell>
      </van-popup>
      <van-popup
        v-model="showcardnum"
        round
        position="bottom"
        :style="{ height:'50%'}"
        class="hidden"
      >
        <van-cell-group style="font-size:.15rem;">
          <van-cell style="text-align:center;">充值卡支付</van-cell>
          <van-cell>
            <input type="text" placeholder="请输入充值卡号" class="inp" v-model="cardnum" />
          </van-cell>
          <van-cell>
            <input type="text" placeholder="请输入充值卡密码" class="inp" v-model="pwd" />
          </van-cell>
        </van-cell-group>
        <van-cell @click="paybycard">
          <span class="btn bg_g col_wh ft_mid">确定</span>
        </van-cell>
      </van-popup>
    </div>
  </div>
</template>

<script>
import wx from "weixin-js-sdk";
//import 《组件名称》 from '《组件路径》';
import deZhi from "./adderss";
import Info from "./orderInfo";
import btn from "./../order/child/btn";
export default {
  data() {
    return {
      payMothed: ["微信支付", "充值卡支付"],
      paystyle: false,
      radioYouhui: 1,
      radioPay: 1,
      show_juan: false,
      goHome: false,
      goCrd: true,
      //配送费
      freight: 10,
      uid: "",
      // 可用优惠券
      CanuseCard: [],
      productList: [],
      choseCard: "",
      addressList: [],
      defaultAddress: {},
      showchongzhi: false,
      //  单商品
      productId: "",
      skuId: "",
      count: "",
      payType: "1",
      buyType: "0",
      addressId: "",
      couponId: "",
      cartid: [],
      // 充值卡信息
      cardnum: "",
      pwd: "",
      showcardnum: false,
      newCard:'',
      newPsw:''
    };
  },
  //监听属性 类似于data概念
  computed: {
    shoptotal() {
      let num = 0;
      this.productList.forEach(item => {
        num += (item.skuPrice * 100 * item.count) / 100;
      });
      return num;
    },
    totalcount() {
      let num = 0;
      this.productList.forEach(item => {
        num += parseInt(item.count);
      });
      return num;
    },
    MinTotalPrice() {
      if (this.goHome) {
        return this.shoptotal + parseInt(this.freight);
      } else {
        if (this.CanuseCard != "") {
          if (
            this.choseCard != "" &&
            this.CanuseCard[this.radioYouhui - 1].couponPrice < this.shoptotal
          ) {
            return (
              this.shoptotal -
              this.CanuseCard[this.radioYouhui - 1].couponAmount
            );
          } else {
            return parseInt(this.shoptotal) + parseInt(this.freight);
          }
        }
      }
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
    this.uid = localStorage.getItem("uid");
    if (typeof this.$route.query.shop == "string") {
      this.productList.push(JSON.parse(this.$route.query.shop));
      this.productId = this.productList[0].productid;
      this.skuId = this.productList[0].skuId;
      this.count = this.productList[0].count;
    } else {
      this.productList = JSON.parse(localStorage.getItem("shop"));
      this.productList.forEach(item => {
        this.cartid.push(item.cartId);
      });
    }
    console.log(this.productList, this.productId, this.skuId, this.count);

    // this.uid=this.$store.state.Use.uid;
    //   配送费
    let parmas1 = { cmd: "getFreight" };
    this.postRequest(parmas1).then(res => {
      this.freight = res.data.amount;
    });
    //  可用优惠卷  我的优惠券
    let parmas2 = { cmd: "myCouponList", uid: this.uid };
    this.postRequest(parmas2).then(res => {
      // console.log(res)
      this.CanuseCard = res.data.dataList;
    });
    //
    // 我的收货地址
    let parmas3 = {
      cmd: "getAddressList",
      uid: this.uid,
      nowPage: "1",
      pageCount: "10"
    };
    this.postRequest(parmas3).then(res => {
      console.log(res);
      this.addressList = res.data.dataList;
      if (this.addressList != 0) {
        this.addressList.forEach(item => {
          if (item.isDefault == 1) {
            this.defaultAddress = item;
          } else {
            this.defaultAddress = this.addressList[0];
          }
          this.addressId = this.defaultAddress.addressId;
        });
      }
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {
    paybycard() {
      let parmas = {
        cmd: "payByRechargeCard",
        orderid: this.orderid,
        cardnun: this.cardnun,
        pwd: this.pwd
      };
      this.http(parmas).then(res => {
        console.log(res);
        this.showcardnum=false;
      });
    },
    payCard() {
      if (this.radioPay == 2) {
        this.showcardnum = true;
        this.paystyle = false;
      } else if(this.radioPay==1) {
        // this.showcardnum = false;
        this.paystyle = false;
      }
    },
    changej(num) {
      switch (num) {
        case 0:
          //可用优惠券
          this.show_juan = true;
          break;
        case 1:
          this.paystyle = true;
      }
    },
    changeMothed(num) {
      switch (num) {
        case 0:
          this.goHome = false;
          this.goCrd = true;
          break;
        case 1:
          this.goHome = true;
          this.goCrd = false;
      }
    },
    goto() {
      this.$router.push("/myaddress");
    },
    onClick(event) {
      this.choseCard = "";
      console.log(this.radioYouhui);
      let JuanNum = parseInt(this.CanuseCard[this.radioYouhui - 1].couponPrice);
      console.log(this.shoptotal);
      if (JuanNum > this.shoptotal) {
        this.$toast("次劵未满额,不能使用");
      } else {
        this.choseCard = this.CanuseCard[this.radioYouhui - 1].couponAmount;
        this.couponId = this.CanuseCard[this.radioYouhui - 1].couponId;
      }
    },
    formtime() {
      let val = new Date();
      let Y = val.getFullYear();
      let M = val.getMonth() + 1;
      let D = val.getDate();
      let HH = val.getHours();
      let MM = val.getMinutes();
      let SS = val.getSeconds();
      M < 10 ? (M = "0" + M) : M;
      D < 10 ? (D = "0" + D) : D;
      HH < 10 ? (HH = "0" + HH) : HH;
      MM < 10 ? (MM = "0" + MM) : MM;
      SS < 10 ? (SS = "0" + SS) : SS;
      return Y + "-" + M + "-" + D + "  " + HH + ":" + MM + ":" + SS;
    },
    SubOrder() {
      //   支付方式
      if (this.radioPay == 1) {
        this.payType = 1;
      } else {
        this.payType = 0;
      }
      //   购买方式
      if (!this.goHome) {
        this.buyType = 0;
      } else {
        this.buyType = 1;
      }

      if (this.addressList.length == 0) {
        this.$toast("请添加收货地址");
      } else {
        console.log(1);
        //  单产品  微信支付
        if (this.productId != "" && this.payType == 1 && this.buyType == 0) {
          let parmas = {
            cmd: "productBuy",
            uid: this.uid,
            productId: this.productId,
            skuId: this.skuId,
            freight: this.freight,
            count: this.count,
            remark: this.remark,
            amount: this.MinTotalPrice,
            couponId: this.couponId,
            addressId: this.addressId,
            payType: this.payType,
            buyType: this.buyType
          };
          this.http(parmas).then(res => {
            console.log(res);
            if (res.data.result == 0) {
              let orderId = res.data.orderId;
              let parmas = { cmd: "payByWx", orderid: orderId };
              this.http(parmas).then(res => {
                let data = res.data.body;
                console.log(data);
                this.onBridgeReady(data);
              });
            }
          });
        } else if (
          this.cartid.length != 0 &&
          this.payType == 1 &&
          this.buyType == 0
        ) {
          console.log(3);
          let cartid = this.cartid.join(",");

          let parmas = {
            cmd: "addCartOrder",
            uid: this.uid,
            cartid: cartid,
            freight: this.freight,
            remark: this.remark,
            amount: this.MinTotalPrice,
            couponId: this.couponId,
            addressId: this.addressId,
            payType: this.payType,
            buyType: this.buyType
          };
          this.http(parmas).then(res => {
            console.log(res);
            if (res.data.result == 0) {
              let orderId = res.data.orderId;
              let parmas = { cmd: "payByWx", orderid: orderId };
              this.http(parmas).then(res => {
                let data = res.data.body;
                console.log(data);
                this.onBridgeReady(data);
              });
            }
          });
        } else if (this.buyType == 1) {
          //  存为礼品卡
          this.MinTotalPrice='0.01';
          console.log("礼品卡");
          let parmas = {
            cmd: "createRechargeCard",
            uid: this.uid,
            amount:'0.01'
          };
          
          this.http(parmas).then(res=>{
             console.log(res);
             this.newCard=res.data.dataObject.cardnum;
             this.newPsw=res.data.dataObject.pwd;
            let orderId =res.data.dataObject.orderid;
                let parmas = { cmd: "payByWx", orderid: orderId };
              this.http(parmas).then(res => {
                let data = res.data.body;
                console.log(data);
                this.onBridgeReady(data);
              });
             
          })
        }
      }
    },

    onBridgeReady(data) {
      WeixinJSBridge.invoke(
        "getBrandWCPayRequest",
        {
          appId: data.appId, //公众号名称，由商户传入
          timeStamp: data.timeStamp, //时间戳，自1970年以来的秒数
          nonceStr: data.nonceStr, //随机串
          package: data.prepay,
          signType: data.signType, //微信签名方式：
          paySign: data.paySign //微信签名
        },
        function(res) {
          if (res.err_msg == "get_brand_wcpay_request:ok") {
            // 使用以上方式判断前端返回,微信团队郑重提示：
            //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
              if(!this.goHome){
             this.$router.replace('/success');
              }else{
                this.$router.replace('/success');
              }
          }
        }
      );
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
  .hidden {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .btn {
    height: 0.44rem;
    width: 3.45rem;
    margin: 0 auto;
    display: block;
    text-align: center;
    line-height: 0.44rem;
    border-radius: 0.05rem;
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
    p {
      padding-right: 0.15rem;
    }
  }

  .no_more {
    height: 0.7rem;
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
.order_info {
  padding: 0.15rem 0.1rem;
  li {
    margin-bottom: 0.15rem;
    &:last-child {
      margin-bottom: 0;
    }
    .tui {
      padding: 0 0.15rem;
      overflow: hidden;
      span {
        display: block;
        width: 0.9rem;
        height: 0.3rem;
        border-radius: 0.05rem;
        border: 0.01rem solid #999999;
        color: #999999;
        font-size: 0.14rem;
        text-align: center;
        line-height: 0.3rem;
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
          margin-top: 0.06rem;
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
.no_use {
  flex: 1;
}
.inp {
  border: 0.01rem solid #e5e5e5;
  width: 100%;
  height: 0.35rem;
  padding-left: 0.15rem;
}
</style>
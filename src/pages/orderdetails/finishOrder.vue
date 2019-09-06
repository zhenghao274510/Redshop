<template>
  <div class="order_de bg_c">
    <div class="order_de_info">
      <div class="tit bg_wh ft_mid pad mg_bot">等待买家付款</div>
      <div class="de_zhi pad bg_wh">
        <span class="pos"></span>
        <div class="info col_mix no_use" v-if="store.useAddres.name">
          <p
            class="ft_mid"
          >收货人：{{store.useAddres.name}}&nbsp; &nbsp; &nbsp;{{store.useAddres.phone}}</p>
          <p class="ft_mix">收货地址：{{store.useAddres.address}}{{store.useAddres.detail}}</p>
        </div>
        <div class="col_mix ft_mid no_use" v-else @click="goto">请选择你的收货地址地址</div>
        <i class="back"></i>
      </div>
      <div class="tit bg_wh ft_mid pad mg_top bo_bot">购物清单</div>
      <!-- 订单详细信息 -->
      <ul class="order_info bg_wh">
        <li v-for="(item,index) in productList" :key="index">
          <router-link to>
            <img :src="imgurl+item.logo" alt />
            <div class="info_name">
              <p class="info_top txt-cut">{{item.title}}</p>
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
        <span class="col_mid ft_mix fr">配送费￥{{Freight}}元</span>
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
            <i>{{Freight}}</i>
          </span>
        </li>
        <li class="col_mid">
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
        :style="{ height: '40%' }"
        :close-on-click-overlay="jin"
      >
        <van-radio-group v-model="radioYouhui" v-if="direct==0">
          <van-cell title="优惠"></van-cell>
          <van-cell-group>
            <van-cell clickable v-for="(item,index) in CanuseCard" :key="index" @click="onClick" style="z-index:99;">
              满{{item.couponPrice}} 减{{item.couponAmount}}元
              <van-radio slot="right-icon" :name="index+1" checked-color="#72BB29" />
            </van-cell>
          </van-cell-group>
        </van-radio-group>
        <van-radio-group v-model="radioPay" v-else >
          <van-cell title="请选择支付方式"></van-cell>
          <van-cell-group>
            <van-cell title="微信支付" clickable >
              <van-radio slot="right-icon" name="1" checked-color="#72BB29" />
            </van-cell>
            <van-cell title="充值卡支付" clickable>
              <van-radio slot="right-icon" name="2" checked-color="#72BB29" />
            </van-cell>
          </van-cell-group>
        </van-radio-group>
        <van-cell @click="show_juan=false">
          <span class="btn bg_g col_wh ft_mid">确定</span>
        </van-cell>
      </van-popup>
    </div>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import deZhi from "./adderss";
import Info from "./orderInfo";
import btn from "./../order/child/btn";
import { pathway } from "@/mixins/img";
export default {
  data() {
    return {
      imgurl: pathway.imgurl,
      payMothed: ["微信支付", "充值卡支付"],
      // 禁止点击遮罩层
      jin: false,
      direct: 0,
      radioYouhui: 1,
      radioPay: 1,
      show_juan: false,
      goHome: false,
      goCrd: true,
      //配送费
      Freight: 10,
      uid: "",
      productObject: {},
      productSkuid: {},
      // 可用优惠券
      CanuseCard: [],
      productList: [],
      choseCard:''
    };
  },
  //监听属性 类似于data概念
  computed: {
    store() {
      return this.$store.state;
    },
    shoptotal() {
      let num = 0;
      this.productList.forEach(item => {
        num += item.skuPrice * item.count;
      });
      return num;
    },
    totalcount() {
      let num = 0;
      this.productList.forEach(item => {
        num += item.count;
      });
      return num;
    },
    MinTotalPrice() {
      if(this.CanuseCard!=""){
              if(this.choseCard!=""&&this.CanuseCard[this.radioYouhui-1].couponPrice<this.shoptotal){
          return this.shoptotal-this.CanuseCard[this.radioYouhui-1].couponAmount;
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
    this.uid = "1";
    this.productList.push(JSON.parse(this.$route.query.shop));
    // this.uid=this.$store.state.Use.uid;
    this.productObject = this.store.Shop;
    this.productSkuid = this.store.Buy;
    let parmas1 = { cmd: "getFreight" };
    this.postRequest(parmas1).then(res => {
      this.Freight = res.data.amount;
    });
    let parmas2 = { cmd: "myCouponList", uid: "1" };
    this.postRequest(parmas2).then(res => {
      console.log(res)
      this.CanuseCard = res.data.dataList;
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {
    changej(num) {
      this.show_juan = true;
      switch (num) {
        case 0:
          //可用优惠券
          this.direct = 0;
          break;
        case 1:
          this.direct = 1;
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
      this.$router.push("/editaddress");
    },
    onClick(event) {
      console.log(this.radioYouhui);
      this.choseCard=this.CanuseCard[this.radioYouhui-1].couponAmount;
      
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
      if (this.store.useAddres.name == "") {
        this.$toast("请添加收货地址");
      }
    },
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
    p {
      padding-right: 0.15rem;
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
</style>
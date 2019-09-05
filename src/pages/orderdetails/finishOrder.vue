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
      <Info :item="productSkuid" :obj="productObject"></Info>
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
          <span>共{{productSkuid.conut}}件商品</span> &nbsp;&nbsp;&nbsp;&nbsp;
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
        <!-- <li class="col_mid" >
          <span class="ft_mid">优惠卷抵扣</span>
          <span class="ft_cmix">
            -￥
            <i>{{}}</i>
          </span>
        </li> -->
        <li class="col_mid">
          <span class="ft_mid">实际支付</span>
          <span class="ft_cmix col_max">
            ￥
            <i>{{total}}</i>
          </span>
        </li>
      </ul>
      <div class="tit bg_wh ft_mid pad mg_top">订单信息</div>
      <div class="tit bg_wh ft_mid pad mg_top d_flex" @click="changej(0)">
        <span>可使用优惠卷</span>
        <i class="more_j"></i>
      </div>

      <ul class="de_info bg_wh">
        <li class="col_mid">
          <span class="ft_mid">订单编号：{{orderid}}</span>
          <span class="ft_cmix">复制</span>
        </li>
        <li class="col_mid">
          <span class="ft_mid">创建时间：{{time}}</span>
        </li>
      </ul>
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
      <div class="tit bg_wh ft_mid pad mg_top mg_bot d_flex" @click="changej(1)">
        <span>支付方式</span>
        <div class="d_flex">
          <span>微信支付</span>
          <i class="more_j"></i>
        </div>
      </div>

      <!-- 层高度 -->
      <div class="no_more bg_wh mg_top"></div>

      <!-- 底部 -->
      <!-- <div class="end bg_wh" v-if="direct==1">
        <btn :come="num"></btn>
      </div>-->
      <div class="end bg_wh">
        <div class="ok bo_top ft_max">
          <span class="bg_g col_wh ft_mid sub" @click="SubOrder">提交订单</span>
          <span class="col_mix lin_h">
            实付:
            <i class="col_max">￥{{total}}</i>
          </span>
        </div>
      </div>
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
            <van-cell
              clickable
              @click="radioYouhui = '1'"
              v-for="(item,index) in CanuseCard"
              :key="index"
            >
                满{{item.couponPrice}}元减 {{item.couponAmount}}
              <van-radio slot="right-icon" name="1" checked-color="#72BB29" />
            </van-cell>
          </van-cell-group>
        </van-radio-group>
        <van-radio-group v-model="radioPay" v-else>
          <van-cell title="请选择支付方式"></van-cell>
          <van-cell-group>
            <van-cell title="微信支付" clickable @click="radioPay = '1'">
              <van-radio slot="right-icon" name="1" checked-color="#72BB29" />
            </van-cell>
            <van-cell title="充值卡支付" clickable @click="radioPay = '2'">
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

export default {
  data() {
    return {
      no_use_dizhi: false,
      isaddress: true,
      // 禁止点击遮罩层
      jin: false,
      direct: 0,
      radioYouhui: 1,
      radioPay: 1,
      num: "0",
      show_juan: false,
      goHome: false,
      goCrd: true,
      //订单编号
      orderid:'',
      //配送费
      Freight: 10,
      uid: "",
      productObject: {},
      productSkuid: {},
      // 可用优惠券
      CanuseCard: [],
      time: ''
    };
  },
  //监听属性 类似于data概念
  computed: {
    store() {
      return this.$store.state;
    },
    total() {
      let price = parseInt(this.productSkuid.shop.skuPrice);
      let num = parseInt(this.productSkuid.conut);
      let fight=parseInt(this.Freight);
      let allprice=price * num+fight;
      //  if(allprice>this.CanuseCard[this.radioYouhui].couponPrice){
      //    return allprice-this.CanuseCard[this.radioYouhui].couponPrice
      //  }else{
          return allprice;
      //  }
      
    },
    //  isYouhui(){
    //   let price = parseInt(this.productSkuid.shop.skuPrice);
    //   let num = parseInt(this.productSkuid.conut);
    //   let fight=parseInt(this.Freight);
    //   let allprice=price * num+fight;
    //    if(allprice>this.CanuseCard[this.radioYouhui].couponPrice){
    //      return true
    //    }else{
    //       return false;
    //    }
    //  },
     shoptotal() {

      let price = parseInt(this.productSkuid.shop.skuPrice);
      let num = parseInt(this.productSkuid.conut);
      let allprice =price * num;
     

      return (price * num);
    },
    Check() {
      return index + 1;
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
    this.productObject = this.store.Shop;
    this.productSkuid = this.store.Buy;
    console.log( this.productSkuid);
  
    let parmas1 = { cmd: "getFreight" };
    this.postRequest(parmas1).then(res => {
      // console.log(res);
      this.Freight = res.data.amount;
    });
      let parmas2 = { cmd: "myCouponList", uid: "1" };
      this.postRequest(parmas2).then(res => {
        console.log(res);
        this.CanuseCard = res.data.dataList;
      });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.orderid=new Date().getTime()+ parseInt(Math.random()*1000);
    this.time=  this.formtime();
  },
  filters:{
   
  },
  //方法集合
  methods: {
    changej(num) {
      this.show_juan = true;
      switch (num) {
        case 0:
          //可用优惠券
          this.direct = 0;
          this.GetMyCard();
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
    GetMyCard() {
    
    },
     formtime(){
       let val=new Date();
        let Y=val.getFullYear();
        let M=val.getMonth()+1;
        let D=val.getDate();
        let HH=val.getHours();
        let MM=val.getMinutes();
        let SS=val.getSeconds();
        M<10?M="0"+M:M;
        D<10?D="0"+D:D;
        HH<10?HH="0"+HH:HH;
        MM<10?MM="0"+MM:MM;
        SS<10?SS="0"+SS:SS;
      return Y+'-'+M+'-'+D+'  '+HH+':'+MM+':'+SS
        
    },
    SubOrder(){
      if(this.store.useAddres.name==''){
        this.$toast('请添加收货地址');
      }
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
</style>
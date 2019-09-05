<template>
  <div class="gif_card_de">
    <div class="cont">
        <div class="de_zhi pad bg_wh">
        <span class="pos"></span>
        <div class="info col_mix no_use" v-if="store.address">
          <p class="ft_mid">收货人：{{store.name}}&nbsp; &nbsp; &nbsp;{{store.phone}}</p>
          <p class="ft_mix">收货地址：{{store.address}}{{store.detail}}</p>
        </div>
        <div class="col_mix ft_mid no_use" v-else @click="goto">请选择你的收货地址地址</div>
        <i class="back"></i>
      </div>

      <div class="tit bg_wh ft_max pad bo_top">购物清单</div>
      <Info :num="id" :list="productList"></Info>
      <div class="line"></div>
      <div class="tui">
        <div class="changemi">
          <span>修改密码</span>
          <van-icon name="records" size=".16rem" color="#999999" />
        </div>
      </div>
      <div class="line"></div>
      <div>
         <div class="tit bg_wh ft_mid pad bo_bot bo_top">同城配送</div>
        <div class="tit bg_wh ft_mid pad bo_bot bo_top">
          买家留言
          <input class="pad_l" type="text" placeholder="给买家留言（选填）" v-model="remark" />
        </div>
       
      </div>
    </div>
    <router-link to class="end">
      <input type="button" value="配送到家" class="btn" @click="getmsg" />
    </router-link>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import Info from "./../order/child/carIfo";
// import myAddress from "./../orderdetails/adderss";
export default {
  data() {
    return {
      id: 1,
      productList:[],
      remark: "",
      cardnum:'',
      pwd:'',
      uid:"",
      addressId:'',
      giftcardId:''
    };
  },
  //监听属性 类似于data概念
  computed: {
    store(){
      return this.$store.state.useAddres;
    }
  },
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {
    Info,
    // myAddress
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // this.uid=this.$store.state.Use.uid;
    this.uid="1";
    this.cardnum=this.$store.state.gifCradInfo.cardnum;
    this.pwd=this.$store.state.gifCradInfo.pwd;
    console.log(this.$store.state.useAddres)
    let parmas={cmd:"findGiftCard",uid:this.uid,cardnum:this.cardnum,pwd:this.pwd};
    this.postRequest(parmas).then(res=>{
      //  console.log(res)
       this.productList=res.data.dataObject.orderItem;
       this.$store.commit('LookGifcardDetails',this.productList);
      //  console.log(this.productList)
    })
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {
    getmsg() {
      // this.uid=this.$store.state.Use.uid;
       this.giftcardId=this.$store.state.gifCradInfo.cardid;
       this.addressId=this.$store.state.useAddres
      this.uid = "1";

      let parmas = {
        cmd: "giftCardDelivery",
        uid: this.uid,
        giftcardId: this.giftcardId,
        addressId: this.addressId,
        remark: this.remark
      };
    },
    goto(){
      this.$router.push('/editaddress');
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
.cont {
  margin-top: 0.5rem;
  .line {
    height: 0.05rem;
    background-color: #f6f6f6;
  }
  .tit {
    line-height: 0.49rem;
  }
  .tui {
    line-height: 0.49rem;
    overflow: hidden;
    padding-right: 0.15rem;
    .changemi {
      height: 0.49rem;
      border-radius: 0.05rem;
      color: #999999;
      font-size: 0.14rem;
      text-align: center;
      line-height: 0.3rem;
      float: right;
      display: flex;
      align-items: center;
      span {
        margin-right: 0.15rem;
      }
    }
  }
}
.end {
  padding: 0.15rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  .btn {
    width: 100%;
    height: 0.44rem;
    background-color: #72bb29;
    color: #fff;
    margin-top: 0.4rem;
    font-size: 0.14rem;
  }
}
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
    .no_use {
      flex: 1;
      p {
        line-height: 0.2rem;
      }
    }
  }
</style>
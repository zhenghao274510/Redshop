<template>
  <div class="box">
    <input type="text" placeholder="请输入卡号" v-model="cardnum" id="cardnum" />
    <input type="password" placeholder="请输入密码" v-model="pwd" id="pwd" />
    <span class="btn" @click="getmsg">查询</span>

    <ul class="result" v-if="dataObject">
      <li>卡号：{{dataObject.cardnum}}</li>
      <li>密码：{{dataObject.pwd}}</li>
      <li v-if="direct==1">余额：{{dataObject.balance}}</li>
    </ul>
    <div @click="gotodetials">

    <Info :list="dataList" v-if="show" ></Info>
    </div>
  </div>
</template>
 
<script>
import { Dialog } from "vant";
import Info from "./../order/child/carIfo";
export default {
  data() {
    return {
      cardnum: "",
      pwd: "",
      dataObject: "",
      uid: "",
      direct: "",
      dataList:[],
      show:false,
      carid:''
    };
  },
  created() {
    this.uid=sessionStorage.getItem('uid');
    this.direct = this.$route.query.direct;
  },
  methods: {
    getmsg() {
      
      this.cardnum = document.getElementById("cardnum").value.trim();
      this.pwd = document.getElementById("pwd").value.trim();
      if (this.direct == 1) {
        let parmas = {
          cmd: "findRechargeCard",
          uid: this.uid,
          cardnum: this.cardnum,
          pwd: this.pwd
        };
        this.http(parmas).then(res => {
          if (res.data.result == 0) {
            console.log(res);
            this.dataObject = res.data.dataObject;
            this.carid=res.data.dataObject.carid;
          }
        });
      }else{
        
         let parmas = {
          cmd: "findGiftCard",
          uid: this.uid,
          cardnum: this.cardnum,
          pwd: this.pwd
        };
        this.http(parmas).then(res => {
          if (res.data.result == 0) {
            this.show=true;
            console.log(res);
            this.dataObject = res.data.dataObject;
            this.dataList=res.data.dataObject.orderItem;
            this.carid=res.data.dataObject.carid;
          }
        });
      }
    },
    gotodetials(){
      let obj={cardnum:this.cardnum,pwd:this.pwd,carid:this.carid};
      this.$router.push({path:'/giftcardetails',query:{gift:JSON.stringify(obj)}})
    }
  },
  moutend() {},
  components:{
    Info
  }
};
</script>
 
<style scoped lang = "less">
.box {
  margin-top: 0.5rem;
  padding: 0.15rem;
  font-size: 0;
  input {
    margin-top: 0.15rem;
    padding-left: 0.1rem;
    width: 100%;
    height: 0.45rem;
    font-size: 0.14rem;
    border: 0.01rem solid #999999;
    border-radius: 0.05rem;
    box-sizing: border-box;
  }
  .btn {
    background-color: #72bb29;
    color: #fff;
    margin-top: 1.2rem;
    display: block;
    widows: 100%;
    height: 0.44rem;
    font-size: 0.14rem;
    text-align: center;
    line-height: 0.44rem;
  }
  .result {
    margin-top: 0.2rem;
    li {
      line-height: 0.3rem;
      font-size: 0.14rem;
      /* border-bottom: .01rem solid #CCC; */
    }
  }
}
</style>
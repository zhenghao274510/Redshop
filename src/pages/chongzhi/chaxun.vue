<template>
  <div class="box">
    <input type="text" placeholder="请输入卡号" v-model="cardnum" />
    <input type="password" placeholder="请输入密码" v-model="pwd" />
    <span   class="btn" @click="getmsg" > 查询</span>

    <ul class="result" v-if="dataObject">
  
      <li>卡号：{{dataObject.cardnum}}</li>
      <li>密码：{{dataObject.pwd}}</li>
      <li>余额：{{dataObject.balance}}</li>
    </ul>
  </div>
</template>
 
<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      cardnum: "",
      pwd: "",
      dataObject: "",
      uid:""
    };
  },
  created(){
     this.uid=localStorage.getItem('uid');
  },
  methods: {
    getmsg() {
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
        }
      });
    }
  },
  moutend() {
   
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
  }
  .btn {
    background-color: #72bb29;
    color: #fff;
    margin-top: 1.2rem;
    display: block;
    widows: 100%;
    height: .44rem;
    font-size: .14rem;
    text-align: center;
    line-height: .44rem;
  }
  .result {
    margin-top: .2rem;
    li {
      line-height: 0.3rem;
      font-size: .14rem;
      /* border-bottom: .01rem solid #CCC; */
    }
  }
}
</style>
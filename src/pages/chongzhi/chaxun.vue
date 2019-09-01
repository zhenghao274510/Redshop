<template>
  <div class="box">
    <input type="text" placeholder="请输入卡号" />
    <input type="text" placeholder="请输入密码" />
    <input type="button" value="查询" class="btn" @click="getmsg" />
  </div>
</template>
 
<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
    getmsg() {
      Dialog.alert({
        message: "弹窗内容"
      }).then(() => {
        // on close
      });
    }
  },
  moutend() {}
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
  }
  .btn {
    background-color: #72bb29;
    color: #fff;
    margin-top: 1.2rem;
  }
}
</style>
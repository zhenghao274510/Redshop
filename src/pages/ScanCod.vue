<template>
  <div class>
    <!-- <button @click="sys_click">点击</button> -->
  </div>
</template>
 
<script>
import up from '@/mixins/upfile'
export default {
  data() {
    return {
      result: ""
    };
  },
  methods: {
    sys_click(data) {
      wx.config({
        // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        debug: false,
        // 必填，公众号的唯一标识
        appId: data.appId,
        // 必填，生成签名的时间戳
        timestamp: data.timestamp,
        // 必填，生成签名的随机串
        nonceStr: data.nonceStr,
        // 必填，签名
        signature: data.signature,
        // 必填，需要使用的JS接口列表，所有JS接口列表
        jsApiList: ["checkJsApi", "scanQRCode"]
      });
      wx.error(function(res) {
        alert("出错了：" + res.errMsg); //这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
      });

      wx.ready(function() {
        wx.checkJsApi({
          jsApiList: ["scanQRCode"],
          success: function(res) {}
        });
        const that=this;

        wx.scanQRCode({
          needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
          scanType: ["qrCode"], // 可以指定扫二维码还是一维码，默认二者都有
          success: function(res) {
            that.result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
            
            that.$router.replace({path:'/bind',query:{qrCode:that.result}})   //因为我这边是扫描后有个链接，然后跳转到该页面
          }
        });
      });
    }
  },

  moutend() {
    this.url = this.$route.query.url;
    up.post(this.url).then(res => {
      let data = res.data;
      this.sys_click(data);
    });
  }
};
</script>
 
<style scoped lang = "less">
</style>


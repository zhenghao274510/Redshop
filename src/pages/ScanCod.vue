<template>
  <div class>
    <button @click="sys_click">点击</button>
  </div>
</template>
 
<script>
// import up from "@/mixins/upfile";
export default {
  data() {
    return {
      result: "",
      url: ""
    };
  },
  methods: {
    sys_click() {
      // console.log(this.url);
      this.url='https://m.anxihtx.com/wineshop/api/wxLogin?type=1';
      //  this.url = location.href.split('#')[0];

      this.post(this.url).then(res => {
        console.log(res);
        var data = res.data;
        // let that = this;
        wx.config({
          // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          debug: true,
          // 必填，公众号的唯一标识
          appId: data.appId,
          // 必填，生成签名的时间戳
          timestamp: data.timestamp,
          // 必填，生成签名的随机串
          nonceStr: data.noncestr,
          // 必填，签名
          signature: data.signature,
          // 必填，需要使用的JS接口列表，所有JS接口列表
          jsApiList: ["checkJsApi", "scanQRCode"]
        });
        wx.error(function(res) {
          alert("出错了：" + res.errMsg); //这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
        });

        wx.ready(function() {
          wx.scanQRCode({
            needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
            success: function(res) {
              var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
              console.console.log(result);

              that.$router.replace({
                path: "/bind",
                query: { qrCode: result }
              }); //因为我这边是扫描后有个链接，然后跳转到该页面
            }
          });
        });
        wx.error(function(res) {
          alert(res);
        });
      });
    }
  },
  created() {
  
  },
  moutend() {
    this.url = this.$route.query.url;
  }
};
</script>
 
<style scoped lang = "less">
</style>


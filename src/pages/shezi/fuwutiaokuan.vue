<template>
  <div class="leet">
    <div class="cont">
      <p>欢迎您与各我方平台经营者（详见定义条款）共同签署本《用户服务协议》（下称“本协议”）并使用我方平台服务!</p>
      <p>各条款标题仅为帮助您理解该条款表达的主旨之用，不影响或限制本协议条款的含义或解释。为维护您自身权益，建议您仔细阅读各条款具体表述。</p>
      <p>
        【审慎阅读】 您在申请注册流程中点击同意本协议之前，应当认真阅读本协议。 请您务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款、法律适用和争议解决条款。免除或者限制责任的条款将以粗体下划线标识，您应重点阅读。 如您对协议有任何疑问，可向我方平台客服咨询。
        【签约动作】 当您按照注册页面提示填写信息、阅读并同意本协议且完成全部注册程序后，即表示您已充分阅读、理解并接受本协议的全部内容，并与我方平台网站达成一致，成为优酷网或我方平台“用户”。 阅读本协议的过程中，如果您不同意本协议或其中任何条款约定，您应立即停止注册程序。
        如果您未申请注册流程，您仍可浏览网站内容，但不能发表评论、弹幕或观看付费内容。
        如果您在本协议生效前已成为我方平台的注册用户，则您通过访问和/或使用我方平台网站，即视为您表示同意接受本协议的全部内容，否则请您不要访问或使用我方平台网站。
        1. 定义
        我方平台： 指包括优酷网（域名为 youku.com）、土豆网（域名为tudou.com）、来疯网（域名为laifeng.com）、来玩网（域名为laiwantv.com）、搜库网（域名为soku.com）等网站、优酷视频开放平台及我方提供内容服务的互联网电视业务平台（含优酷与互联网电视播控集成机构和互联网电视内容牌照方合作的平台和与智能电视厂商合作的平台）和相关客户端（包括不限于大屏端、移动端APP、APK、SDK、API等方式）及我方和我方从事互联网视频、移动端和互联网电视内容服务的关联公司所控制、管理的媒资管理系统、CDN、服务器等及未来我方拥有、占有、使用和运营的平台。如我方关联公司（范围详见定义部分）的产品或服务中使用了我方平台提供的产品或服务，但未设独立法律声明及隐私权政策的，则本政策同样适用于该部分产品或服务。
        我方： 我方平台经营者的单称或合称，包括优酷网经营者优酷信息技术（北京）有限公司（原“合一信息技术（北京）有限公司”）、优酷网络技术（北京）有限公司、土豆网经营者上海全土豆文化传播有限公司、土豆（中国）广告有限公司、及其提供互联网视频服务、移动端视频服务和互联网电视大屏端内容和技术服务的关联公司浙江天猫技术有限公司等。
        我方平台服务： 我方基于互联网，以包含我方平台网站、客户端（含APP\APK\SDK\API方式）、内容分发、信息网络传播、网络直播、互联网电视业务等方式在内的各种形态（包括未来技术发展出现的新的服务形态）向您提供的各项服务。
        我方平台规则： 包括在所有我方平台网站内已经发布及后续发布的全部规则、用户服务协议、解读、公告等内容以及各平台在频道、活动页面、帮助中心等发布的各类规则、实施细则、产品说明、公告等。
        同一用户： 使用同一身份认证信息或经我方平台排查认定多个用户账户的实际控制人为同一人的，均视为同一用户。
      </p>
    </div>
    <div class="btn" @click="back">关闭</div>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
export default {
  data() {
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    let parmas={cmd:'serviceContent'};
    this.postRequest(parmas).then(res=>{
      console.log(res)
    })
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {
    back(){
      this.$router.go(-1);
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
.leet {
  width: 100%;
  .cont {
    padding: 0.22rem 0.24rem 0 0.17rem;
    margin-top: 0.5rem;
    height: 3.98rem;
    overflow-y: auto;
    p {
      line-height: 0.35rem;
      font-size: 0.13rem;
      text-align: left;
      margin-bottom: 0.18rem;
      letter-spacing: -20;
    }
  }
  .btn {
    height: 0.44rem;
    margin: 0 auto;
    margin-top: 1.01rem;
    background-color: #72bb29;
    font-size: 0.18rem;
    line-height: 0.44rem;
    text-align: center;
    color: #fff;
    width: 3.45rem;
  }
}
</style>
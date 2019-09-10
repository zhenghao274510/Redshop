<template>
  <div class='box'>
     
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  data() {
    return {
       code:'',
       winUrl:''
    };
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
  if(localStorage.getItem('uid')){
    this.$router.replace('/home');
  }else{
     this.getCode();
  }
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  //方法集合
  methods: {
    getCode () { // 非静默授权，第一次有弹框
                this.code = ''
                var local = 'http://hetianxia.lixinapp.com/wineshop/api/gzh/callBack?type=0' // 获取页面url
                var appid = 'wxa19835dcd8e30551' ;
                 this.uid=this.getUrlCode().uid;
                this.code = this.getUrlCode().code // 截取code
                if (this.uid == null || this.uid === '') { // 如果没有code，则去请求
                    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(local)}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`
                } else {
                    // 你自己的业务逻辑
                 
                  localStorage.setItem('uid',this.uid);
                   this.type=this.getUrlCode().type;
                   if(this.type==0){
                  
                 }

                }
                //  this.$router.replace('/home');
            },
getUrlCode() { // 截取url中的code方法

                var url = location.search
                this.winUrl = url
                var theRequest = new Object();
                if (url.indexOf("?") != -1) {
                    var str = url.substr(1)
                    var strs = str.split("&")
                    for(var i = 0; i < strs.length; i ++) {
                        theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
                    }
                }
                return  theRequest;
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
  activated() {},
}
</script>
<style scoped>

</style>
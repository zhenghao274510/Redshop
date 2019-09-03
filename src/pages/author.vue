<template>
  <div>授权中。。。</div>
</template>
 
<script>
export default {
  data() {
    return {
      token: ""
    };
  },
  computed: {},
  created() {
    this.token = window.localStorage.getItem("user_token");
    //判断当前的url有没有token参数,如果不存在那就跳转到微信授权的url
    //就是前面说的ReturnGetCodeUrl方法

    if (!GetQueryString("token")) {
      this.ReturnGetCodeUrl();
    } else {
      //如果有token，如http://www.xxxx.com/h5/author?token=xxxxxxxxx&msg=200，这里的参数就是后台重定向到前台http://www.xxxx.com/h5/author，并携带的参数。这样就可以拿到我们想要的token了
      //判断一下后台返回的状态码msg，因为可能出现微信拿不到token的情况
      let msg = GetQueryString("msg");
      if ((msg = 200)) {
        this.token = GetQueryString("token");
        //存储token到本地
        window.localStorage.setItem("user_token", this.token);
        //获取beforeLoginUrl，我们的前端页面
        let url = window.localStorage.getItem("beforeLoginUrl");
        //跳转
        this.$router.push(url);
        //删除本地beforeLoginUrl
        removeLocalStorage("beforeLoginUrl");
      } else {
        //msg不是200的情况，可能跳到404的错误页面
      }
    }
  },
  methods: {
    async ReturnGetCodeUrl() {
      let { data } = await getWxAuth({});
      if (data.status == 200) {
        window.location.href = data.url;
      }
    }
  },
  watch: {},

  components: {},

  mounted: function() {}
};
</script>
<style lang='less' scoped>
</style>
 
// router.beforeEach((to, from, next) => {
//       //   第一次进入项目
//       let token = window.localStorage.getItem("user_token");
      
//       if (!token && to.path != "/author") {
//         window.localStorage.setItem("beforeLoginUrl", to.fullPath); // 保存用户进入的url
//         next("/author");
//         return false;
//       } else if (token && !store.getters.userInfo) {
//       //获取用户信息接口
//         store
//           .dispatch("GetUserInfo", {
//             user_token: token
//           })
//           .catch(err => {
//             window.localStorage.removeItem("user_token");
//             router.go(0);
//             return false;
//           });
//       }
//       next();
// }
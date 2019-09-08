// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import wx from 'weixin-js-sdk';
// import wechatAuth from './mixins/wechatAuth'//微信登录插件
// const qs= require('qs');

// Vue.use(wechatAuth, {appid: XXXXXXXXX});
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/vuex'
import mixins from './mixins'
// import {pathway} from './mixins/img'
Vue.mixin(mixins)
import Vant from 'vant';
import 'vant/lib/index.css';
import Toast from 'vant'
Vue.use(Vant);

import {
  Lazyload
} from 'vant';
Vue.use(Lazyload, {
  error: '/static/test/error.png',
  loading: '/static/test/replace.png',
  attempt: 3
})
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: 'a8e3f1d526511281bac2edf977a6ca03',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch','AMap.Geolocation', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType',
    'AMap.PolyEditor', 'AMap.CircleEditor'
  ],
  v: '1.4.4'
})
router.beforeEach((to, from, next) => { 
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (JSON.parse(localStorage.getItem("user"))) {
      next();
    } else {
      // 请求授权 获取用户信息

      next({
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next();
  }
});


// router.beforeEach((to, from, next) => {
//   //   第一次进入项目
//   let token = window.localStorage.getItem("user_token");
  
//   if (!token && to.path != "/author") {
//     window.localStorage.setItem("beforeLoginUrl", to.fullPath); // 保存用户进入的url
//     next("/author");
//     return false;
//   } else if (token && !store.getters.userInfo) {
//   //获取用户信息接口
//     store
//       .dispatch("GetUserInfo", {
//         user_token: token
//       })
//       .catch(err => {
//         window.localStorage.removeItem("user_token");
//         router.go(0);
//         return false;
//       });
//   }
//   next();
// });

Vue.directive('focus',{
  inserted(el){
      el.focus();
  }
  })
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

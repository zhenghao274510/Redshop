// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/vuex'
//  vant
import Vant from 'vant';
import 'vant/lib/index.css';
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
  key: 'b7bcfbed3a21318b8920fb9cca39be52',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch','AMap.Geolocation', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType',
    'AMap.PolyEditor', 'AMap.CircleEditor'
  ],
  v: '1.4.4'
})
// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//     if (JSON.parse(localStorage.getItem("user"))) {
//       next();
//     } else {
//       // 请求授权 获取用户信息

//       next({
//         query: {
//           redirect: to.fullPath
//         }
//       })
//     }
//   } else {
//     next();
//   }
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

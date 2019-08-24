import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
      path: '/',
      component: resolve => require(['./../pages/home/home.vue'], resolve),
      meta: {
        showtabar: true
      }
    },
    // 首页
    {
      path: '/home',
      component: resolve => require(['./../pages/home/home.vue'], resolve),
      meta: {
        showtabar: true
      }
    },
    //  分类
    {
      path: '/classification',
      component: resolve => require(['./../pages/classification/classification.vue'], resolve),
      meta: {
        showtabar: true
      }
    },
    //   购物车
    {
      path: '/shopcar',
      component: resolve => require(['./../pages/shopcar/shopcar.vue'], resolve),
      meta: {
        showtabar: true
      }
    },
    //  我的
    {
      path: '/mine',
      component: resolve => require(['./../pages/mine/mine.vue'], resolve),
      meta: {
        showtabar: true
      }
    },
    // 我的订单
    {
      path: '/order',
      component: resolve => require(['./../pages/order/order.vue'], resolve),
      children: [{
          path: 'waitepay',
          component: resolve => require(['./../pages/order/child/waitepay.vue'], resolve)
        },
        {
          path: 'waitesong',
          component: resolve => require(['./../pages/order/child/waitesong.vue'], resolve)
        },
        {
          path: 'waiteping',
          component: resolve => require(['./../pages/order/child/waiteping.vue'], resolve)
        },
        {
          path: 'tui',
          component: resolve => require(['./../pages/order/child/tui.vue'], resolve)
        },
        {
          path: 'peing',
          component: resolve => require(['./../pages/order/child/peing.vue'], resolve)
        },
        {
          path: 'all',
          component: resolve => require(['./../pages/order/child/all.vue'], resolve)
        },
        {
          path: '/',
          component: resolve => require(['./../pages/order/child/all.vue'], resolve)
        }


      ]
    },
    // 商品
    {
      path: '/shoplist',
      component: resolve => require(['./../pages/shoplist/shoplist.vue'], resolve)
    },
    // 礼品卡
    {
      path: '/giftcard',
      component: resolve => require(['./../pages/giftcard/giftcard.vue'], resolve)
    }, , // 充值卡
    {
      path: '/chongzhi',
      component: resolve => require(['./../pages/chongzhi/chongzhi.vue'], resolve)
    },
    // 商品详情
    {
      path: '/shopdetails',
      component: resolve => require(['./../pages/shopdetails/shopdetails.vue'], resolve)
    }, , // 个人资料
    {
      path: '/mineself',
      component: resolve => require(['./../pages/mineself/mineself.vue'], resolve)

    }, // kefu
    {
      path: '/service',
      component: resolve => require(['./../pages/service/service.vue'], resolve)
    }, // pingjia
    {
      path: '/evaluation',
      component: resolve => require(['./../pages/evaluation/evaluation.vue'], resolve)
    }, // 收藏
    {
      path: '/shoucang',
      component: resolve => require(['./../pages/shoucang/shoucang.vue'], resolve)
    }, // dingdanxiangqing
    {
      path: '/orderdetails',
      component: resolve => require(['./../pages/orderdetails/orderdetails.vue'], resolve)
    },
    // 礼品卡详情
    {
      path: '/giftcardetails',
      component: resolve => require(['./../pages/giftcardetails/giftcardetails.vue'], resolve)
    },
    // 設置
    {
      path: '/shezi',
      component: resolve => require(['./../pages/shezi/shezi.vue'], resolve)
    },
    // 常见问题
    {
      path: '/changjian',
      component: resolve => require(['./../pages/shezi/changjian.vue'], resolve)
    },
    // 服务条款
    {
      path: '/fuwutiaokuan',
      component: resolve => require(['./../pages/shezi/fuwutiaokuan.vue'], resolve)
    },
    // 意见反馈
    {
      path: '/yijian',
      component: resolve => require(['./../pages/shezi/yijian.vue'], resolve)
    },
    // 去评价
    {
      path: '/addpingjia',
      component: resolve => require(['./../pages/evaluation/addpingjia.vue'], resolve)
    },
    // 定位
    {
      path: '/positions',
      component: resolve => require(['./../pages/positions/positions.vue'], resolve)
    },
    // 定位
    {
      path: '/myaddress',
      component: resolve => require(['./../pages/orderdetails/myaddress.vue'], resolve)
    },
    // 支付成功
    {
      path: '/success',
      component: resolve => require(['./../components/public/success.vue'], resolve)
    },
    // 支付成功
    {
      path: '/editaddress',
      component: resolve => require(['./../pages/orderdetails/editaddress.vue'], resolve)
    }
  ]
})

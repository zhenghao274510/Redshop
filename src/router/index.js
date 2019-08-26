import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
      path: '/',
     redirect:'/home'
    },
    // 首页
    {
      path: '/home',
      name:"首页",
      component: resolve => require(['./../pages/home/home.vue'], resolve),
      meta: {
        showtabar: true
      }
    },
    //  分类
    {
      path: '/classification',
      name:"商品分类",
      component: resolve => require(['./../pages/classification/classification.vue'], resolve),
      meta: {
        showtabar: true
      }
    },
    //   购物车
    {
      path: '/shopcar',
      name:"购物车",
      component: resolve => require(['./../pages/shopcar/shopcar.vue'], resolve),
      meta: {
        showtabar: true,
        requireAuth: true,
      }
    },
    //  我的
    {
      path: '/mine',
      name:"我的",
      component: resolve => require(['./../pages/mine/mine.vue'], resolve),
      meta: {
        showtabar: true
      }
    },
    // 我的订单
    {
      path: '/order',
      name:"我的订单",
      component: resolve => require(['./../pages/order/order.vue'], resolve),
      meta:{
        requireAuth: true
      }
      // ,
      // children: [{
      //     path: 'waitepay',
      //     component: resolve => require(['./../pages/order/child/waitepay.vue'], resolve)
      //   },
      //   {
      //     path: 'waitesong',
      //     component: resolve => require(['./../pages/order/child/waitesong.vue'], resolve)
      //   },
      //   {
      //     path: 'waiteping',
      //     component: resolve => require(['./../pages/order/child/waiteping.vue'], resolve)
      //   },
      //   {
      //     path: 'tui',
      //     component: resolve => require(['./../pages/order/child/tui.vue'], resolve)
      //   },
      //   {
      //     path: 'peing',
      //     component: resolve => require(['./../pages/order/child/peing.vue'], resolve)
      //   },
      //   {
      //     path: 'all',
      //     component: resolve => require(['./../pages/order/child/all.vue'], resolve)
      //   }


      // ]
    },
    // 商品
    {
      path: '/shoplist',
      name:"商品",
      component: resolve => require(['./../pages/shoplist/shoplist.vue'], resolve)
    },
    // 礼品卡
    {
      path: '/giftcard',
      name:"礼品卡",
      component: resolve => require(['./../pages/giftcard/giftcard.vue'], resolve),
      meta:{
        requireAuth: true
      }
    }, , // 充值卡
    {
      path: '/chongzhi',
      name:"充值卡",
      component: resolve => require(['./../pages/chongzhi/chongzhi.vue'], resolve),
      meta:{
        requireAuth: true
      }
    },
    // 商品详情
    {
      path: '/shopdetails',
      name:"商品详情",
      component: resolve => require(['./../pages/shopdetails/shopdetails.vue'], resolve)
    }, 
     // 个人资料
    {
      path: '/mineself',
      name:"个人资料",
      component: resolve => require(['./../pages/mineself/mineself.vue'], resolve),
      meta:{
        requireAuth: true
      }
    }, // kefu
    {
      path: '/service',
      name:"客服",
      component: resolve => require(['./../pages/service/service.vue'], resolve)
    }, // pingjia
    {
      path: '/evaluation',
      name:"评价",
      component: resolve => require(['./../pages/evaluation/evaluation.vue'], resolve)
    }, // 收藏
    {
      path: '/shoucang',
      name:"收藏",
      component: resolve => require(['./../pages/shoucang/shoucang.vue'], resolve),
      meta:{
        requireAuth: true
      },
    }, // dingdanxiangqing
    {
      path: '/orderdetails',
      name:"订单详情",
      component: resolve => require(['./../pages/orderdetails/orderdetails.vue'], resolve)
    },
    // 礼品卡详情
    {
      path: '/giftcardetails',
      name:"礼品卡详情",
      component: resolve => require(['./../pages/giftcardetails/giftcardetails.vue'], resolve)
    },
    // 分享
    {
      path: '/share',
      name:"分享图片",
      component: resolve => require(['./../pages/giftcardetails/share.vue'], resolve)
    },
    // 設置
    {
      path: '/shezi',
      name:"設置",
      component: resolve => require(['./../pages/shezi/shezi.vue'], resolve)
    },
    // 常见问题
    {
      path: '/changjian',
      name:"常见问题",
      component: resolve => require(['./../pages/shezi/changjian.vue'], resolve)
    },
    // 服务条款
    {
      path: '/fuwutiaokuan',
      name:"服务条款",
      component: resolve => require(['./../pages/shezi/fuwutiaokuan.vue'], resolve)
    },
    // 意见反馈
    {
      path: '/yijian',
      name:"意见反馈",
      component: resolve => require(['./../pages/shezi/yijian.vue'], resolve)
    },
    // 去评价
    {
      path: '/addpingjia',
      name:"去评价",
      component: resolve => require(['./../pages/evaluation/addpingjia.vue'], resolve)
    },
    // 定位
    {
      path: '/positions',
      name:"定位",
      component: resolve => require(['./../pages/positions/positions.vue'], resolve)
    },
    // 我的地址
    {
      path: '/myaddress',
      name:"我的地址",
      component: resolve => require(['./../pages/orderdetails/myaddress.vue'], resolve)
    },
    // 支付成功
    {
      path: '/success',
      name:"支付成功",
      component: resolve => require(['./../components/public/success.vue'], resolve)
    },
    // 编辑地址
    {
      path: '/editaddress',
      name:"编辑地址",
      component: resolve => require(['./../pages/orderdetails/editaddress.vue'], resolve)
    }
  ]
})

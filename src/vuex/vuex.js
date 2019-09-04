import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    //首页  tarba
    home: {
      TB: 0
    },

    // 购物车数据
    carinfo: {
      chose: true
    },
    //  用户信息
    Use: {
      uid: ''
    },
    Shop: {},
    //  立即购买
    Buy: {},
    useAddres: {},
    orderDetails: {}
  },
  mutations: {
    //修改tarba
    ChangeTabar(state, val) {
      state.home.TB = val;
    },
    ChooseShop(state, val) {
      state.Shop = val;
    },
    //  立即购买
    BuyShop(state, val) {
      state.Buy = val;
    },
    AddAdress(state, val) {
      state.useAddres = val;
    },
    orderDetails(state, val) {
      state.orderDetails = val;
    }
  },
  getters() {

  },
  actions() {

  }
})
export default store

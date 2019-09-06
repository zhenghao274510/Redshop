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
    carinfo: [],
  
    //  用户信息
    Use: {
      uid: ''
    },
    Shop: {},
    //  立即购买
    Buy: {},
    useAddres: {},
    orderDetails: {},
    ShopPingJia:[],
    gifCradInfo:{},
    gifCradDetails:[],
    isLoading:true,
    SearchList:[]
  },
  mutations: {
    // 刷新保存state数据
    SaveData(state,val){
       state=val;
    },
    //修改tarba
    ChangeTabar(state, val) {
      state.home.TB = val;
    },
    ChooseShop(state, val) {
      state.Shop = val;
    },
    //  立即购买
    BuyShop(state, val) {
      state.Buy=val;
    },
    AddAdress(state, val) {
      state.useAddres = val;
    },
    orderDetails(state, val) {
      state.orderDetails = val;
    },
    LookCarinfo(state,val){
          state.carinfo=val;
    },
    addPingJia(state,val){
      state.ShopPingJia=val;
    },
    LookGifcard(state,val){
      state.gifCradInfo=val;
    },
    LookGifcardDetails(state,val){
      state.gifCradDetails=val;
    },
    DelCar(state,val){
      state.carinfo.splice(val,1);
    },
    SearStar(state,val){
      state.SearchList=val;
    }
  },
  getters() {

  },
  actions() {

  }
})
export default store

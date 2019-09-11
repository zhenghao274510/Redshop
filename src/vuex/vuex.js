import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    //   导航 选中
   tarba:0,
   ordertabar:0,
   Classtarta:0,

    useAddres: {},
    SearchList:[]
  },
  mutations: {
    // 刷新保存state数据
    SaveData(state,val){
       state=val;
    },
  
  
    AddAdress(state, val) {
      state.useAddres = val;
    },


    SearStar(state,val){
      state.SearchList=val;
    },
    ChangeTabar(state,val){
      state.tarba=val;
    },
    ChangeOrdertabar(state,val){
      state.ordertabar=val;
    },
    ChangeClassTatar(state,val){
      state.Classtarta=val;
    }

  },
  getters() {

  },
  actions() {

  }
})
export default store

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    isLoad:false,

  
    //  用户信息
    Use: {
      uid: ''
    },
    

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

  },
  getters() {

  },
  actions() {

  }
})
export default store

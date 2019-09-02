import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store=new Vuex.Store({
    state:{
      //首页  tarba
      home:{
         TB:0
      },

      // 购物车数据
      carinfo:{
         chose:true
      },
      //  用户信息
      useinfo:{
        uid:''
      }
    },
    mutations:{
      //修改tarba
      ChangeTabar(state,val){
        state.home.TB=val;
      },
      ChangeBack(state,val){
        state.home.TB-=val;
      }
    },
    getters(){

    },
    actions(){

    }
})
export default store
<template>
  <div class="order_box">
    <!-- <ul class="order_nav">
      <li v-for="(item,index) in navinfo" :key="index" @click="changeta(index)">
        <router-link :to="item.url">
          <span :class="{'active':num==index}">{{item.tit}}</span>
        </router-link>
      </li>
    </ul>
    <router-view></router-view>-->
    <div style="margin-top:.5rem">
      <van-tabs v-model="active" swipeable  animated>
        <van-tab v-for="(item,index) in navinfo" :key="index" :title="item.tit" class="'bor':active==index"><Mo :come="active" ></Mo></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import Mo from './child/model'
export default {
  data() {
    return {
      active: 4,
      navinfo: [
        { tit: "全部", },
        { tit: "待付款"},
        { tit: "待配送" },
        { tit: "配送中" },
        { tit: "待评价" },
        { tit: "退款售后"}
      ],
      dataList:[],
      dataObject:{}
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {
    Mo
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
     // this.id =this.$route.query.id;
     this.id =this.$route.query.id;
    let params={cmd:'myOrder',uid:"1",nowPage:"1",pageCount:"10"}
    this.postRequest(params).then(res=>{
         console.log(res)
         if(res.data.result==0){
           this.dataList=res.data.dataList;
         }
    })
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.active=Number(this.$route.params.ShopId);
  },
  //方法集合
  methods: {
    changeta(ind) {
      this.num = ind;
    }
  },
  //生命周期 - 创建之前
  beforeCreate() {},
  //生命周期 - 挂载之前
  beforeMount() {},
  //生命周期 - 更新之前
  beforeUpdate() {},
  //生命周期 - 更新之后
  updated() {},
  //生命周期 - 销毁之前
  beforeDestroy() {},
  //生命周期 - 销毁完成
  destroyed() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {}
};
</script>
<style scoped lang='less' rel='stylesheet/stylus'>
/deep/ .van-tabs__wrap--scrollable .van-tab{
  flex: 1;
}
/deep/.van-ellipsis{
text-overflow: inherit;
}
/deep/.van-tab{
  text-align: center;
  padding: 0;
}
//  .bor {
//         border-bottom: 0.02rem solid #72bb29;
//         color: #72bb29;
//       }
.order_box {
  width: 100%;
  height: 100%;
  background-color: #eee;
  overflow-y: auto;
}
.order_nav {
  position: fixed;
  top: 0.5rem;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0;
  padding: 0 0.1rem;
  li {
    flex: 1;
    a {
      display: block;
      height: 0.44rem;
      text-align: center;
      font-size: 0.14rem;
      font-weight: 500;
      span {
        padding-bottom: 0.12rem;
        color: #333;
        height: 0.44rem;
        line-height: 0.44rem;
        font-size: 0.14rem;
        font-weight: 500;
      }
      .bor {
        border-bottom: 0.02rem solid #72bb29;
        color: #72bb29;
      }
    }
  }
}
</style>
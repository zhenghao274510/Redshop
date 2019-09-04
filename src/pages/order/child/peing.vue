<template>
  <div class="order_mo">
    <div class="order_con" v-for="(item,index) in list" :key="index" @click="LookDetails(item)">
      <div class="order_tit">
        <span>
          订单编号：
          <i>{{item.orderid}}</i>
        </span>
        <em>配送中</em>
      </div>
      <Info :list="item.orderItem"></Info>
      <div class="order_tot" >共{{item.orerItem.length}}件商品&nbsp;&nbsp;&nbsp;&nbsp; 合计￥{{item.orderAmount}}</div>
      <div class="order_zhuang">
        <span class="two"  @click="shou_huo">确认收货</span>
      </div>
    </div>
    <van-overlay :show="show" @click="show = false" />
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import Info from "./carIfo";
import { Dialog } from "vant";
export default {
  props:['list'],
    // props:{
    //   list:{
    //      type:Array,
    //      default:[]
    //   }
    // },
  data() {
    return {
      show: false,
      dataList:[]
    };
  },
  //监听属性 类似于data概念
  computed: {
  },
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {
    Info
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
 mounted() {
   this.list=[];
     let params = { cmd: "myOrder", uid: "1", nowPage: "1", pageCount: "10" };
    this.postRequest(params).then(res => {     
      if (res.data.result == 0) {
        this.dataList = res.data.dataList;
        console.log(this.dataList,typeof this.list);
       
        this.dataList.forEach(item=>{
          let e=parseInt(item.status);
            if(e==3){
               this.list.push(item);
            }
        })
         console.log(this.list)
      }
     
    });
  },
  //方法集合
  methods: {
    goto() {
      this.$router.push("/addpingjia");
    },
    shou_huo() {
      Dialog.confirm({
        title: "确认收货成功",
        message: "赶快去评论一下~"
      })
        .then(() => {
          this.$router.push("/addpingjia");
        })
        .catch(() => {
          // on cancel
        });
    },
      LookDetails(e){
      this.$store.commit('orderDetails',e);
      this.$router.push('/orderdetails');
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
.order_mo {
  padding: 0.15rem;
  width: 100%;
  margin-top: .1rem;
  .order_con {
     margin-bottom: .1rem;
    // font-size: 0;
    background-color: #ffffff;
    border-radius: 0.1rem;
    .order_tit {
      padding: 0 0.15rem;
      height: 0.44rem;
      border-bottom: 0.01rem solid #e5e5e5;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.13rem;
      span {
        display: block;
        color: #999999;
      }
      em {
        display: block;
        color: #72bb29;
      }
    }
    .order_tot {
      padding: 0 0.15rem 0.15rem 0;
      font-size: 0.14rem;
      color: #333333;
      text-align: right;
    }
    .order_zhuang {
      height: 0.58rem;
      border-top: 0.01rem solid #e5e5e5;
      padding-right: 0.15rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      span {
        display: block;
        width: 0.77rem;
        height: 0.28rem;
        line-height: 0.28rem;
        font-size: 0.15rem;
        border-radius: 0.05rem;
        text-align: center;
      }
      .one {
        border: 0.01rem solid #666666;
      }
      .two {
        border: 0.01rem solid #72bb29;
        color: #72bb29;
        margin-left: 0.15rem;
      }
    }
  }
}
</style>
<template>
  <div class="order_con">
    <!-- 退款 -->
    <tui-h v-if="tuiH!=''" :list="tuiH"></tui-h>
    <!-- 配送中 -->
    <peing-sing v-if="peingSing!=''" :list="peingSing"></peing-sing>
    <!-- 待配送 -->
    <waite-song v-if="waiteSong!=''" :list="waiteSong"></waite-song>
    <!-- 待评价 -->
    <waite-ping v-if="waitePing!=''" :list="waitePing"></waite-ping>
    <!-- 待付款 -->
    <waite-pay v-if="waitePay!=''" :list="waitePay"></waite-pay>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import tuiH from "./tui";
import peingSing from "./peing";
import waitePay from "./waitepay";
import waiteSong from "./waitesong";
import waitePing from "./waiteping";
export default {
  data() {
    return {
      uid:'',
      dataList:[],
      tuiH:[],
      peingSing:[],
      waitePay:[],
      waitePing:[],
      waiteSong:[]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {
    tuiH,
    peingSing,
    waitePay,
    waiteSong,
    waitePing
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // this.uid=this.$store.Use.uid;
    let params = { cmd: "myOrder", uid: "1", nowPage: "1", pageCount: "10" };
    this.postRequest(params).then(res => {
      console.log(res);
      
      if (res.data.result == 0) {
        this.dataList = res.data.dataList;
        console.log(this.dataList);
        this.dataList.forEach(item=>{
          let _this=this;
          let e=item.status;
          let p=item.isComment;
          if(e==3&&p==0){
              _this.waitePing.push(item);
          }else if(e==0){
             _this.waitePay.push(item);
          }else if(e==1){
             _this.waiteSong.push(item);
          }else if(e==4){
            _this.tuiH.push(item);
          }else{
             _this.peingSing.push(item);
          }
        })
      }
     
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {},
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
.order_con {
  padding: 0.1rem 0.15rem 0 0.15rem;
}
</style>
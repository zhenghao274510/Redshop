<template>
  <div class="order_con">
    <!-- 待付款 -->
    <waite-pay v-if="waitePay.length!=0" :list="waitePay"></waite-pay>
    <!-- 配送中 -->
    <peing-sing v-if="peingSoing.length!=0" :list="peingSoing"></peing-sing>
    <!-- 待配送 -->
    <waite-song v-if="waiteSong.length!=0" :list="waiteSong"></waite-song>
    <!-- 待评价 -->
    <waite-ping v-if="waitePing.length!=0" :list="waitePing"></waite-ping>
    <!-- 退款 -->
    <tui-h v-if="tuiH.length!=0" :list="tuiH"></tui-h>

    <!-- 已完成 -->
    <finish v-if="finish.length!=0" :list="finish"></finish>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import tuiH from "./tui";
import peingSing from "./peing";
import waitePay from "./waitepay";
import waiteSong from "./waitesong";
import waitePing from "./waiteping";
import finish from "./finish";
export default {
  data() {
    return {
      uid: "",
      dataList: [],
      tuiH: [],
      peingSoing: [],
      waitePay: [],
      waitePing: [],
      waiteSong: [],
      finish: []
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
    waitePing,
    finish
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.uid = localStorage.getItem("uid");
    let params = {
      cmd: "myOrder",
      uid: this.uid,
      nowPage: "1",
      pageCount: "10"
    };
    this.http(params).then(res => {
      console.log(res);

      if (res.data.result == 0) {
        this.dataList = res.data.dataList;
        // console.log(this.dataList);
        this.dataList.forEach(item => {
          // let _this=this;
          let e = item.status;
          let p = item.isComment;
          if (e == 0) {
            this.waitePay.push(item);
            console.log(this.waitePay);
          } else if (e == 3 && p == 0) {
            this.waitePing.push(item);
          } else if (e == 1) {
            this.waiteSong.push(item);
          } else if (e == 4) {
            this.tuiH.push(item);
          } else if (e == 3 && p == 1) {
            this.finish.push(item);
          } else {
            this.peingSoing.push(item);
          }
        });
      }
      console.log(this.tuiH.length);
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
  div {
    &:nth-child(1) {
      margin-top: 0.9rem;
    }
    margin-top: -0.1rem;
  }
}
</style>
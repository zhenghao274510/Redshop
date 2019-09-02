<template>
  <div class="box">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <sear></sear>

     
        <Shop-L :list="ProductList"></Shop-L>
     
    </van-pull-refresh>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import sear from "./../../components/public/search";
import ShopL from "./../../components/public/shangpin";
export default {
  data() {
    return {
      isLoading: false,
      ProductObject:{},
      ProductList:[]

    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {
    sear,
    ShopL
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    
      let parmas = { cmd: "productList",childCategoryId:3, nowPage: "1", pageCount: "10" };
    this.postRequest(parmas).then(res => {
      if (res.data.result == 0) {
        console.log(res);
        this.ProductObject = res.data;
        this.ProductList=res.data.dataList;
      }
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
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
.list_two {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 0.15rem;
}
</style>
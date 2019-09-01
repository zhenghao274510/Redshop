<template>
  <ul class="shop_o">
    <li class="shop_de" >
      <div class="shop_img" @click.prevent="goto">
        <img src="/static/test/replace.jpg" alt />
      </div>
      <div class="shop_info">
        <p class="shop_name">西班牙DO级红酒</p>
        <div class="shop_pir">
          <span>
            ￥
            <i>219</i>
          </span>
          <i class="shop_car" @click.prevent="addcar()"></i>
        </div>
      </div>
    </li>
    <li class="shop_de" >
      <div class="shop_img" @click.prevent="goto">
        <img src="/static/test/replace.jpg" alt />
      </div>
      <div class="shop_info">
        <p class="shop_name">西班牙DO级红酒</p>
        <div class="shop_pir">
          <span>
            ￥
            <i>219</i>
          </span>
          <i class="shop_car" @click.prevent="addcar()"></i>
        </div>
      </div>
    </li>
    <li class="shop_de" >
      <div class="shop_img" @click.prevent="goto">
        <img src="/static/test/replace.jpg" alt />
      </div>
      <div class="shop_info">
        <p class="shop_name">西班牙DO级红酒</p>
        <div class="shop_pir">
          <span>
            ￥
            <i>219</i>
          </span>
          <i class="shop_car" @click.prevent="addcar()"></i>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  props:{
     list:[],
     type:Array
  },
  data() {
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {
    goto() {
      this.$router.push("/shopdetails");
    },
    addcar() {
      let parmas={cmd:"addCart",uid:"",productId:'',skuId:'',count:''};
       this.postRequest(params).then(res=>{
         console.log(res)
      })
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
.shop_o {
  padding: 0 .075rem;
  overflow: hidden;
  li{
    width: 1.65rem;
    height: 2.18rem;
    border-radius: 0.1rem;
     z-index: 2;
     margin: .075rem;
     float: left;
     box-shadow: 0 0  .02rem .02rem rgba(34, 34, 34, 0.2);
     &:nth-child(2n){
       margin-right: 0;
     }
    .shop_img {
      width: 1.65rem;
      height: 1.5rem;
      border-radius: 0.1rem 0.1rem 0 0;
      padding: 0.23rem 0.29rem 0.06rem 0.18rem;
      img {
      }
    }
    .shop_info {
      width: 100%;
      padding: 0.1rem 0.08rem 0.1rem 0.1rem;
      display: flex;
      flex-direction: column;
      .shop_name {
        color: #333333;
        font-size: 0.14rem;
      }
      .shop_pir {
        font-size: 0.12rem;
        color: #ed670d;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.15rem;
        .shop_car {
          display: block;
          width: 0.19rem;
          height: 0.18rem;
          background: url("/static/icon/shangpin-gouwuche.png") no-repeat;
          background-size: 100% 100%;
          z-index: 99;
        }
      }
    }
  }
}
</style>
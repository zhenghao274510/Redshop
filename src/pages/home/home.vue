<template>
  <div class="box" 
  >
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">

    <!-- <Top title="商城"></Top> -->
    <sear></sear>
    <Zq></Zq>
    <Tui-Jan></Tui-Jan>
    </van-pull-refresh>
    <!-- 弹出层 -->

    <van-popup v-model="First" round>
      <div class="first_con" v-if="isGet">
        <img src="/static/icon/youye-youhuijuan.png" alt />
        <div class="first_info">
          <p class="ft_mid col_mid">-- 恭喜你获得 --</p>
          <p class="col_mix ft_max_mid">10元优惠券</p>
        </div>
        <div class="getJ ft_mid" @click="isGet=false">点击领取</div>
        <van-icon name="clear" color="#999999" size=".22rem" class="pos"  @click="First=false"/>
      </div>
      <div class="first_con" v-else style="padding:0 .39rem;">
        <div class="first_info">
          <p class="col_max ft_lg">恭喜您领取成功</p>
          <p class="ft_mid col_mid">有效期至2019-02-01</p>
        </div>
        <div class="getJ ft_mid" @click="First=false">确定</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import vuescroll from 'vuescroll/dist/vuescroll-slide';
import Top from "./../../components/public/heade";
import Zq from "./../../components/homec/hodong";
import TuiJan from "./../../components/homec/tuijian";
import sear from "./../../components/public/search";
export default {
  data() {
    return {
      First: true,
      isGet:true ,
      id:'',
      isLoading: false
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {
    Top,
    sear,
    Zq,
    TuiJan,
    vuescroll
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // this.id =this.$route.query.id;
    let params1={cmd:'firstPage'}
    this.postRequest(params1).then(res=>{
         console.log(res)
    })
     let parmas2={cmd:"toRecommend",nowPage:'',pageCount:'10'};
       this.postRequest(params2).then(res=>{
         console.log(res)
      })
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.$store.commit("ChangeTabar",Number(this.$route.params.ShopId))
    // console.log(this.$route.params.ShopId)
  },
  //方法集合
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
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
/deep/.van-popup--center {
  width: 2.8rem;
  // height: 2.57rem;
  padding: 0.19rem 0;
  .first_con {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    img {
      width: 1.34rem;
      height: 1.22rem;
    }

    .getJ {
      width: 1.28rem;
      height: 0.28rem;
      color: #fb560a;
      border: 0.01rem solid #fb560a;
      border-radius: 0.14rem;
      text-align: center;
      line-height: 0.28rem;
      margin-top: .25rem;
    }
    .pos {
      position: absolute;
      top: 0;
      right: 0.1rem;
    }
  }
}
.box{background-color: #FFF;}
</style>
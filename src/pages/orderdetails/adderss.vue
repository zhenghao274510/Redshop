<template>
  <div class='de_zhi pad bg_wh'>
      <span class="pos"></span>
      <div class="info col_mix no_use" v-if="no_use_dizhi">
        <p class="ft_mid">收货人：张一一 &nbsp; &nbsp; &nbsp;1971702129</p>
        <p class="ft_mix">收货地址：河南省郑州郑东新区商都世贸中心D座</p>
      </div>
      <div class="col_mix ft_mid no_use" v-else  @click="goto">
          请选择你的收货地址地址
      </div>
      <i class="back"></i>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  data() {
    return {
      no_use_dizhi:false
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  //方法集合
  methods: {
goto(){
  if(!this.no_use_dizhi){
     this.$router.push('/positions');
  }
  
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
  activated() {},
}
</script>
<style scoped lang='less' rel='stylesheet/stylus'>
.de_zhi{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: .79rem;
  .pos{
    width:.2rem;
    height: .2rem;
    background: url('/static/icon/dingdanxiangqing-dizhi.png')  no-repeat;
    background-size: 100% 100%;
    display: block;
    margin-right:.14rem; 
  }
 
  .back{
    display: block;
    width: .1rem;
    height: .17rem;
    background: url('/static/icon/dingdanxiangqing-jiantou.png') no-repeat;
    background-size: 100% 100%;
  }
  .no_use{
    flex: 1;
    p{
      line-height: .2rem;
    }
  }
  
}
</style>
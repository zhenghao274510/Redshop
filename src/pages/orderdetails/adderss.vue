<template>
  <div class="adres_cont">
    <div class="de_zhi pad bg_wh">
      <span class="pos"></span>
      <div class="info col_mix no_use" v-if="no_use_dizhi">
        <p class="ft_mid">收货人：张一一 &nbsp; &nbsp; &nbsp;1971702129</p>
        <p class="ft_mix">收货地址：河南省郑州郑东新区商都世贸中心D座</p>
      </div>
      <div class="col_mix ft_mid no_use" v-else @click="goto">请选择你的收货地址地址</div>
      <i class="back"></i>
    </div>
    <div class="change bo_top">
      <div class="change_left">
        <van-icon name="checked" size=".18rem" color="#72BB29" />
        <span>默认地址</span>
      </div>
      <div class="change_right">
        <div class="change_ac">
          <van-icon name="delete" size=".18rem" color="#999999" />
          <span>删除</span>
        </div>
        <div class="change_ac" @click="GoToEmid">
          <van-icon name="records" size=".18rem" color="#999999" />
          <span>编辑</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  data() {
    return {
      no_use_dizhi: false
    };
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
      if (!this.no_use_dizhi) {
        this.$router.push("/positions");
      }
    },
    GoToEmid(){

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
.adres_cont {

  .de_zhi {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.79rem;
    .pos {
      width: 0.2rem;
      height: 0.2rem;
      background: url("/static/icon/dingdanxiangqing-dizhi.png") no-repeat;
      background-size: 100% 100%;
      display: block;
      margin-right: 0.14rem;
    }

    .back {
      display: block;
      width: 0.1rem;
      height: 0.17rem;
      background: url("/static/icon/dingdanxiangqing-jiantou.png") no-repeat;
      background-size: 100% 100%;
    }
    .no_use {
      flex: 1;
      p {
        line-height: 0.2rem;
      }
    }
  }
  .change {
    display: flex;
    height: .45rem;
    padding: 0 0.15rem;
    justify-content: space-between;
    align-items: center;
    font-size: 0.13rem;
    background-color: #FFF;
    .change_left {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    span {
      display: block;
      margin-left: .1rem;
      color:#999999;
    }
    .change_right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .change_ac{
        display: flex;
        margin-right: 0.15rem;
      }
    }
  }
}
</style>
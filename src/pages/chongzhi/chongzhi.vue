<template>
  <div class='ch_zh_card'>
   <Top title="充值卡"></Top>
      <ul class="ch_zi_con">
        <li><router-link to=""><div class="one"></div><p>充值</p></router-link></li>
        <li><router-link to=""><div class="two"></div><p>充值记录</p></router-link></li>
        <li><router-link to=""><div class="three"></div><p>充值卡查询</p></router-link></li>
      </ul>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import Top from "./../../components/public/heade";
export default {
  data() {
    return {

    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {
Top
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  //方法集合
  methods: {

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
.ch_zh_card{
  width: 100%;
  .ch_zi_con{
    width: 100%;
    margin-top: .93rem;
    display: flex;
    justify-content: space-between;
    padding: 0 .45rem;
    li{
      height: 1.02rem;
     a{
      height: 1.02rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      div{
        width: .55rem;
        height: .55rem;
      }
      .one{
           background:url('/static/icon/chongzhika-chongzhi.png') center center no-repeat;
        background-size: 100% 100%;
      }
       .two{
           background:url('/static/icon/chongzhika-chongzijilu.png') center center no-repeat;
        background-size: 100% 100%;
      }
       .three{
           background:url('/static/icon/chongzhika-chaxun.png') center center no-repeat;
        background-size: 100% 100%;
      }
      p{
        margin-top: .22rem;
        font-size: .15rem;
        color: #333;
        font-weight: 500;
        text-align: center;
      }
      
     }
    }


  }
}
</style>
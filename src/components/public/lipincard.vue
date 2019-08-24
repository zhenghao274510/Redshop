<template>
  <div class='li_card'>
     <ul>
       <li>
          <router-link to="/giftcardetails">
            <div class="gif_card_tit">
                <div class="gif_name">
                   和天下酒业礼品卡
                </div>
                <div class="gif_name_icon">
                   <i @click.prevent="test"></i>
                   <span @click.prevent="test"></span>
                </div>
            </div>
            <div class="gif_card_hao">
               <div>
                   卡号: <span>2222222</span> 
               </div>
               <div>
                密码: <span>2222222</span> 
               </div>
            </div>
            <div class="gif_card_adder">
                <p class="tel">0595-23195678</p>
                <p class="addres">安溪县城厢镇新兴路149号(特产城移动公司后)</p>
            </div>
          </router-link>
       </li>
     </ul>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  props:[],
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

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  //方法集合
  methods: {
test(){
  console.log(1)
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
.li_card{
  width: 100%;
  padding: 0 .15rem;
  ul{
    width: 100%;
    li{
      width: 100%;
      height: 1.44rem;
      border-radius: .1rem;
      background-color: #72BB29;
      
      a{
        display: flex;
        height: 100%;
        flex-direction: column;
        color: #FFF;
        z-index: 2;
        .gif_card_tit{
          display: flex;
           height: .5rem;
           padding:0 .16rem;
           justify-content: space-between;
           align-items: center;
           font-size: 0;
          .gif_name{
            font-size: .17rem;
            text-align: left;
          }
          .gif_name_icon{
            i,span{
              display: inline-block;
              width: .25rem;
              height: .2rem;
              z-index: 99;
            }
             i{
               background: url('/static/icon/chongzhika-tupianfenxiang.png')center center no-repeat;
               background-size: 100% 100%;
               margin-right: .14rem;
             }
             span{
                background: url('/static/icon/chongzhika-duanxinfenxiang.png')center center no-repeat;
               background-size: 100% 100%;
             }
          }
        }
        .gif_card_hao{
          height: .35rem;
          background: #59A112;
          padding: 0 .16rem;
          font-size: .16rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .gif_card_adder{
          padding: .15rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .tel{
            font-size: .10rem;
          }
          .addres{
            font-size: .12rem;
          }
        }
      }
    }
  }
}
</style>
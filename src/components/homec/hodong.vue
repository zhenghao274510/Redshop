<template>
  <div class="huodong">
    <!-- 大图 -->
    <div class="banner">
      <router-link to>
        <img src="/static/test/bg.png" />
      </router-link>
    </div>
    <!-- 活动专区 -->
    <div class="hd_zuan">
      <div class="hd_tit">
        <span class="hd_tit_info">活动专区</span>
        
        <router-link to="">
          <span >查看更多</span>
          <i class="icon_more"></i>
        </router-link>
       
      </div>
      <ul class="hd_list">
        <li>
          <router-link to>
            <div class="hd_img_con">
              <img src />
            </div>
            <div class="hd_info"></div>
          </router-link>
        </li>
      </ul>
    </div>
   <router-link to=""> <img src=""> </router-link>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
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
.huodong {
  width: 100%;
  .banner {
    width: 100%;
    display: flex;
    a {
      flex: 1;
    }
  }
  .hd_zuan{
    padding: 0 .15rem;
    .hd_tit{
      height: .2rem;
      border-left: .04rem solid #72BB29;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .hd_tit_info{
        display: inline-block;
        margin-left: .14rem;
        font-size: .17rem;
        color: #333333;
      }
      a{
        display: flex;
        height: 100%;
        span{
          font-size: .13rem;
          margin-right: 0.1rem;
          color: #999999;
          display: block;
        }
        i{
          display: block;
          width: .07rem;
          height: .13rem;
          background: url('/static/icon/shangpinxiangqing-jiantou.png')no-repeat;
          background-size: 100% 100%;
          
        }
      }
    }
  }

}
</style>
<template>
  <!-- 首页推荐模块 -->
  <div class="tuijian">
    <Tit :title="activ"></Tit>
    <ul class="tui_list">
      <li>
        <router-link to>
          <div class="list_img">
            <img src="/static/test/replace.jpg" alt />
          </div>
          <div class="list_info">
            <p class="list_name">
              凯宝利519红葡萄酒750ml*6
              澳大利亚进口红酒
            </p>
            <div class="list_icon">
              <p class="col_max ft_mid">￥219</p>
              <van-icon name="cart-o" size=".16rem" color="#666666" />
            
            </div>
          </div>
        </router-link>
      </li>
       <li>
        <router-link to>
          <div class="list_img">
            <img src="/static/test/replace.jpg" alt />
          </div>
          <div class="list_info">
            <p class="list_name">
              凯宝利519红葡萄酒750ml*6
              澳大利亚进口红酒
            </p>
            <div class="list_icon">
              <p class="col_max ft_mid">￥219</p>
              <van-icon name="cart-o" size=".16rem" color="#666666" />
            
            </div>
          </div>
        </router-link>
      </li>
    </ul>
    <div class="no_more"></div>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import Tit from "./title";
export default {
  data() {
    return {
      activ: { tit: "为你推荐", type: 1 }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {
    Tit
  },
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
.no_more {
  margin-bottom: 0.5rem;
}
.tui_list {
  padding: 0.15rem;
  li {
    border-radius: 0.1rem;
    box-shadow: 0 0 .04rem 0 #33222222;
    margin-bottom: .15rem;
    a {
      display: flex;
      padding: 0.1rem;
      justify-content: space-between;
      .list_img {
        width: 1.38rem;
        height: 0.93rem;
       overflow: hidden;
      }
      .list_info {
        margin-left: 0.1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .list_name {
          font-size: 0.13rem;
          color: rgba(51, 51, 51, 1);
          margin-bottom: .2rem;
        }
        .list_icon {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
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
      <Tit :title="actions"></Tit>
      <!-- 第一张大图 -->
      <div class="hd_list">
        <router-link to>
          <div class="hd_img_con">
            <img src="/static/test/replace.jpg" />
          </div>
          <div class="hd_info one-txt-cut">
            <p class="ft_mid col_mix" style="font-weight:bold">凯宝利519红葡萄酒750ml*6澳大利亚进口红酒...</p>
            <p class="ft_mid">
              <span class="col_max">￥219</span>
              <i class="col_mid">￥229</i>
            </p>
          </div>
        </router-link>
      </div>
        <Shop-L></Shop-L>
    
    </div>
    <router-link to class="banner">
      <img src="/static/test/replace.jpg" />
    </router-link>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import ShopL from "./../../components/public/shangpin";
import Tit from "./title";
export default {
  data() {
    return {
      actions: { tit: "活动专区", type: 0 }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {
    ShopL,
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
.huodong {
  width: 100%;
  .banner {
    width: 100%;
    display: flex;
    a {
      flex: 1;
    }
  }
  .hd_zuan {
    .hd_list {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      padding: 0 0.15rem;
      margin: 0.1rem 0;
      a {
        flex: 1;
        padding: 0.15rem;
        height: 4rem;
        box-shadow: 0 0 0.04rem 0 rgba(34, 34, 34, 0.2);
        .hd_img_con {
           height: 3.2rem;
        }
        .hd_info {
          p {
            line-height: 0.2rem;
            i {
              text-decoration: line-through;
              margin-left: 0.1rem;
            }
          }
        }
      }
    }
    
  }
}
</style>
<template>
  <div class="classification">
    <Top title="商品分类"></Top>
    <sear></sear>
    <div class="cf_info">
      <ul class="cf_left">
        <li :class="{'active':num==index}" v-for="(item,index) in left" :key="index" @click="changleft(index)">{{item}}</li>
      </ul>
      <div class="cf_right">
        <div class="cf_right_tit">
          <span>{{left[num]}}</span>
          <i class="icon_back"></i>
        </div>
        <ul class="cf_right_list">
          <li>
            <router-link to="/shoplist">
              <img src="#" />
              <p>新品上架</p>
            </router-link>
          </li>
          <li>
            <router-link to>
              <img src="#" />
              <p>新品上架</p>
            </router-link>
          </li>
          <li>
            <router-link to>
              <img src="#" />
              <p>新品上架</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import Top from "./../../components/public/heade";
import sear from "./../../components/public/search";
export default {
  data() {
    return {
      num: 0,
      left: ["一键选酒", "洋酒", "葡萄酒", "白酒", "啤酒", "清酒"]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {
    Top,
    sear
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {
    changleft(ind) {
      this.num = ind;
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
.classification {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  .cf_info {
    width: 100%;
    height: 100%;
    padding: 0 0.15rem;
    display: flex;
    .cf_left {
      width: 0.94rem;
      height: 100%;
      overflow: hidden;
      background: #eeeeee;
      li {
        font-size: 0.13rem;
        height: 0.41rem;
        text-align: center;
        width: 100%;
        line-height: 0.41rem;
      }
    }
    .active {
      color: #23b459;
      background: #fff;
      border-left: 0.03rem solid #23b459;
    }
    .cf_right {
      padding-left: 0.19rem;
      flex: 1;
      .cf_right_tit {
        display: flex;
        height: 0.41rem;
        font-size: 0.13rem;
        justify-content: space-between;
        align-items: center;
        .icon_back {
          width: 0.07rem;
          height: 0.13rem;
          background: url("/static/icon/shangpinxiangqing-jiantou.png")
            no-repeat;
          background-size: 100% 100%;
          display: block;
        }
      }
      .cf_right_list {
        display: flex;
        justify-content: space-around;
        li {
          width: 33.3%;
          a {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            p {
              font-size: 0.12rem;
              color: #666;
            }
          }
        }
      }
    }
  }
}
</style>
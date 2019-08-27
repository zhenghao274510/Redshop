<template>
  <div class>
    <ul>
      <li>
        <router-link to="/bindTel">
          <span>头像</span>
          <img src="/static/test/qiandao.png" alt />
          <i></i>
        </router-link>
      </li>
       <li>
        <router-link to="/edmitname">
          <span>昵称</span>
            <p>昵称</p>
          <i></i>
        </router-link>
      </li>
       <li>
        <router-link to="/edmitself">
          <span>个性签名</span>
            <p>Lorem IpsumLorem Ipsum</p>
          <i></i>
        </router-link>
      </li>
       <li>
        <router-link to="/myaddress">
          <span>我的地址</span>
          <i></i>
        </router-link>
      </li>
    </ul>
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
  components: {
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
ul {
  margin-top: 0.6rem;
  li {
    padding: 0 0.15rem;
    border-bottom: 0.01rem solid #e5e5e5;
     &:not(:first-child){
       height: .6rem;
     }
    a {
      display: flex;
      line-height: .6rem;
      justify-content: space-between;
      position: relative;
      font-size: 0.14rem;
      color: #333333;
      i {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 0.09rem;
        height: 0.17rem;
        background: url("/static/icon/shezhi-jiantou.png") center center
          no-repeat;
        background-size: 100% 100%;
        display: block;
      }
      img {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        margin-right: 0.2rem;
      }
      p {
        color: #999999;
        margin-right: 0.2rem;
      }
    }
  }
}
</style>
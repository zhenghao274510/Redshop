<template>
  <div class='changpsw'>
     <ul>
       <li><input type="password" v-model="oldPsw" placeholder="请输入原密码"></li>
       <li><input type="password" v-model="newPsw"  placeholder="请输入新密码"></li>
       <li><input type="password" v-model="repeatPsw"  placeholder="再次输入新密码"></li>
     </ul>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  data() {
    return {
      oldPsw:'',
      newPsw:'',
      repeatPsw:''
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
<style scoped lang="less">
.changpsw{
  margin-top: .5rem;
  ul{
    padding:.15rem;
    li{
      height: .44rem;
      line-height: .44rem;
      border-bottom: .01rem solid #e5e5e5;
      font-size: .16rem;
      input{
        flex: 1;
      }
    }

  }
}
</style>
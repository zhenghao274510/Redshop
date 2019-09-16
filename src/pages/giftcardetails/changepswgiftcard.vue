<template>
  <div class="changpsw">
    <ul>
      <li>
        <input type="password" v-model="oldpwd" placeholder="请输入原密码" />
      </li>
      <li>
        <input type="password" v-model="newpwd" placeholder="请输入新密码" />
      </li>
      <li>
        <input type="password" v-model="repeatpwd" placeholder="再次输入新密码" />
      </li>
      <li class="changsub" @click="SubChange">确定</li>
    </ul>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  data() {
    return {
      oldpwd: "",
      newpwd: "",
      repeatpwd: "",
      cardid: "",
      pwd: "",
      type: "1",
      uid: ""
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
   this.uid=sessionStorage.getItem('uid');
    this.cardid = this.$route.query.cardid;
    this.pwd = this.$route.query.pwd;
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {
    SubChange() {
      if (this.oldpwd == this.newpwd) {
        this.$toast("两次密码不能一致!");
      } else if (this.newpwd != this.repeatpwd) {
        this.$toast("新密码输入不一样!");
      } else if (this.oldpwd != this.pwd) {
        this.$toast("原密码输入不正确!");
      } else {
        let parmas = {
          cmd: "updateCardPwd",
          type: this.type,
          cardid: this.cardid,
          oldpwd: this.oldpwd,
          newpwd: this.newpwd,
          uid: this.uid
        };
        this.http(parmas).then(res => {
          if (res.data.result == 0) {
            this.$toast(res.data.resultNote);
            setTimeout(() => {
              this.$router.back(-1);
            });
          }
        });
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
  activated() {}
};
</script>
<style scoped lang="less">
.changpsw {
  margin-top: 0.5rem;
  ul {
    padding: 0.15rem;
    li {
      height: 0.44rem;
      line-height: 0.44rem;
      
      font-size: 0.16rem;
      padding: 0.05rem 0;
      margin-bottom: .1rem;

      input {
        flex: 1;
        width: 100%;
        height: 0.33rem;
        border-bottom: 0.01rem solid #e5e5e5;
      }
    }
    .changsub {
      padding: 0 0.15rem;
      // width: 100%;
      height: 0.44rem;
      background: #72bb29;
      color: #fff;
      font-size: 0.16rem;
      width: 3.45rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-bottom: none;
      text-align: center;
    }
  }
}
</style>
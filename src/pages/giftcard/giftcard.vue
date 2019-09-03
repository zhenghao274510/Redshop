<template>
  <div>
    <div class="li_pin_card">
      <div class="li_search">
        <span>查询</span>
      </div>
      <Crd @ShowMsg="GetMsg" :list="dataObject"></Crd>
    </div>

    <van-popup position="bottom" v-model="MsgShare" :style="{ height: '40%' }">
      <div class="Share_msg_info">
        <div class="bo_bot clearfix">
          <p>短信分享</p>
          <i @click="close"></i>
        </div>
        <div class="Use_tel">
          <input type="text" placeholder="请输入手机号" v-model="UseTelphone" />
        </div>
        <div @click="close">
          <span>确定</span>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import Crd from "./../../components/public/lipincard";
export default {
  data() {
    return {
      MsgShare: false,
      UseTelphone: "",
      uid: "",
      dataObject: {}
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {
    Crd
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.uid = "1";
    let parmas = {
      cmd: "giftCardList",
      uid: this.uid,
      nowPage: "1",
      pageCount: "10",
      cardid:''
    };
    this.postRequest(parmas).then(res => {
      console.log(res);
      this.dataObject=res.data.dataObject;
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {
    GetMsg() {
      this.MsgShare = true;
    },
    close() {
      let parmas={cmd:'sharingSMS',type:'',cardid:this.cardid,phone:this.phone};
      let Reg = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
      let isRegExp = Reg.test(this.tel);
      if (isRegExp) {
           
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
<style scoped lang='less' rel='stylesheet/stylus'>
.li_pin_card {
  .li_search {
    overflow: hidden;
    padding: 0.15rem;
    margin-top: 0.5rem;
    span {
      float: right;
      width: 0.43rem;
      height: 0.3rem;
      border-radius: 0.05rem;
      background: #72bb29;
      text-align: center;
      line-height: 0.3rem;
      font-size: 0.13rem;
      color: #fff;
    }
  }
}
.Share_msg_info {
  display: flex;
  width: 100%;
  height: 2.6rem;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 0.15rem;
  align-items: center;
  div {
    width: 100%;
    padding: 0 0.15rem;
    position: relative;
    font-size: 0.18rem;
    p {
      text-align: center;
      line-height: 0.45rem;
    }
    input {
      width: 100%;
      height: 0.45rem;
      border-radius: 0.05rem;
      border: 0.01rem solid #e5e5e5;
      padding-left: 0.15rem;
    }
    i {
      position: absolute;
      top: 0.09rem;
      right: 0.15rem;
      display: block;
      width: 0.22rem;
      height: 0.22rem;
      background: url("/static/icon/tankuang-quxiao.png") no-repeat;
      background-size: 100% 100%;
    }
    span {
      display: block;
      height: 0.45rem;
      background: #72bb29;
      border-radius: 0.05rem;
      color: #fff;
      text-align: center;
      line-height: 0.45rem;
    }
  }
}
</style>
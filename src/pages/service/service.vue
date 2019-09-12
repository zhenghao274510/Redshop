<template>
  <div class="kh_box">
    <div class="kh_mode">
      <div class="kh_info">
        <p>联系方式</p>
        <p>
          您可拨打在线客服电话，也可复制微信号/QQ号进入
          微信/QQ搜索添加，即可在线沟通客服
        </p>
      </div>
      <ul class="kf_list">
        <li>
          <a :href="'tel://'+phone"></a>
          <span class="one"></span>
          <p>{{phone}}</p>
          <i>拨打</i>
        </li>
        <li>
          <span class="two"></span>
          <p>{{wx1}}</p>
          <i @click="copy(0)">复制</i>
        </li>
        <li>
          <span class="two"></span>
          <p>{{wx2}}</p>
          <i @click="copy(1)">复制</i>
        </li>
        <li>
          <span class="three"></span>
          <p>{{qq}}</p>
          <i @click="copy(2)">复制</i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
export default {
  data() {
    return {
      qq:'',
      phone:'',
      wx1:'',
      wx2:''

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
    let parmas={cmd:'aboutUs'};
    this.postRequest(parmas).then(res=>{
     console.log(res);
     this.qq=res.data.dataObject.qq;
     this.phone=res.data.dataObject.phone;
     this.wx1=res.data.dataObject.wx1;
     this.wx2=res.data.dataObject.wx2;
      
    })
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {
    copy(num) {
     
      let value;
      switch(num){
        case 0:
        value=this.wx1;
        break;
         case 1:
        value=this.wx2;
        break;
         case 2:
        value=this.qq;
        break;
      }
       console.log(value)
        const input = document.createElement("input");
        document.body.appendChild(input);
        input.setAttribute("value",value);
        input.select();
        // input.setSelectionRange(0, 9999);
        if (document.execCommand("copy")) {
          document.execCommand("copy");
          this.$toast("复制成功");
        }
        document.body.removeChild(input);
    },
    // tell(){
    //     const input = document.createElement("a");
    //     document.body.appendChild(input);
    //     input.setAttribute("ref", 'tel://'+this.qq);
    // }
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
.kh_box {
  height: 100%;
  background-color: #eeeeee;
  z-index: 2;
  .kh_mode {
    height: 1.36rem;
    margin-top: 0.5rem;
    background-color: #72bb29;
    .kh_info {
      padding: 0.2rem 0.39rem.2rem 0.15rem;
      text-align: left;
      height: 1.06rem;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        &:first-child {
          font-size: 0.18rem;
          font-weight: Bold;
        }
        &:last-child {
          font-size: 0.14rem;
        }
      }
    }
    .kf_list {
      width: 100%;
      padding: 0 0.15rem;
      // margin-top: -.1rem;
      z-index: 999;
      li {
        width: 100%;
        height: 1rem;
        padding: 0 0.15rem;
        border-radius: 0.1rem;
        background-color: #fff;
        display: flex;
        align-items: center;
        margin-bottom: 0.1rem;
        position: relative;
        a{width:100%;height: 100%;display: block;position: absolute;top: 0;}
        span {
          height: 0.26rem;
          width: 0.3rem;
          display: block;
          margin-right: 0.18rem;
        }
        .one {
          background: url("/static/icon/lianxikefu-dianhua.png") center center
            no-repeat;
          background-size: 100% 100%;
        }
        .two {
          background: url("/static/icon/lianxikefu-weixin.png") center center
            no-repeat;
          background-size: 100% 100%;
        }
        .three {
          background: url("/static/icon/lianxikefu-qq.png") center center
            no-repeat;
          background-size: 100% 100%;
        }
        p {
          font-size: 0.15rem;
          line-height: 0.25rem;
          flex: 1;
        }
        i {
          font-size: 0.16rem;
          color: #72bb29;
        }
      }
    }
  }
}
</style>
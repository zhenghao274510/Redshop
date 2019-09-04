<template>
  <div class="box">
    <ul>
      <li>
        <span>收货人:</span>
        <input class="use_name" type="text" placeholder="请输入你的姓名" v-model="name" />
        <van-icon name="clear" size=".16rem" color="#999999" />
      </li>
      <li>
        <span>联系电话:</span>
        <input type="telphone" placeholder="请输入你的手机号" v-model="phone" />
      </li>
      <li class="pad_r">
        <span>所在地区:</span>
        <input class="one-txt-cut" type="text" placeholder v-model="address" />
        <div class="pos" @click="getCurrentPosition">
          <van-icon name="aim" size=".16rem" color="#72BB29" />
          <span>定位</span>
        </div>
      </li>
      <li>
        <span>详细地址:</span>
        <input type="text" placeholder v-model="detail" />
      </li>
    </ul>
    <div class="ft_mid col_mix mo_r" @click="istrue=!istrue">
      <div>
        <van-icon name="circle" size=".18rem" v-if="istrue" />
        <van-icon name="checked" size=".18rem" color="#72BB29" v-else />
      </div>
      <span>设置为默认地址</span>
    </div>
    <div class="pad">
      <van-button type="primary" size="large" color="#72BB29" @click="save">保存</van-button>
    </div>
    <!-- <div id="container"></div> -->
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
// import Getposition from "./../../../static/js/location";
// import { Toast } from "vant";
export default {
  data() {
    return {
      uid: "",
      addressId: "",
      name: "",
      phone: "",
      address: "",
      detail: "",
      isdefault: "",
      istrue: false
    };
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
  methods: {
    save() {
      this.uid = "1";
      if (this.istrue) {
        this.isdefault = 1;
      } else {
        this.isdefault = 0;
      }
      let Reg = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
      let regname = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
      // if (Reg.test(this.phone) && regname.test(this.name)) {
        let parmas = {
          cmd: "addAddress",
          uid: this.uid,
          addressId: this.addressId,
          name: this.name,
          phone: this.phone,
          address: this.address,
          detail: this.detail,
          isdefault: this.isdefault
        };
        this.postRequest(parmas).then(res => {
          console.log(res);
          this.$toast(res.data.resultNote);
           if(res.data.result==0){
             this.$store.commit('AddAdress',parmas);
             this.$router.back(-1);
           }
        });
      // }
    },
    getCurrentPosition() {
      this.GetCurrentCity();
      setTimeout(() => {
        let FMadd = JSON.parse(localStorage.getItem("address"));
        console.log(FMadd);
        if (FMadd) {
          this.address =
            FMadd.addressComponent.province +
            FMadd.addressComponent.city +
            FMadd.addressComponent.district;
          this.detail = FMadd.formattedAddress.slice(this.address.length);
          this.addressId = FMadd.addressComponent.citycode;
        }
      }, 5000);
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
.box {
  margin-top: 0.5rem;
  ul {
    padding: 0 0.15rem;
    li {
      font-size: 0.14rem;
      height: 0.45rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.01rem solid #e5e5e5;
      color: #666666;
      position: relative;
      input {
        flex: 1;
      }
      &:nth-child(3) {
        width: 2.5rem;
        display: flex;
        .pos {
          position: absolute;
          bottom: 0;
          right: -1.05rem;
          transform: translateY(50%);
          color: #72bb29;
          width: 0.9rem;
          // height: 0.9rem;
          display: flex;
          align-items: center;
          z-index: 30;
          span {
            margin-left: 0.05rem;
          }
        }
      }
      .use_name {
        padding-left: 0.3rem;
      }

      input {
        padding-left: 0.15rem;
        color: #333333;
      }
    }
  }
  .mo_r {
    display: flex;
    align-items: center;
    line-height: 0.45rem;
    padding-left: 0.15rem;
    div {
      width: 0.18rem;
      height: 0.18rem;
      position: relative;
      i {
        position: absolute;
        top: 0;
      }
    }
    span {
      color: #999999;
      text-indent: 0.1rem;
    }
  }
}
</style>
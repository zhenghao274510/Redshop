<template>
  <div class="giftcard_top">
    <div class="li_pin_card">
      <div class="li_search" @click="SearchCard">
        <span>查询</span>
      </div>
      <div class="li_card">
        <ul>
          <li v-for="(item,index) in dataList" :key="index">
            <router-link to>
              <div class="gif_card_tit">
                <div class="gif_name">和天下酒业礼品卡</div>
                <div class="gif_name_icon">
                  <i @click.prevent="Goto(item)" style="z-index:99;"></i>
                  <span @click.prevent="GetMsg(index)" style="z-index:99;"></span>
                </div>
              </div>
              <div class="gif_card_hao" @click.prevent="GoToGif(item)">
                <div>
                  卡号:
                  <span>{{item.cardnum}}</span>
                </div>
                <div>
                  密码:
                  <span>{{item.pwd}}</span>
                </div>
              </div>
              <div class="gif_card_adder" @click.prevent="GoToGif(item)">
                <p class="tel">0595-23195678</p>
                <p class="addres">安溪县城厢镇新兴路149号(特产城移动公司后)</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>

    </div>
     <van-popup position="bottom" v-model="MsgShare" :style="{ height: '40%' }">
      <div class="Share_msg_info">
        <div class="bo_bot clearfix">
          <p>短信分享</p>
          <i @click="close"></i>
        </div>
        <div class="Use_tel">
          <input type="text" placeholder="请输入手机号" v-model="phone" id="phone" style="box-sizing:border-box;" />
        </div>
        <div @click.prevent="GotoTell">
          <span>确定</span>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
export default {
  data() {
    return {
      MsgShare: false,

      uid: "",
      dataObject: {},
      dataList: [],
      num: 0,
      phone:''
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
    // this.uid = "1";
    let parmas = {
      cmd: "giftCardList",
      uid: this.uid,
      nowPage: "1",
      pageCount: "10",
      cardid: ""
    };
    this.postRequest(parmas).then(res => {
      console.log(res);
      this.dataList = res.data.dataList;
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {
    close() {
      this.MsgShare = false;
    },
    GetMsg(ind) {
      this.num = ind;
       this.MsgShare=true;
    },
    SearchCard() {
      this.$router.push({path:"/chaxun",query:{direct:0}});
    },
    Goto(e) {
      console.log(e);
      e.title="礼品卡";
       this.$router.push({
        path: "/share",
        query: { card: JSON.stringify(e) }
      });
    },
    GotoTell() {
     
      console.log(1);
      this.cardid = this.dataList[this.num].cardid;
      this.phone=document.getElementById('phone').value.trim();
      let parmas = {
        cmd: "sharingSMS",
        type: "1",
        cardid: this.cardid,
        phone: this.phone,
        uid: this.uid
      };
      if (this.phone!='') {
        this.http(parmas).then(res => {
          console.log(res);
          this.$toast(res.data.resultNote);
          this.MsgShare = false;
        });
      } else {
        this.$toast("请输入正确的手机号码!");
      }
    },
    GoToGif(e) {
      console.log(e);
      this.$router.push({
        path: "/giftcardetails",
        query: { gift: JSON.stringify(e) }
      });
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
.giftcard_top {
  margin-top: 0.5rem;
}
.li_pin_card {
  .li_search {
    overflow: hidden;
    padding: 0.15rem;

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
      z-index: 99;
    }
    span {
      display: block;
      height: 0.45rem;
      background: #72bb29;
      border-radius: 0.05rem;
      color: #fff;
      text-align: center;
      line-height: 0.45rem;
      z-index: 99;
    }
  }
}
.li_card {
  width: 100%;
  padding: 0 0.15rem;
  ul {
    width: 100%;
    li {
      width: 100%;
      height: 1.44rem;
      border-radius: 0.1rem;
      background-color: #72bb29;
      margin-bottom: .15rem;
      a {
        display: flex;
        height: 100%;
        flex-direction: column;
        color: #fff;
        z-index: 2;
        .gif_card_tit {
          display: flex;
          height: 0.5rem;
          padding: 0 0.16rem;
          justify-content: space-between;
          align-items: center;
          font-size: 0;
          .gif_name {
            font-size: 0.17rem;
            text-align: left;
          }
          .gif_name_icon {
            i,
            span {
              display: inline-block;
              width: 0.25rem;
              height: 0.2rem;
              z-index: 99;
            }
            i {
              background: url("/static/icon/chongzhika-tupianfenxiang.png")
                center center no-repeat;
              background-size: 100% 100%;
              margin-right: 0.14rem;
            }
            span {
              background: url("/static/icon/chongzhika-duanxinfenxiang.png")
                center center no-repeat;
              background-size: 100% 100%;
            }
          }
        }
        .gif_card_hao {
          height: 0.35rem;
          background: #59a112;
          padding: 0 0.16rem;
          font-size: 0.16rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .gif_card_adder {
          padding: 0.15rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .tel {
            font-size: 0.1rem;
          }
          .addres {
            font-size: 0.12rem;
          }
        }
      }
    }
  }
}
</style>
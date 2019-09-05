<template>
  <div class="shop_de">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="banner">
    <van-swipe :autoplay="3000"  @change="Onchange">
      <van-swipe-item v-for="(item,index) in dataObject.productImages" :key="index">
        <img :src="item" alt />
      </van-swipe-item>
      <div class="custom_indicator" slot="indicator">{{current+1}}/{{ length }}</div>
    </van-swipe>
  </div>
      <div class="shop_info">
        <div class="shop_info_tit">
          <p>{{dataObject.productName}}</p>
          <div class="shop_info_price">
            <div class="pirce">
              <span class="new">
                ￥
                <i>{{dataObject.productPrice}}</i>
              </span>
              <span class="old">
                ￥
                <i>{{dataObject.productOldPrice}}</i>
              </span>
            </div>
            <div class="num">
              销量:
              <span>{{dataObject.sales}}</span>
            </div>
          </div>
        </div>
        <div class="shop_info_juan" @click="see(0)">
          <div>优惠活动</div>
          <div>满{{CurrentCard.couponPrice}}减{{CurrentCard.couponAmount}}劵</div>
          <div>
            <span>更多优惠</span>
            <em></em>
          </div>
        </div>
        <div class="shop_info_juan" @click="see(1)">
          <div>规格参数</div>
          <div class="data">品牌 日期..</div>
          <div>
            <em></em>
          </div>
        </div>
        <div class="shop_info_use">
          <div class="use_tit">
            <div>用户评价</div>
            <div>
              <router-link to="/evaluation">更多评价</router-link>
              <em></em>
            </div>
          </div>
          <div class="use_info">
            <img :src="productCommentList.userIcon" />
            <div class="use_info_cont">
              <div class="use_name">
                <span>{{productCommentList.userName}}</span>
                <span>{{productCommentList.commentDate}}</span>
              </div>
              <van-rate v-model="productCommentList.commentScore" readonly />
            </div>
          </div>
          <div class="use_cont">{{productCommentList.commentContent}}</div>
          <div class="productimg">
            <img
              :src="i"
              alt
              class="Commentimg"
              v-for="i in productCommentList.commentImages"
              :key="i"
            />
          </div>
        </div>
        <div class="shop_info_details">
          <div class="shop_details_tit">商品详情</div>
          <div class="zi">
            <p>{{dataObject.content}}</p>
          </div>
          <div class="shop_img"></div>
        </div>
      </div>
      <iframe :src="dataObject.url" frameborder="0" class="shopendmore" scrolling="no"></iframe>
    </van-pull-refresh>
    <van-popup
      v-model="show"
      round
      position="bottom"
      :style="{ height: '70%' }"
      :close-on-click-overlay="jin"
    >
      <Addshop @closec="FUC" v-if="add_car" :list="skuList" :isbuy="buy"></Addshop>
      <Youcard @closec="FUC" v-if="see_card" :list="YuhuiCar"></Youcard>
      <Canshu @closec="FUC" v-if="see_gu" :list="productParam"></Canshu>
    </van-popup>
    <!-- 呈高度 -->
    <div class="no_con"></div>
    <!-- 加入购物车 -->
    <div class="buy">
      <div class="buy_left">
        <router-link to @click="Route">
          <span class="icon_car"></span>
          <p>购物车</p>
        </router-link>
        <div class="shou_c" @click="GetInShou">
          <div>
            <img src="/static/icon/shangpinxiangqing-shoucang.png" v-if="!addshou" />
            <img src="/static/icon/wodeshoucang.png" v-else />
          </div>
          <p>收藏</p>
        </div>
      </div>

      <div class="buy_right">
        <span class="add_car" @click="see(2)">加入购物车</span>
        <span class="go_buy" @click="see(3)">立即购买</span>
      </div>
    </div>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import { pathway } from "@/mixins/img";
// import De from "./../../components/public/banner";
import Addshop from "./addshop";
import Youcard from "./youhuicard";
import Canshu from "./canshu";
export default {
  data() {
    return {
      length:0,
       current:0,
      imgurl: pathway.imgurl,
      jin: false,
      value: 5,
      show: false,
      addshou: true,
      add_car: false,
      see_gu: false,
      see_card: false,
      isLoading: false,
      id: "",
      buy: false,
      //
      dataObject: {},
      productParam: {},
      skuList: [],
      productCommentList: {},
      YuhuiCar: [],
      CurrentCard: {},
      uid: ""
      //
    };
  },
  //监听属性 类似于data概念
  computed: {
    store() {
      return this.$store.state;
    }
  },
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {
    Addshop,
    Youcard,
    Canshu
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // 商品id
    this.id = this.store.Shop.productid;
    // this.uid = this.$store.state.Use.uid;
    this.uid = "1";
    console.log(this.id);
    let parmas1 = {
      cmd: "productDetail",
      productid: this.id,
      uid: this.uid
    };
    this.postRequest(parmas1).then(res => {
      if (res.data.result == 0) {
        console.log(res);
        this.dataObject = res.data.dataObject;
        this.length=res.data.dataObject.productImages.length;
        // 规格
        this.productParam = res.data.productParam;
        //库存
        this.skuList = res.data.skuList;
      }
    });
    //   评价
    let parmas2 = {
      cmd: "productCommentList",
      productid: this.id,
      nowPage: "1",
      pageCount: "10"
    };
    this.postRequest(parmas2).then(res => {
      if (res.data.result == 0) {
        // console.log(res);
        this.productCommentList = res.data.dataList[0];
      }
    });
    let parmas3 = {
      cmd: "couponList"
    };
    this.postRequest(parmas3).then(res => {
      if (res.data.result == 0) {
        // console.log(res);
        this.YuhuiCar = res.data.dataList;
        this.CurrentCard = this.YuhuiCar[0];
      }
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {
     Onchange(index){
      this.current=index;
    },
    see(ind) {
      this.show = true;
      switch (ind) {
        //  查看优惠
        case 0:
          this.see_card = true;
          break;
        //  查看 规则
        case 1:
          this.see_gu = true;
          break;
        //   加入购物车
        case 2:
          this.add_car = true;
          this.buy = false;
          break;
        // 立即购买
        case 3:
          this.add_car = true;
          this.buy = true;
          break;
      }
    },
    //  添加收藏
    GetInShou() {
      let parmas = {
        cmd: "collectProduct",
        productid: this.id,
        uid: this.uid
      };
      this.postRequest(parmas).then(res => {
        console.log(res);
        if (res.data.result == 0) {
          this.$toast(res.data.resultNote);
          this.addshou = !this.addshou;
        }
      });
    },
    FUC(e) {
      this.show = false;
      switch (e) {
        case 0:
          this.see_card = false;
        case 1:
          this.see_gu = false;
          break;
        case 2:
          this.add_car = false;
          break;
      }
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    },
    Route() {
      console.log(1);
      this.$store.commit("ChangeTabar", 2);
      this.$router.push("/shopcar");
    }
    // GtoBuy(){
    //   this.$store.commit('ChooseBuy',)
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
/deep/ .van-rate__icon {
  font-size: 0.1rem;
}
.banner {
  margin-top: 0.5rem;
  position: relative;
  .custom_indicator{
    position: absolute;
    right: .15rem;
    bottom: .07rem;
    width: .5rem;
    height: .21rem;
    background: rgba(0, 0, 0, .3);
    color: #fff;
    font-size: .15rem;
    border-radius: .11rem;
    text-align: center;
    line-height: .21rem;
  }
}
.productimg {
  display: flex;
  align-items: center;
}
.Commentimg {
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.1rem;
}
em {
  width: 0.07rem;
  height: 0.14rem;
  display: block;
  background: url("/static/icon/shangpinxiangqing-jiantou.png") center center
    no-repeat;
  background-size: 100% 100%;
  position: absolute;
  right: 0.15rem;
  top: 0.15rem;
}
.shop_de {
  overflow-y: auto;
  .shop_info {
    overflow: hidden;
    background-color: #f6f6f6;
    .shop_info_tit,
    .shop_info_juan,
    .shop_info_use,
    .shop_info_details {
      background-color: #fff;
      margin-bottom: 0.05rem;
      padding: 0.15rem;
    }
    .shop_info_juan {
      height: 0.45rem;
    }
    .shop_info_tit {
      font-size: 0;
      p {
        font-size: 0.18rem;
        font-weight: bold;
      }
      .shop_info_price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.19rem;
        .pirce {
          .new {
            font-size: 0.14rem;
            color: #ed670d;
          }
          .old {
            font-size: 0.12rem;
            color: #999999;
            text-decoration: line-through;
            margin-left: 0.09rem;
          }
        }
        .num {
          font-size: 0.14rem;
          color: #999999;
        }
      }
    }
    .shop_info_juan {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .data {
        width: 0.7rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      div {
        font-size: 0.13rem;
        color: #999999;
        &:first-child {
          font-size: 0.14rem;
          color: #333333;
        }
        &:nth-child(2) {
          flex: 1;
          margin-left: 0.34rem;
        }
        &:last-child {
          span {
            margin-right: 0.17rem;
          }
        }
      }
    }
    .shop_info_use {
      position: relative;
      .use_tit,
      .use_info {
        display: flex;
        justify-content: space-between;
      }
      .use_tit {
        div {
          &:first-child {
            font-size: 0.14rem;
            color: #333333;
          }
          &:last-child {
            a {
              display: block;
              font-size: 0.13rem;
              color: #999999;
              margin-right: 0.2rem;
            }
          }
        }
      }
      .use_info {
        margin-top: 0.15rem;
        img {
          width: 0.25rem;
          height: 0.25rem;
          border-radius: 50%;
        }
        .use_info_cont {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding-left: 0.09rem;
          color: #999999;
          font-size: 0.12rem;
          .use_name {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }
      }
      .use_cont {
        margin-top: 0.1rem;
        font-size: 0.13rem;
        color: #333333;
      }
    }
    .shop_info_details {
      .shop_details_tit {
        font-size: 0.15rem;
        color: #333333;
      }
      .zi {
        padding: 0.15rem 0.1rem 0.15rem 0;
        font-size: 0.14rem;
        color: #666;
      }
      .shop_img {
        width: 100%;
      }
    }
  }
  .buy {
    position: fixed;
    bottom: -0.01rem;
    width: 100%;
    height: 0.5rem;
    border-top: 0.01rem solid rgba(135, 135, 135, 0.2);
    padding: 0 0.15rem;
    background-color: #fff;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    .buy_left {
      height: 0.5rem;
      display: flex;
      align-items: center;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon_car {
          width: 0.22rem;
          height: 0.21rem;
          display: block;
          background: url("/static/icon/shangpinxiangqing-gouwuche.png") center
            center no-repeat;
          background-size: 100% 100%;
        }
        p {
          font-size: 0.12rem;
          color: #666666;
          margin-top: 0.06rem;
        }
      }
      .shou_c {
        display: flex;
        flex-direction: column;
        margin-left: 0.3rem;
        div {
          width: 0.22rem;
          height: 0.21rem;
          position: relative;
          img {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        p {
          margin-top: 0.06rem;
          font-size: 0.11rem;
          color: #666666;
        }
      }
    }
    .buy_right {
      height: 100%;
      padding: 0.07rem 0;
      display: flex;
      span {
        display: inline-block;
        width: 1.01rem;
        height: 0.35rem;
        text-align: center;
        line-height: 0.35rem;
        font-size: 0.15rem;
        border-radius: 0.05rem;
      }
      .add_car {
        color: rgb(237, 103, 13);
        border: 0.01rem solid rgb(237, 103, 13);
        margin-right: 0.16rem;
      }
      .go_buy {
        background-color: rgb(114, 187, 41);
        color: #fff;
      }
    }
  }
}
.no_con {
  height: 0.6rem;
}
.shopendmore {
  width: 100%;
}
</style>
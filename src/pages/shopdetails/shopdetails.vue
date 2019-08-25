<template>
  <div class="shop_de">
    <De></De>
    <div class="shop_info">
      <div class="shop_info_tit">
        <p>威士忌原装进口洋酒750ml</p>
        <div class="shop_info_price">
          <div class="pirce">
            <span class="new">
              ￥
              <i>219</i>
            </span>
            <span class="old">
              ￥
              <i>229</i>
            </span>
          </div>
          <div class="num">
            销量:
            <span>0</span>
          </div>
        </div>
      </div>
      <div class="shop_info_juan" @click="see(0)">
        <div>优惠活动</div>
        <div>满200减10卷</div>
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
          <img src="/static/test/qiandao.png" />
          <div class="use_info_cont">
            <div class="use_name">
              <span>用户昵称</span>
              <span>2019-07-01</span>
            </div>
            <van-rate v-model="value" readonly />
          </div>
        </div>
        <div class="use_cont">已经收到，配送很快，价格也很实惠，味道纯正，价格合理, 非常喜欢。</div>
      </div>
      <div class="shop_info_details">
        <div class="shop_details_tit">商品详情</div>
        <div class="zi">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        </div>
        <div class="shop_img">
          <img src alt />
        </div>
      </div>
    </div>
    <van-popup v-model="show" round position="bottom" :style="{ height: '70%' }" :close-on-click-overlay="jin">
      <Addshop @closec="FUC" v-if="add_car"></Addshop>
      <Youcard  @closec="FUC"  v-if="see_card"></Youcard>
      <Canshu @closec="FUC" v-if="see_gu"></Canshu>
    </van-popup>
    <!-- 呈高度 -->
    <div class="no_con"></div>
    <!-- 加入购物车 -->
    <div class="buy">
      <div class="buy_left">
        <router-link to="/shopcar">
          <span class="icon_car"></span>
          <p>购物车</p>
        </router-link>
        <div class="shou_c" @click="add_shou">
          <div>
            <img src="/static/icon/shangpinxiangqing-shoucang.png" v-if="addshou" />
            <img src="/static/icon/wodeshoucang.png" v-else />
          </div>
          <p>收藏</p>
        </div>
      </div>

      <div class="buy_right">
        <span class="add_car">加入购物车</span>
        <span class="go_buy" @click="see(2)">立即购买</span>
      </div>
    </div>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import De from "./../../components/public/banner";
import Addshop from "./addshop";
import Youcard from "./youhuicard";
import Canshu from "./canshu";
export default {
  data() {
    return {
      jin:false,
      value: 5,
      show: false,
      addshou: true,
      add_car: false,
      see_gu: false,
      see_card: false
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {
    De,
    Addshop,
    Youcard,
    Canshu
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {
    see(ind) {
      this.show = true;
      switch (ind) {
        case 0:
          this.see_card = true;
          break;
        case 1:
          this.see_gu = true;
          break;
        case 2:
          this.add_car = true;
          break;
      }
    },
    add_shou() {
      this.addshou = false;
    },
    FUC(e) {
      this.show = false;
      switch (e) {
        case 0:
        this.see_card=false;
        case 1:
          this.see_gu = false;
          break;
        case 2:
          this.add_car = false;
          break;
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
/deep/ .van-rate__icon {
  font-size: .1rem;
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
        // width: 100%;
        height: 0.8rem;
        background: #ed670d;
      }
    }
  }
  .buy {
    position: fixed;
    bottom: 0;
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
</style>
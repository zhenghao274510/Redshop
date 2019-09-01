<template>
  <div class="order_de bg_c">
    <div class="order_de_info">
      <div class="tit bg_wh ft_mid pad mg_bot" v-if="direct==1">等待买家付款</div>
      <de-zhi></de-zhi>
      <div class="tit bg_wh ft_mid pad mg_top bo_bot">购物清单</div>
      <div class="tit bg_wh ft_mid pad mg_top bo_bot" v-if="direct==1">买家清单</div>
      <Info></Info>
      <div class="tit bg_wh ft_max pad bo_top">
        配送方式：&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="col_mid ft_mix">同城配送</span>
        <span class="col_mid ft_mix fr">配送费￥10元</span>
      </div>
      <div class="tit bg_wh ft_mid pad bo_bot bo_top">
        买家留言
        <input class="pad_l" type="text" v-if="direct==0" placeholder="给买家留言（选填）" />
        <p class="pad_l" v-else></p>
      </div>
      <div class="tit bg_wh ft_mid pad mg_top bo_bot clearfix">
        <div class="fr">
          <span>共一件商品</span> &nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            合计:
            <i class="col_max">￥219</i>
          </span>
        </div>
      </div>
      <ul class="de_info bg_wh" v-if="direct==1">
        <li class="col_mid">
          <span class="ft_mid">商品总价</span>
          <span class="ft_cmix">
            ￥
            <i>219.00</i>
          </span>
        </li>
        <li class="col_mid">
          <span class="ft_mid">配送费</span>
          <span class="ft_cmix">
            ￥
            <i>10.00</i>
          </span>
        </li>
        <li class="col_mid">
          <span class="ft_mid">优惠卷抵扣</span>
          <span class="ft_cmix">
            -￥
            <i>5.00</i>
          </span>
        </li>
        <li class="col_mid">
          <span class="ft_mid">实际支付</span>
          <span class="ft_cmix col_max">
            ￥
            <i>214.00</i>
          </span>
        </li>
      </ul>
      <div class="tit bg_wh ft_mid pad mg_top" v-if="direct==1">订单信息</div>
      <div class="tit bg_wh ft_mid pad mg_top d_flex" v-else @click="changej(0)">
        <span>可使用优惠卷</span>
        <i class="more_j"></i>
      </div>

      <ul class="de_info bg_wh" v-if="direct==1">
        <li class="col_mid">
          <span class="ft_mid">订单编号：27900219</span>
          <span class="ft_cmix">复制</span>
        </li>
        <li class="col_mid">
          <span class="ft_mid">创建时间：2019.07.01 11:27:21</span>
        </li>
        <li class="col_mid">
          <span class="ft_mid">付款时间：2019.07.01 11:29:21</span>
        </li>
        <li class="col_mid">
          <span class="ft_mid">配送时间：2019.07.01 11:29:21</span>
        </li>
      </ul>
      <div class="tit bg_wh ft_mid pad mg_top bo_bot" v-else>配送方式</div>
      <ul class="mothed bg_wh">
        <li @click="changeMothed(0)">
          <span>配送到家</span>
          <div>
            <img src="/static/icon/goumaifangshi-weixuanzhong.png" v-if="goHome" />
            <img src="/static/icon/goumaifangshi-xuanzhong.png" v-else />
          </div>
        </li>
        <li @click="changeMothed(1)">
          <span>存为礼品卡</span>
          <div>
            <img src="/static/icon/goumaifangshi-weixuanzhong.png" v-if="goCrd" />
            <img src="/static/icon/goumaifangshi-xuanzhong.png" v-else />
          </div>
        </li>
      </ul>
      <div class="tit bg_wh ft_mid pad mg_top mg_bot d_flex"  @click="changej(1)">
        <span>支付方式</span>
        <div class="d_flex">
          <span>微信支付</span>
          <i class="more_j"></i>
        </div>
      </div>

      <!-- 层高度 -->
      <div class="no_more bg_wh mg_top"></div>

      <!-- 底部 -->
      <div class="end bg_wh" v-if="direct==1">
        <btn :come="num"></btn>
      </div>
      <div class="end bg_wh" v-else>
        <div class="ok bo_top ft_max">
          <span class="bg_g col_wh ft_mid sub">提交订单</span>
          <span class="col_mix lin_h">
            实付:
            <i class="col_max">￥219</i>
          </span>
        </div>
      </div>
      <!-- 优惠卷 -->
      <van-popup v-model="show_juan" round position="bottom" :style="{ height: '40%' }" :close-on-click-overlay="jin">
        <van-radio-group v-model="radio">
          <van-cell title="优惠"></van-cell>
          <van-cell-group>
            <van-cell  title="满100减10" clickable @click="radio = '1'">
              <van-radio slot="right-icon" name="1" checked-color="#72BB29" />
            </van-cell>
            <van-cell title="满100减10" clickable @click="radio = '2'">
              <van-radio slot="right-icon" name="2" checked-color="#72BB29" />
            </van-cell>
          </van-cell-group>
        </van-radio-group>
        <van-cell @click="show_juan=false"> <span class="btn bg_g col_wh ft_mid">确定</span></van-cell>
       
      </van-popup>
   
    </div>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import deZhi from "./adderss";
import Info from "./../order/child/carIfo";
import btn from "./../order/child/btn";

export default {
  data() {
    return {
      // 禁止点击遮罩层
      jin:false,
      // 0=> 确认订单 1=>订单详情
      direct: 0,
       radio: '1',
      tit: "确认订单",
      num: "0",
      show_juan: false,
      goHome: false,
      goCrd: true
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {
    deZhi,
    Info,
    btn
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
      let parmas = {
        cmd: "productDetail",
        productid: "",
        uid: "",
        
      };
      this.postRequest(params).then(res => {
        console.log(res);
      });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {
    changej(num) {
      this.show_juan = true;
      switch(num){
        case 0:

      }
    },
    changeMothed(num) {
      switch (num) {
        case 0:
          this.goHome = false;
          this.goCrd = true;
          break;
        case 1:
          this.goHome = true;
          this.goCrd = false;
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

.order_de_info {
  margin-top: 0.5rem;
  height: 100%;
  .tit {
    line-height: 0.49rem;
    overflow: hidden;
    .more_j {
      display: block;
      width: 0.09rem;
      height: 0.15rem;
      background: url("/static/icon/dingdan-jiantou.png") no-repeat;
      background-size: 100% 100%;
      margin-left: 0.15rem;
    }
  }
  .btn{
    height: .44rem;
    width: 3.45rem;
    margin:0 auto;
    display: block;
    text-align: center;
    line-height: .44rem;
    border-radius: .05rem;
    margin-top: .63rem;
  }
  .mothed {
    padding: 0 0.15rem;
    li {
      line-height: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 0.16rem;
        color: #333333;
      }
      div {
        width: 0.23rem;
        height: 0.23rem;
        position: relative;
        img {
          position: absolute;
          top: 0;
        }
      }
    }
  }
  .de_info {
    padding: 0.07rem 0.15rem;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 0.27rem;
    }
  }

  .no_more {
    height: 0.2rem;
  }
  .end {
    position: fixed;
    bottom: 0;
    height: 0.49rem;
    width: 100%;
    z-index: 999;
    .ok {
      height: 0.49rem;
      overflow: hidden;
      span {
        display: block;
        float: right;
      }
      .lin_h {
        line-height: 0.49rem;
        margin-right: 0.15rem;
      }
      .sub {
        padding: 0.17rem 0.23rem;
      }
    }
  }
}
</style>
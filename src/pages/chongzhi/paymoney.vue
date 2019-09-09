<template>
 <div class="box">
    <h4>充值套餐</h4>
       <ul>
           <li>￥100.00</li>
           <li>￥200.00</li>
           <li>￥300.00</li>
           <li>￥500.00</li>
       </ul>
       <div class="point">输入充值金额：￥<input type="text"></div>
       <div class="line">

       </div>
       <div style="margin-top:.5rem;">
           <button class="btn gbg">充值</button>
           <button class="btn wbg">生成购物卡</button>
       </div>
       <van-popup :show="show"></van-popup>
 </div>
</template>
 
<script>
export default {
 data () {
 return {
     show:false,

 }
 },
methods: {},
 moutend () {}
}
</script>
 
<style scoped lang = "less">
.box{padding:0 .15rem;}
 h4{line-height: .45rem;font-size: .17rem;color: #333333;margin-top:.5rem;}
 ul{display: flex;flex-wrap: wrap;}
 ul li{width: 1.65rem;height: .85rem;border:.01rem solid #72BB29;margin:0 .15rem .15rem 0;display: flex;justify-content: center;align-items: center;color: #72BB29;font-size: .15rem;}
li:nth-child(2n){margin-right: 0;}
p{font-size:.19rem;color: #333333;line-height: .75rem; }
.line{height: .05rem;background-color: #F6F6F6;}
.point{display: flex;padding:.2rem 0;font-size:.17rem;input{margin-left:.1rem;height:.2rem;border-bottom: .01rem solid #333333;width: 1rem;}}
.btn{height: .44rem;display: block;font-size: .14rem;border:none;outline:none;width: 100%;text-align: center;line-height: .44rem;}
.gbg{background-color: #72BB29;color: #FFF;}
.wbg{color:#333333;margin-top: .15rem; }
.active{}
</style>
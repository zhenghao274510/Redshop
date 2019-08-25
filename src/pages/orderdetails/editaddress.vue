<template>
  <div class="box">
     <ul>
       <li><label for="">收货人:<input class="use_name" type="text" placeholder="请输入你的姓名" v-model="name"></label> <van-icon name="clear" size=".16rem" color="#999999" /></li>
       <li><label for="">联系电话:<input type="telphone" placeholder="请输入你的手机号" v-model="telphone"></label> </li>
       <li class="pad_r"><label for="" >所在地区:<input class="one-txt-cut" type="text" placeholder="" v-model="city"></label> <div class="pos" @click="inits"><van-icon name="aim" size=".16rem" color="#72BB29"/> <span>定位</span> </div></li>
       <li><label for="">详细地址:<input type="text" placeholder="" v-model="detailscity"></label> </li>
     </ul>
     <div class="ft_mid col_mix mo_r" @click="save=!save"><div><van-icon name="circle" size=".18rem" v-if="save" /><van-icon name="checked" size=".18rem" color="#72BB29" v-else/></div> <span>设置为默认地址</span> </div>
       <div class="pad">
         <van-button type="primary" size="large" color="#72BB29">保存</van-button>
       </div>
   
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import Getposition from "./../../../static/js/location"
import {Toast} from 'vant'
export default {
  data() {
    return {
      name:'',
      telphone:'',
      city:'',
      detailscity:'',
      save:false
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
     inits() {
      
      Getposition.position();
    },
    // init() {
    //   console.log("定位");
    //   //我就是来定一下位
    //   let self = this;
    //   var map = new AMap.Map("container", {
    //     resizeEnable: true
    //   });
    //   AMap.plugin("AMap.Geolocation", function() {
    //     var geolocation = new AMap.Geolocation({
    //       enableHighAccuracy: true, //是否使用高精度定位，默认:true
    //       timeout: 5000, //超过10秒后停止定位，默认：5s
    //       buttonPosition: "RB", //定位按钮的停靠位置
    //       buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
    //       zoomToAccuracy: true //定位成功后是否自动调整地图视野到定位点
    //     });
    //     map.addControl(geolocation);
    //     geolocation.getCurrentPosition(function(status, result) {
    //       if (status == "complete") {
    //         onComplete(result);
    //       } else {
    //         onError(result);
    //       }
    //     });
    //   });
    //   //解析定位结果
    //   function onComplete(data) {
    //     console.log(data);
    //     Toast("定位成功");
    //     self.city = data.addressComponent.city;
    //     console.log(self.city);
    //     let result = {};
    //     result.city = self.city;
    //     result.lng = data.position.lng;
    //     result.lat = data.position.lat;
    //     localStorage.setItem("point", JSON.stringify(result));
    //   }
    //   //解析定位错误信息
    //   function onError(data) {
    //     Toast("定位失败，请手动定位");
    //     console.log(data);
    //   }
    // },
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
.box{
  margin-top: .5rem;
  ul{
    padding: 0 .15rem;
    li{
      font-size: .14rem;
      height: .45rem;
      display: flex;
      justify-content: space-between;
      align-items: center; 
      border-bottom: .01rem solid #E5E5E5;
      color: #666666;
      position: relative;
      &:nth-child(3){
        width: 2.5rem;
        display: flex;
        .pos{
          position: absolute;
          bottom: 0;
          right: -1.05rem;
          transform: translateY(50%);
          color:#72BB29;
          width:.9rem;
          height:.9rem;
          display: flex;
          align-items: center;
          span{
            margin-left: .05rem;
          }
        }
      }
        .use_name{
          padding-left: .3rem;
        }
      
      input{
        padding-left: .15rem;
         color: #333333;
      }
      
    }
  }
  .mo_r{
    display: flex;
    align-items: center;
    line-height: .45rem;
    padding-left: .15rem;
    div{
      width: .18rem;
      height: .18rem;
      position: relative;
      i{
        position: absolute;
        top: 0;
      }
    }
    span{
      color: #999999;
      text-indent: .1rem;
    }
  }
}
</style>
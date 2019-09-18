import AMap from 'vue-amap'
// import Vue from 'vue'
// Vue.use(VueAMap)
export default{
  GetCurrentCity(){
    var map = new AMap.Map("container", {
      zoom: 14 ,//缩放级别
      // center: this.center //设置地图中心点
      resizeEnable: true,  //地图初始化加载定位到当前城市
    });
    AMap.plugin("AMap.Geolocation", function() {
      var geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, //是否使用高精度定位，默认:true
        timeout: 10000, //超过10秒后停止定位，默认：5s
        buttonPosition: "RB", //定位按钮的停靠位置
        buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true //定位成功后是否自动调整地图视野到定位点
      });
      map.addControl(geolocation);
      geolocation.getCurrentPosition(function(status, result) {
        if (status == "complete") {
          onComplete(result);
        } else {
          onError(result);
        }
      });
    });
    //解析定位结果
    function onComplete(data) {
      // this.loading = false;
      console.log("定位成功", data);
      localStorage.setItem('position',JSON.stringify(data.position));
      // this.center= [data.position.lng, data.position.lat];
    }
    //解析定位错误信息
    function onError(data) {
      console.log("失败" + data);
    }
  }
}
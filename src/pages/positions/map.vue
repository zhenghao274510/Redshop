<template>
  <div class="top">
    <!-- <div id="searchBar">
      <input id="searchInput" placeholder="输入关键字搜素POI" v-model="shu" @blur="listenKeyword" />
      <button id="btn" @click="btn">搜索</button>
    </div>-->
    <van-search v-model=" value " placeholder="请输入搜索关键词" />
    <div id="container" style="width:100%;height:3rem" tabindex="0">
      
   
    </div>
    <div id="searchResults"></div>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import GetPos from "./../../../static/js/location";
export default {
  data() {
    return {
      value:'',
      map: null,
      point: null,
      addresslist: []
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
    // console.log(this.point)
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.map=new Amap.Map()
    GetPos.GetCurrentPosition();
    this.point = JSON.parse(localStorage.getItem("point"));
    // console.log(this.point);
    this.placeSearch2();
  },
  //方法集合
  methods: {
    placeSearch2() {
      let self = this;
      self.map = new AMap.Map("container", {
        resizeEnable: true,
        zoom: 15, //地图显示的缩放级别
        keyboardEnable: false
      });

      var cpoint = new AMap.LngLat(self.point.lng, self.point.lat); //搜索查询的中心点设置
      console.log("位置"+cpoint)

      var MSearch;
      //加载服务插件，实例化地点查询类
      AMap.plugin(["AMap.PlaceSearch"], function() {
        MSearch = new AMap.PlaceSearch({
          pageSize: "10", // 单页显示结果条数
          pageIndex: "1", // 页码
          city: "",
          citylimit: false, //是否强制限制在设置的城市内搜索
          map: self.map, // 展现结果的地图实例
          panel: "searchResults", // 结果列表将在此容器中进行展示。
          autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        });
        //查询成功时的回调函数
        AMap.event.addListener(MSearch, "complete", function(e) {
          console.log(e);
        });
        AMap.event.addListener(MSearch, "listElementClick", function(e) {
          console.log(e.data);
          var add = {};
          add.lng = e.data.location.lng;
          add.lat = e.data.location.lat;
          add.address = e.data.pname + e.data.cityname + e.data.adname; //返回地址描述
          add.prov = e.data.pname; //返回地址描述省份
          add.city = e.data.cityname; //返回地址描述城市
          add.town = e.data.adname; //返回地址描述区县
          add.addname = e.data.name; //返回地址地名
          self.addresslist = add;
          console.log(self.addresslist);
        });
        var geocoder;
        self.map.plugin(["AMap.Geocoder"], function() {
          geocoder = new AMap.Geocoder({
            radius: 1000, //以已知坐标为中心点，radius为半径，返回范围内兴趣点和道路信息
            extensions: "all" //返回地址描述以及附近兴趣点和道路信息，默认"base"
          });
        });
        // //为地图注册click事件获取鼠标点击出的经纬度坐标
        var clickEventListener = self.map.on("click", function(e) {
          let lnglatXY = [e.lnglat.getLng(), e.lnglat.getLat()];
          geocoder.getAddress(lnglatXY, function(status, result) {
            if (status === "complete" && result.info === "OK") {
              // 创建点覆盖物
              var marker = new AMap.Marker();
              self.geocoder_CallBack(
                result,
                e.lnglat.getLng(),
                e.lnglat.getLat()
              );
            }
          });
        });
        //周边搜索
        MSearch.searchNearBy("", cpoint, 1000);
      });
    },
    amapView() {
      let self = this;
      var jwd, city;
      var local = window.sessionStorage;
      self.map = new AMap.Map("container", {
        resizeEnable: true,
        zoom: 15, //地图显示的缩放级别
        keyboardEnable: false
      });

      AMap.plugin(["AMap.Autocomplete", "AMap.PlaceSearch"], function() {
        //构造地点查询类
        var placeSearch = new AMap.PlaceSearch({
          pageSize: "10", // 单页显示结果条数
          pageIndex: "1", // 页码
          city: "", // 兴趣点城市
          citylimit: false, //是否强制限制在设置的城市内搜索
          map: self.map, // 展现结果的地图实例
          panel: "searchResults", // 结果列表将在此容器中进行展示。
          autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        });
        //关键字查询
        placeSearch.search(self.shu);
        AMap.event.addListener(placeSearch, "listElementClick", function(e) {
          console.log(e.data);
          var add = {};
          add.lng = e.data.location.lng;
          add.lat = e.data.location.lat;
          add.address = e.data.pname + e.data.cityname + e.data.adname; //返回地址描述
          add.prov = e.data.pname; //返回地址描述省份
          add.city = e.data.cityname; //返回地址描述城市
          add.town = e.data.adname; //返回地址描述区县
          add.addname = e.data.name; //返回地址地名
          self.addresslist = add;
          console.log(self.addresslist);
        });
        AMap.event.addListener(placeSearch, "markerClick", function(e) {
          console.log(e.data);
          var add = {};
          add.lng = e.data.location.lng;
          add.lat = e.data.location.lat;
          add.address = e.data.pname + e.data.cityname + e.data.adname; //返回地址描述
          add.prov = e.data.pname; //返回地址描述省份
          add.city = e.data.cityname; //返回地址描述城市
          add.town = e.data.adname; //返回地址描述区县
          add.addname = e.data.name; //返回地址地名
          self.addresslist = add;
          console.log(self.addresslist);
        });
        var autoOptions = {
          city: "全国", //城市，默认全国
          input: "keyword" //使用联想输入的input的id
        };
        let autocomplete = new AMap.Autocomplete(autoOptions);
        var placeSearch = new AMap.PlaceSearch({
          city: "全国",
          map: self.map
        });
        AMap.event.addListener(autocomplete, "select", function(e) {
          console.log(e);
          //TODO 针对选中的poi实现自己的功能
          placeSearch.setCity(e.poi.adcode);
          placeSearch.search(e.poi.name);
        });
      });

      //比例尺插件
      self.map.plugin(["AMap.Scale"], function() {
        var scale = new AMap.Scale();
        self.map.addControl(scale);
      });

      var geocoder;
      self.map.plugin(["AMap.Geocoder"], function() {
        geocoder = new AMap.Geocoder({
          radius: 1000, //以已知坐标为中心点，radius为半径，返回范围内兴趣点和道路信息
          extensions: "all" //返回地址描述以及附近兴趣点和道路信息，默认"base"
        });
      });

      // //为地图注册click事件获取鼠标点击出的经纬度坐标
      var clickEventListener = self.map.on("click", function(e) {
        let lnglatXY = [e.lnglat.getLng(), e.lnglat.getLat()];
        geocoder.getAddress(lnglatXY, function(status, result) {
          if (status === "complete" && result.info === "OK") {
            // 创建点覆盖物
            var marker = new AMap.Marker();
            self.geocoder_CallBack(
              result,
              e.lnglat.getLng(),
              e.lnglat.getLat()
            );
          }
        });
      });
    },

    geocoder_CallBack(data, x, y) {
      let self = this;
      console.log(data);
      console.log(data.regeocode.formattedAddress);
      console.log(x, y);
      var add = {};
      add.lng = x;
      add.lat = y;
      add.address =
        data.regeocode.addressComponent.province +
        data.regeocode.addressComponent.city +
        data.regeocode.addressComponent.district; //返回地址描述
      add.prov = data.regeocode.addressComponent.province; //返回地址描述省份
      add.city = data.regeocode.addressComponent.city; //返回地址描述城市
      add.town = data.regeocode.addressComponent.district; //返回地址描述区县
      if (data.regeocode.aois != "") {
        add.addname = data.regeocode.aois[0].name; //返回地址地名
      }
      self.addresslist = add;
      console.log(self.addresslist);
      let marker = new AMap.Marker({
        position: new AMap.LngLat(x, y),
        icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
        offset: new AMap.Pixel(-13, -30)
      });
      //清空覆盖物
      self.map.clearMap();
      //添加一个覆盖物
      self.map.add(marker);

      AMap.service(["AMap.PlaceSearch"], function() {
        //构造地点查询类
        var placeSearch = new AMap.PlaceSearch({
          type:
            "汽车服务|汽车销售|汽车维修|摩托车服务|餐饮服务|购物服务|生活服务|体育休闲服务|医疗保健服务|住宿服务|风景名胜|商务住宅|政府机构及社会团体|科教文化服务|交通设施服务|金融保险服务|公司企业|道路附属设施|地名地址信息|公共设施", // 兴趣点类别
          pageSize: "10", // 单页显示结果条数
          pageIndex: "1", // 页码
          city: "", // 兴趣点城市
          citylimit: true, //是否强制限制在设置的城市内搜索
          map: self.map, // 展现结果的地图实例
          panel: "searchResults", // 结果列表将在此容器中进行展示。
          autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        });

        var cpoint = [x, y]; //中心点坐标
        placeSearch.searchNearBy("", cpoint, 1000, function(status, result) {});
        AMap.event.addListener(placeSearch, "listElementClick", function(e) {
          console.log(e.data);
          var add = {};
          add.lng = e.data.location.lng;
          add.lat = e.data.location.lat;
          add.address = e.data.pname + e.data.cityname + e.data.adname; //返回地址描述
          add.prov = e.data.pname; //返回地址描述省份
          add.city = e.data.cityname; //返回地址描述城市
          add.town = e.data.adname; //返回地址描述区县
          add.addname = e.data.name; //返回地址地名
          self.addresslist = add;
          console.log(self.addresslist);
        });
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
  destroyed() {
    this.map.destroy();
  },
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {}
};
</script>
<style scoped lang='less' rel='stylesheet/stylus'>
/deep/.amap-copyright {
  display: none;
}
#searchResults {
  height: 3.2rem;
  overflow-y: auto;
}
.top{
  margin-top: .5rem;
}
</style>
import {Toast} from 'vant'
let getCurrentCityName = function() {
	return new Promise(function(resolve, reject) {
		let myCity = new BMap.LocalCity()
		myCity.get(function(result) {
			// console.log(result)
			resolve(result.name)
			console.log(result.center)
			localStorage.setItem('point',JSON.stringify(result.center))
		})
	})
}
const position=function(){
	Toast("正在定位中，请稍等。。。");
		console.log("定位");
		//我就是来定一下位
		let self = this;
		var map = new AMap.Map("container", {
		  resizeEnable: true
		});
		AMap.plugin("AMap.Geolocation", function() {
		  var geolocation = new AMap.Geolocation({
			enableHighAccuracy: true, //是否使用高精度定位，默认:true
			timeout: 5000, //超过10秒后停止定位，默认：5s
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
		  console.log(data);
		  Toast("定位成功");
		  self.city = data.addressComponent.city;
		  console.log(self.city);
		  let result = {};
		  result.city = self.city;
		  result.lng = data.position.lng;
		  result.lat = data.position.lat;
		  localStorage.setItem("point", JSON.stringify(result));
		}
		//解析定位错误信息
		function onError(data) {
		  Toast("定位失败，请手动定位");
		  console.log(data);
		}
	 
}

export default {getCurrentCityName,position}

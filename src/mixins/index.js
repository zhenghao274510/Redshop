import axios from 'axios'
import {
  Toast
} from 'vant';

// 环境的切换
// if (process.env.NODE_ENV == 'development') {
// 	axios.defaults.baseURL = 'http://112.126.98.64'
// } else if (process.env.NODE_ENV == 'debug') {
// 	axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {
// 	axios.defaults.baseURL = 'http://112.126.98.64'
// }

axios.defaults.timeout = 10000

// axios.interceptors.response.use(
// response => {
// 	return response;
// },
// error => {
// 	if(error.message.includes('timeout')){   // 判断请求异常信息中是否含有超时timeout字符串
// 	console.log("错误回调", error);
// 	return Promise.reject(error);          // reject这个错误信息
// 	}
// 	return Promise.reject(error);
// });

export default {
  methods: {
    goto(data) {
      if (data == '0') {
        this.$router.push({
          name: 'index',
          params: {}
        })
      } else if (data == '1') {
        this.$router.push({
          name: 'rank',
          params: {}
        })
      } else if (data == '2') {
        this.$router.push({
          name: 'my',
          params: {}
        })
      }

    },
    // back() {
    //   this.$router.back(-1)
    // },
    //  数据请求
    postRequest(data = {}, method = 'post') {
      return new Promise((resolve, reject) => {
        axios({
            url: encodeURI("http://192.168.3.254:8090/wineshop/api/service?json=" + JSON.stringify(data)),
            method: method,
            headers: {
              'Content-Type': 'application/json'
            }

          })
          .then(res => {
            Toast.clear();
            //成功
            if (res.data.result == '0') {
              resolve(res)
            } else {
              if (res.data.resultNote == '扫描失败，二维码数据有误') {
                resolve(res)
              } else {
                Toast(res.data.resultNote);
              }
            }

          })
          .catch(res => {
            //失败
            // reject(res)
            Toast('请求超时！')
          })
      })
    },

    //  定位


    GetCurrentCity() {
      Toast('正在努力定位中');
      const self = this
      AMap.plugin('AMap.Geolocation', function () {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
        })

        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', onComplete);
        AMap.event.addListener(geolocation, 'error', onError);

        function onComplete(data) {
          // data是具体的定位信息
          console.log('定位成功信息：', data);
          localStorage.setItem('address', JSON.stringify(data));
        }

        function onError(data) {
          // 定位出错
          console.log('定位失败错误：', data);
          Toast('定位失败');
          // 调用ip定位
          self.getLngLatLocation();
        }
      })
    },
    getLngLatLocation() {
      AMap.plugin('AMap.CitySearch', function () {
        var citySearch = new AMap.CitySearch();
        citySearch.getLocalCity(function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            // 查询成功，result即为当前所在城市信息
            console.log('通过ip获取当前城市：', result)
            
            //逆向地理编码
            AMap.plugin('AMap.Geocoder', function () {
              var geocoder = new AMap.Geocoder({
                // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
                city: result.adcode
              })

              var lnglat = result.rectangle.split(';')[0].split(',');
              geocoder.getAddress(lnglat, function (status, data) {
                if (status === 'complete' && data.info === 'OK') {
                  // result为对应的地理位置详细信息
                  console.log(data);
                  localStorage.setItem('address', JSON.stringify(data));
                }
              })
            })
          }
        })
      })
    }


  },

  // 图片上传
  postFile(url, data = {}, method = 'post') {
    return new Promise((resolve, reject) => {
      axios({
          url: 'http://192.168.3.254:8099/wineshop/' + url,
          method: method,
          data: data,
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          //成功
          resolve(res)
        })
        .catch(res => {
          //失败
          reject(res)
        })
    })
  },
  GetQueryString(name) {
    var url = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var newUrl = window.location.search.substr(1).match(url);
    if (newUrl != null) {
      return unescape(newUrl[2]);
    } else {
      return false;
    }
  }




}

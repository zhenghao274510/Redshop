<template>
<!-- 评价 -->
  <div class="box">
    <ul class="ev_cont">
      <li>
        <div class="ev_info">
          <div class="ev_name">
            <img src="/static/test/bg.png" alt />
            <div class="ev_star">
              <p>用户昵称</p>
              <van-rate v-model="value" />
            </div>
          </div>
          <span class="ev_time">2019-07-01</span>
        </div>
        <p class="ev_main">已经收到，配送很快，价格也很实惠，味道纯正，价格合理, 非常喜欢。</p>
        <ul class="show_img">
           <li><img src="/static/test/bg.png" alt=""></li>
           <li><img src="/static/test/bg.png" alt=""></li>
           <li><img src="/static/test/bg.png" alt=""></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
export default {
  data() {
    return {
      value: 5
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {},
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
  font-size: 0.13rem;
}
.box {
  .ev_cont {
    margin-top: 0.5rem;
    font-size: 0;
    li {
      padding: 0.15rem;
      border-bottom: 0.01rem solid #e5e5e5;
      .ev_info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .ev_name {
          display: flex;
          img {
            width: 0.45rem;
            height: 0.45rem;
            border-radius: 50%;
          }
          .ev_star {
            margin-left: 0.12rem;

            p {
              line-height: 0.25rem;
              color: #333;
              font-size: 0.14rem;
            }
          }
        }
        .ev_time {
          font-size: 0.12rem;
          color: #999999;
        }
      }
      .ev_main{
        line-height: .2rem;
        font-size: .13rem;
        margin-top: .1rem;
      }
      .show_img{
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        align-items: center;
        li{
          margin-right: .11rem;
          flex: 1;
          border: none;
          &:last-child{
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>
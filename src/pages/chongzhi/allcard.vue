<template>
<div class="allbox">
 <van-tabs v-model="active" >
  <van-tab title="已购买"><li-pin></li-pin></van-tab>
  <van-tab title="已失效"><li-pin></li-pin></van-tab>

</van-tabs>
</div>


</template>
 
<script>
import liPin from '@/components/public/lipincard'
export default {
 data () {
 return {
      active: 2
 }
 },
methods: {},
 moutend () {},
 components:{
     liPin
 }
}
</script>
 
<style scoped lang = "less">
 .allbox{
   margin-top: .5rem;
 }
</style>
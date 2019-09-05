<template>


<van-popup v-model="$store.state.isLoading" @click="$store.state.isLoading=true"><van-loading size="24px" type="spinner" vertical color="#FFF">加载中...</van-loading></van-popup>
</template>
 
<script>
export default {
 data () {
 return {}
 },
methods: {},
 moutend () {}
}
</script>
 
<style scoped lang = "less">

</style>
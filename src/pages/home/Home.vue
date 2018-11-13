<template>
  <!-- template只能向外暴漏一个标签 -->
  <div>
    <HomeHeader/>
    <HomeSwiper/>
    <div>222</div>
    <!-- <router-link :to="{name:'List'}">列表</router-link> -->
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name:'Home',
  components:{
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style scoped>

</style>



<template>
  <!-- template只能向外暴漏一个标签 -->
  <div>
    <HomeHeader/>
    <!-- <router-link :to="{name:'List'}">列表</router-link> -->
  </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name:'Home',
  components:{
    HomeHeader
  }
}
</script>

<style scoped>

</style>



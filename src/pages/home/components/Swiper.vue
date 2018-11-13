<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper_img" :src="item.url" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
      <!-- <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>
<script>
  export default {
    name:'HomeSwiper',
    data(){
      return{
        swiperOption:{
          pagination: {
            el: '.swiper-pagination'
          },
          loop:true
        },
        swiperList: [
          {
            id:'01',
            url:'http://img1.qunarzz.com/piao/fusion/1809/12/856f100069809e02.jpg_750x200_e3485a2b.jpg'
          },
          {
            id:'02',
            url:'http://img1.qunarzz.com/piao/fusion/1806/1c/4847ea66072c7b02.jpg_750x200_c32457fb.jpg'
          },
          {
            id:'03',
            url:'http://img1.qunarzz.com/piao/fusion/1810/6e/4a5551bbb189d902.jpg_750x200_25257467.jpg'
          },
          {
            id:'04',
            url:'http://img1.qunarzz.com/piao/fusion/1811/ce/77e115fea8f99102.jpg_750x200_a2d0fcd2.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">
  // 样式穿透，不受当前组件影响
  .wrapper >>> .swiper-pagination-bullet-active
    background red
  .wrapper 
    overflow hidden
    width 100%
    height 0
    padding-bottom 27%
    .swiper_img
      width 100%
</style>
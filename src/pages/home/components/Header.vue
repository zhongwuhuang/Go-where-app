<template>
  <div class="header">
      <div class="header_left">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="header_input">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="请输入">
      </div>
      <div class="header_right">
        城市
        <i class="iconfont icon-jiantou1"></i>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="stylus">
  // 在css中引入加一个 ~
  @import '~styles/varibles.styl'
  .header
    display flex
    line-height .86rem
    background $bgColor
    color #fff
    .header_left
      width .64rem
      float left 
      .icon-fanhui
        margin-left: .2rem
    .header_input
      position relative
      flex 1
      height .64rem
      line-height .64rem
      margin-top .11rem
      margin-left .2rem
      background #fff
      border-radius .1rem
      overflow hidden
      .icon-sousuo
        position absolute
        color #000
        left 0.04rem
      input
        width 100%
        height 100%
        padding-left .4rem
        box-sizing border-box
        vertical-align unset
    .header_right
      width 1.24rem
      float right
      text-align center
      .icon-jiantou1
        font-size .24rem
</style>



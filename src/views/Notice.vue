<template>
  <div id="notice">
      <span class="iconfont">&#xe614;</span>
      <p>评论区禁止发广告，一经发现将移入黑名单!</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #notice {
        width: 800px;
        border: 2px dotted #444;
        border-radius: 22px;
        margin-bottom: 25px;
        padding-left: 25px;
        box-sizing: border-box;
        line-height: 50px;
    }
    #notice span {
        position: relative;
        top: 2.5px;
        display: inline-block;
        font-size: 1.5625rem;
        color: #444;
    }
    #notice p {
        display: inline-block;
        margin-left: 25px;
    }
</style>
<template>
  <div id="notice">
      <span class="iconfont">&#xe614;</span>
      <p>朋友，感谢你的到来~</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #notice {
        /* width: 50rem; */
        border: 2px dotted #444;
        border-radius: 22px;
        margin-bottom: var(--mtop);
        padding-left: 25px;
        box-sizing: border-box;
        line-height: 50px;
        box-shadow: 0 0 10px #ccc;
        font-size: 18px;
    }
    #notice span {
        position: relative;
        top: 2.5px;
        display: inline-block;
        font-size: 25px;
        color: #444;
    }
    #notice p {
        display: inline-block;
        margin-left: 25px;
    }
</style>
<template>
  <div id="search">
      <div class="c-search">
        <h2>搜索</h2>
        <input type="text" autofocus>
      </div>
      <div class="coverBg" @click="toggleSearch"></div>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        toggleSearch() {
            this.$emit('toggleSearch',false)
        }
    },
}
</script>

<style>
    #search .c-search {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 12;
        text-align: center;
        color: #fff;
    }
    #search .c-search h2 {
        position: relative;
        bottom: 100px;
    }
    #search .c-search input {
         width: 800px;
        height: 50px;
        border-radius: 22px;
        border: none;
        padding-left: 15px;
        box-shadow: 0 0 15px #444;
        font-size: 20px;
    }
    #search .coverBg {
        position: fixed;
        left: 0;
        top: 0;
        width:100vw;
        height: 100vh;
        background-color: rgba(1,1,1,.5);
        z-index: 11;
    }
    @keyframes show {
        0% {
            
        }
        100% {

        }
    }
</style>
<template>
  <div id="search" @click.self="toggleSearch">
    <div class="c-search">
        <h2>搜索</h2>
        <input type="text" autofocus>
        <div class="more"></div>
    </div>
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
        },
    },
}
</script>

<style>
    #search .c-search {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-130px);
        z-index: 12;
        text-align: center;
        color: #fff;
        animation: show .5s;
    }
    #search .c-search h2 {
        position: relative;
        bottom: 80px;
        font-size: 35px;
        color: orange;
    }
    #search .c-search input {
         width: 800px;
        height: 50px;
        border-radius: 22px;
        border: none;
        padding-left: 15px;
        box-shadow: 0 -5px 15px #444;
        font-size: 20px;
    }
    #search{
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
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
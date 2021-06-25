<template>
  <div id="backTop"><a href="javascript:void(0)" :class="{isShow:getScrollTop > 200}" @click="getBackTopFun"></a></div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
        getScrollTop() {
            return this.$store.getters.getScrollTop.value
        },
        getBackTopFun() {
            return this.$store.getters.getBackTop.value
        }
    },
    created() {
        
    },
}
</script>

<style>
    .isShow {
        background-position-y: -35vh !important;
        animation: backTop 1.6s linear infinite;
        height: 100vh !important;
    }
    #backTop a{
        position: fixed;
        right: 1.875rem;
        height: 0vh;
        width: 80px;
        background: url(~assets/img/scroll.png) no-repeat center;
        background-position-y: -1050px;
        z-index: 9;  
        transition: all .3s linear;  
    }
    @keyframes backTop {
        0%,100% {
            transform: translateY(-10px);
            -webkit-transform: translateY(-10px);
            -moz-transform: translateY(-10px);
            -ms-transform: translateY(-10px);
        }
        50% {
            transform: translateY(0);
            -webkit-transform: translateY(0px);
            -moz-transform: translateY(0px);
            -ms-transform: translateY(0px);
        }
    }
</style>
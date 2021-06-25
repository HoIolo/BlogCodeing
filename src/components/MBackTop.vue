<template>
  <div class="mBackTop" @click="getBackTopFun" v-show="getScrollTop > 300">

  </div>
</template>

<script>
export default {
    data() {
        return {
            isMBackTopShow: false
        }
    },
    computed: {
        getScrollTop() {
            return this.$store.getters.getScrollTop.value
        },
        getBackTopFun() {
            return this.$store.getters.getBackTop.value
        }
    }
}
</script>

<style scoped>
.mBackTop {
    position: fixed;
    right: 0;
    bottom: 140px;
    background-image: url(~assets/img/top.png);
    width: 40px;
    height: 40px;
    background-size: cover;
    /* background-color: var(--baseColor); */
    animation: show .5s;
}
</style>
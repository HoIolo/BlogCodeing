<template>
  <div class="container-right" v-if="getWindow">
      <UserInfo />
  </div>
</template>

<script>
import UserInfo from "components/UserInfo.vue";
export default {
    components: {
        UserInfo
    },
    computed: {
        getWindow() {
            return this.$store.getters.getWindowWidth.value > 960
        }
    } 
}
</script>

<style>
.container-right {
  display: flex;
  flex-direction: column;
  margin-left: 25px;
}
</style>
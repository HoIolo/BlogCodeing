<template>
  <div id="home">
    <Bgimg>Hello,friends</Bgimg>
    <div class="container">
      <div class="container-left">
        <Notice />
        <Article />
      </div>
      <div class="container-right">
        <UserInfo/>
      </div>
    </div>
  </div>
</template>

<script>
import Article from "views/Article.vue";
import Notice from "views/Notice.vue";
import Bgimg from 'views/Bgimg.vue'

import UserInfo from "components/UserInfo.vue";

export default {
  name: "Home",
  components: {
    Article,
    Notice,
    UserInfo,
    Bgimg
  },
};
</script>

<style scoped>
#bgcBox {
  height: 100vh;
}
</style>

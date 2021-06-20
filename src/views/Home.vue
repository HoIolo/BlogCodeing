<template>
  <div id="home">
      <div id="bgcBox"></div>
      <div class="container">
        <Notice/>
        <Article/>
      </div>

  </div>
</template>

<script>
import Article from 'views/Article.vue'
import Notice from 'views/Notice.vue'

export default {
  name: 'Home',
  components: {
    Article,
    Notice
  }
}
</script>

<style>
    #home #bgcBox {
        height: 100vh;
        background: url("~assets/img/48.jpg") no-repeat;
        /* background-position: -35px -125px; */
        background-size: cover;
        background-attachment: fixed;
        margin-bottom: 50px;
    }
    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 50px;
    }
</style>

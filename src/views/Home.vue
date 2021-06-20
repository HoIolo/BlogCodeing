<template>
  <div id="home">
      <div id="bgcBox">
        <div class="middleInfo">
          <p>Hello,friends</p>
          <div class="socialContact">
            
          </div>
        </div>
      </div>
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
    #bgcBox .middleInfo {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
    #bgcBox .middleInfo p {
      font-size: 85px;
      color: #fff;
      font-weight:900;
      text-shadow: 0 0 15px;
      animation: textChange 3s linear infinite;
    }
    @keyframes textChange {
      0%,100% {
        text-shadow: 4px 6px 25px rgb(241, 101, 101);
      }
      50% {
        text-shadow: 0 0 10px rgb(241, 101, 101);
      }
    }
    #home #bgcBox {
      position: relative;
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

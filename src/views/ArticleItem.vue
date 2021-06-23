<template>
  <div class="articleItem">
      <div class="content">
          <div class="releaseTime">
              <span class="iconfont">&#xe62b;</span>
              <span class="showtime">2021-6-20</span>
          </div>
          <div class="articleTitle">
              <p><router-link to="/guiDan">本博客搭建过程</router-link></p>
          </div>
          <div class="see">
              <p><span class="iconfont">&#xe668;</span><span class="num">1</span></p>
              <p><span class="iconfont">&#xe67b;</span><span class="num">0</span></p>
              <p><span class="iconfont">&#xe66b;</span> <span class="type">文章</span></p>
          </div>
          <div class="summary">
              概述
          </div>
      </div>
      <div class="bgi">
          <div class="imgBg">

          </div>
          <!-- <img src="~assets/img/sw.jpg" alt="纱雾"> -->
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .articleItem {
        margin: 25px 0;
        display: flex;
        border-radius: 11px;
        overflow: hidden;
        box-shadow: 0 0 10px var(--shadow);
        transition: box-shadow .5s;
    }
    @media screen and (max-width:768px) {
        .articleItem {
            flex-direction: column;
            height: 350px;
        }
        .summary {
            height: 35px !important;
        }
    }
    .articleItem:hover {
        box-shadow: 0 0 15px var(--hshadow);
    }
    .articleItem:hover .bgi .imgBg {
        transform: scale(1.2);
    }
    .articleItem .content {
        padding: 10px;
    }
    .articleItem .content ,
    .articleItem .bgi {
        flex: 1;
    }
    .articleTitle p {
        display: inline-block;
        margin: 0 auto;
        padding: 1.5625rem;
        font-size: 1.5625rem;
    }
    .articleTitle p::after {
        content: "";
        text-align: center;
        margin: 0 auto;
        display: block;
        width: 0px;
        height: 4px;
        background-color: #2abce9;
        transition: 1s all cubic-bezier(.46, 1, .23, 1);
    }
    .articleTitle p:hover::after {
        width: 10.9375rem;
    }
    .see {
        display: flex;
        padding: 1.5625rem;
        padding-top: 0;
        border-bottom: 1px dotted #ccc;
    }
    .see p {
        flex: 1;
    }
    .see p span {
        margin-left: 5px;
    }
    .bgi {
        overflow: hidden;
    }
    
    .bgi .imgBg {
        width: 100%;
        height: 100%;
        background-image: url(~assets/img/sw.jpg);
        background-size: cover;
        transition: transform .5s;
    }
    .summary {
        height: 90px;
    }
</style>
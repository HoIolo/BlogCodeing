<template>
  <div class="userInfo">
      <div class="userIns">
          <img src="~assets/img/me.jpg" alt="">
          <div class="userName">小析</div>
          <div class="userQianMing">闲人罢了·</div>
      </div>
      <div class="userData">
          <div class="userArticle">文章</div>
          <div class="label">标签</div>
          <div class="article-num">1</div>
          <div class="labek-num">0</div>
      </div>
      <div class="userContact">
          <a href="javascript:void(0)"><span class="iconfont" title="QQ">&#xe876;</span></a>
          <a href="javascript:void(0)"><span class="iconfont" title="Github">&#xe534;</span></a>
          <a href="javascript:void(0)"><span class="iconfont" title="WeChat">&#xe6db;</span></a>
          <a href="javascript:void(0)"><span class="iconfont" title="Bilibili">&#xe62a;</span></a>
      </div>
  </div>
</template>

<script>
export default {
    computed: {
        
    }
}
</script>

<style>
    .userInfo {
        width: 15.625rem;
        border-radius: 11px;
        padding: 20px 20px 0;
        font-weight: 600;
        font-family: serif;
        box-shadow: 0 0 10px var(--shadow);
        transition: box-shadow .5s;
        font-size: var(--fontSize);
    }
    .userInfo:hover {
        box-shadow: 0 0 20px var(--hshadow);
    }
    .userInfo div {
        margin: 5px 0;
    }
    .userInfo .userIns {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .userInfo .userIns img {
        display: block;
        margin: 0 auto;
        width: 7.5rem;
        border-radius: 50%;
    }
    .userData div {
        text-align: center;
        display: inline-block;
        width: 6.25rem;
    }
    .userData {
        display: flex;
        flex-wrap: wrap;
        border-bottom: 1px dotted #ccc;
    }
    .userContact {
        display: flex;
    }
    .userContact a {
        display: inline-block;
        flex: 1;
        text-align: center;
    }
    .userContact a:hover {
        color: orange;
    }
    .userContact a span {
        font-size: 25px;
    }
    @media screen and (max-width:768px) {
        .userData {
            display: none;
        }
        .userContact {
            display: none;
        }
        .userInfo {
            width: 100%;
            box-shadow: none;
        }
        .userInfo:hover {
            box-shadow: none;
        }
    }
</style>
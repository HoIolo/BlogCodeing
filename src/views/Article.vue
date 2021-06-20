<template>
  <div class="article">
      <h2><span class="iconfont">&#xe618;</span>Article</h2>
      <div class="articleItems">
          <ArticleItem/>
      </div>
      <div class="getMore">
          <button>MoreArticle</button>
      </div>
  </div>
</template>

<script>
import ArticleItem from 'views/ArticleItem.vue'

export default {
    components: {
        ArticleItem
    }
}
</script>

<style>
    .article {
        width: 800px;
    }
    .article h2 {
        padding-bottom: 5px;
        border-bottom: 2px dotted #444;
        margin-bottom: 25px;
    }
    .article h2 span {
        padding-right: 5px;
        font-size: 25px;
    }
    .getMore {
        display: block;
        text-align: center;
    }
    .getMore button {
        outline: none;
        padding: 10px 20px;
        border-radius: 22px;
        border: 2px solid #ccc;
        background: none;
        font-size: 16px;
        transition: all .5s;
    }
    .getMore button:hover {
        border: 2px solid #2abce9;
        color: #2abce9;
        cursor: pointer;
    }
</style>
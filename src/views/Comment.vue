<template>
  <div id="comment">
      <div class="commentTop">
          <div class="uInfo">
              <div class="ulogo">
                  <img src="~assets/img/me.jpg" alt="小析">
              </div>
              <div class="commenter">
                  <p class="uname">小析</p>
                  <p><time>2021-6-21</time></p>
              </div>
          </div>
          <div class="deleteBtn">
              <button>删除</button>
          </div>
      </div>
      <div class="commentBottom">
          首次评论~
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#comment {
    display: flex;
    flex-direction: column;
    width: var(--xBoxWidth);
    padding: 15px;
    box-shadow: 0 0 10px var(--shadow);
    margin-top: var(--mtop);
    border-radius: var(--radius);
}
.commentTop {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
}
.uInfo {
    display: flex;
}
.ulogo img {
    width: 60px;
    border-radius: 50%;
}
.commenter {
    margin-left: 5px;
    line-height: 30px;
    text-align: center;
}
.commenter .uname {
    color: red;
}
.commenter time {
    font-size: 12px;
    font-family: serif;
    color: rgb(107, 145, 202);
}
.commentBottom {
    padding: 15px 0;
}
.deleteBtn button {
    border: none;
    width: 50px;
    height: 30px;
    background-color: rgb(230, 78, 67);
    color: #fff;
    cursor: pointer;
    border-radius: var(--radius);
}
</style>
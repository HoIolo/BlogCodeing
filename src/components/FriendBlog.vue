<template>
  <div class="friendBlog">
      <div class="headImg">
          <img src="~assets/img/me.jpg" alt="">
      </div>
      <div class="friendInfo">
          <p class="friendName">XiaoXi</p>
          <p class="friendIns">闲人</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.friendBlog {
    display: flex;
    justify-content: flex-start;
    margin: 5px 0;
    width: 240px;
    border-radius: var(--radius);
    transition: all .5s;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.friendBlog:hover {
    background-color: rgb(61, 228, 214);
}
.friendInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.friendName {
    font-size: 20px;
}
.friendBlog .headImg {
    width: 6.25rem;
    padding: 15px;
    text-align: center;
}
.friendBlog p {
    margin: 5px 0;
}
.friendInfo .friendIns {
    font-size: 10px;
    color: #444;
}
img {
    width: 100%;
    border-radius: 50%;
    vertical-align: middle;
}
</style>
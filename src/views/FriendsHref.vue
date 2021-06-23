<template>
  <div class="friendsHref">
      <Bgimg>友链</Bgimg>
      <Container>
          <ContainerLeft>
              <template v-slot:containerLeftTop>
                  <div class="fhrefs">
                      <p class="fhTitle">dalaoのBlog</p>
                      <div class="ps">ps:排序为随机</div>
                      <div class="friendHrefBlog">
                          <FriendBlog/>
                          <FriendBlog/>
                          <FriendBlog/>
                      </div>
                  </div>
              </template>
          </ContainerLeft>
      </Container>
  </div>
</template>

<script>
import Bgimg from 'views/Bgimg.vue'
import Container from 'components/container/Container.vue'
import ContainerLeft from 'components/container/ContainerLeft.vue'
import FriendBlog from 'components/FriendBlog.vue'

export default {
    components: {
        Bgimg,
        Container,
        ContainerLeft,
        FriendBlog
    }
}
</script>

<style scoped>
.fhrefs {
    width: 50rem;
    height: 500px;
    background-color: rgb(245, 245, 245);
}
.fhTitle {
    position: relative;
    text-align: center;
    line-height: 50px;
    background-color: rgba(221, 221, 221, 0.5);
    font-size: 25px;
    color: var(--baseColor);
}
.fhTitle::before {
    content: "";
    position: absolute;
    display: block;
    width: 6px;
    height: 100%;
    background-color: var(--baseColor);
}
.ps {
    margin-top: 5px;
    text-align: center;
}
.friendHrefBlog {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding: 35px;
}
</style>
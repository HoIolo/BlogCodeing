<template>
  <div id="home">
    <Bgimg>Hello,friends</Bgimg>
    <Container>
      <ContainerLeft>
        <template v-slot:containerLeftTop>
          <Notice/>
        </template>
        <template v-slot:containerLeftMain>
          <Article/>
        </template>
      </ContainerLeft>
    </Container>
  </div>
</template>

<script>
import Article from "views/Article.vue";
import Notice from "views/Notice.vue";
import Bgimg from 'views/Bgimg.vue'
import Container from 'components/container/Container.vue'
import ContainerLeft from 'components/container/ContainerLeft.vue'
export default {
  name: "Home",
  components: {
    Container,
    Bgimg,
    Article,
    Notice,
    ContainerLeft,
  }
};
</script>

<style scoped>
#bgcBox {
  height: 100vh;
}
@media screen and (max-width:768px) {
  #bgcBox {
    height: 50vh;
    background-size: 100% 90vw;
    background-image: url(~assets/img/mhome.jpg);
  }
}
</style>

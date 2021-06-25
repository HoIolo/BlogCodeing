<template>
  <div class="lmessage">
      <Bgimg>留言板</Bgimg>
      <div class="container">
          <div class="container-left">
              <div class="main-message">
                <SendMessage/>
                <Comment/>
              </div>
          </div>
            <ContainerRight/>
      </div>
  </div>
</template>

<script>
import Comment from 'views/Comment.vue'
import SendMessage from 'views/SendMessage.vue'
import Bgimg from 'views/Bgimg.vue'
import ContainerRight from 'components/container/ContainerRight.vue'

export default {
    components: {
        Bgimg,
        ContainerRight,
        SendMessage,
        Comment
    }
}
</script>

<style scoped>
.main-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50rem;
    height: 100vh;
    /* box-shadow: 0 0 10px rgb(223, 222, 222); */
    /* background-color: rgba(84, 178, 255, 0.164); */
    border-radius: 11px;
    font-size: var(--fontSize);
}

</style>
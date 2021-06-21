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
          <div class="container-right">
              <UserInfo/>
          </div>
      </div>
  </div>
</template>

<script>
import Comment from 'views/Comment.vue'
import SendMessage from 'views/SendMessage.vue'
import Bgimg from 'views/Bgimg.vue'
import UserInfo from 'components/UserInfo.vue'

export default {
    components: {
        Bgimg,
        UserInfo,
        SendMessage,
        Comment
    }
}
</script>

<style scoped>
#bgcBox {
    height: 50vh;
}
.main-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50rem;
    height: 100vh;
    box-shadow: 0 0 10px rgb(223, 222, 222);
    border-radius: 11px;
    transition: box-shadow .5s;
}

</style>
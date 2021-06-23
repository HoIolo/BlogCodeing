<template>
  <div class="writeMessage">
    <p>有什么新鲜事想告诉大家？</p>
    <div class="writeConten">
      <textarea
        name=""
        id="textInput"
      ></textarea>
    </div>
    <div class="sendMore">
      <div class="emoticon">
        55
      </div>
      <input
        type="button"
        value="发表"
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.writeMessage {
    width: var(--xBoxWidth);
    box-shadow: 0 0 10px var(--shadow);
    padding: 25px;
    border-radius: var(--radius);
}
.sendMore {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
}
.sendMore input {
    border: none;
    background-color: var(--baseColor);
    color: #fff;
    width: 75px;
    height: 30px;
    cursor: pointer;
    transition: background-color .5s;
}
.sendMore input:hover {
    background-color: rgb(34, 222, 255);
}
#textInput {
    width: 100%;
    max-width: 100%;
    min-width: 50%;
    height: 120px;
    min-height: 80px;
    max-height: 200px;
    font-size: 18px;
    padding: 2px;
}
</style>
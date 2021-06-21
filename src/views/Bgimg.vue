<template>
  <div id="bgcBox">
      <div class="middleInfo">
        <p><slot></slot></p>
      </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
#bgcBox .middleInfo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
#bgcBox .middleInfo p {
  font-size: 85px;
  color: #fff;
  font-weight: 900;
  text-shadow: 0 0 15px;
  animation: textChange 3s linear infinite;
}
@keyframes textChange {
  0%,
  100% {
    text-shadow: 4px 6px 25px rgb(241, 101, 101);
  }
  50% {
    text-shadow: 0 0 10px rgb(241, 101, 101);
  }
}
#bgcBox {
  position: relative;
  height: 50vh;
  background: url("~assets/img/48.jpg") no-repeat;
  /* background-position: -35px -125px; */
  background-size: cover;
  background-attachment: fixed;
  margin-bottom: 50px;
}
</style>
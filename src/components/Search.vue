<template>
  <div id="search">
    <div class="c-search">
      <h2>想要找点什么？</h2>
      <input
        type="text"
        ref="search"
        placeholder="搜索"
        title="请填写此字段"
      >
    </div>
    <div
      class="closeSearch"
      @click.self="toggleSearch"
    >×</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleSearch() {
      this.$emit("toggleSearch", false);
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.search.focus();
    });
  },
};
</script>

<style>
.closeSearch {
  position: absolute;
  right: 20px;
  top: 10px;
  z-index: 99;
  font-size: 50px;
  color: #444;
  cursor: pointer;
}
#search .c-search {
  position: fixed;
  left: calc(50% - var(--dBoxWidth) / 2);
  top: 35%;
  z-index: 12;
  text-align: center;
  color: #fff;
}
#search .c-search h2 {
  position: relative;
  bottom: 80px;
  font-size: 35px;
  color: orange;
}
#search .c-search input {
  width: 50rem;
  height: 50px;
  border-radius: 22px;
  border: none;
  padding-left: 55px;
  border: 1px solid #ccc;
  font-size: 25px;
  background: url(~assets/img/search.png) no-repeat #fff;
  background-size: 40px;
  background-position: 10px;
}
#search {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 11;
  animation: show 0.5s cubic-bezier(0, 0.84, 0.19, 1.15) forwards;
  background-image: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.2.1/img/other/iloli.gif);
  background-repeat: no-repeat;
  background-position: 100% 100%;
}
@keyframes show {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
<template>
  <div id="app">
    <TabBar :menus="menus" @toggleSearch="toggleSearch">
      <div class="menu" v-for="(item,index) in menus" :key="index">
        <router-link to="/" @click="activeClick(index)" :class="{active:currentIndex==index}"><span class="iconfont" v-html="fontImg[index]"></span>{{item}}</router-link>
      </div>
    </TabBar>
    <BackTop/>
    <Search v-if="isSearchShow" @toggleSearch="bgClick"/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<style>
 @import url('assets/css/base.css');
.menu {
  display: inline-block;
}
.menu::after {
  content: "";
  position: relative;
  bottom: 15px;
  display: block;
  width: 0rem;
  height: 5px;
  margin: 0 auto;
  background-color: orange;
  transition: 1s all cubic-bezier(.46, 1, .23, 1);
}
.menu:hover::after {
  width: 5rem;
}
</style>

<script>
import TabBar from 'components/TabBar.vue'
import Footer from 'components/Footer.vue'
import BackTop from 'components/BackTop.vue'
import Search from 'components/Search.vue'

export default {
  components: {
    TabBar,
    Footer,
    BackTop,
    Search
  },
  data() {
    return {
      menus:['首页','归档','清单','微语','留言板','友人帐','关于','后院'],
      currentIndex: 0,
      routePath: [],
      fontImg: ['&#xe6e6;','&#xe6b8;','&#xe677;','&#xe63a;','&#xe60c;','&#xe6bc;','&#xe608;','&#xe607;'],
      isSearchShow:false,
    }
  },
  methods: {
    activeClick(index) {
      this.currentIndex = index
    },
    toggleSearch(isSearchShow) {
      this.isSearchShow = isSearchShow
    },
    bgClick(isSearchShow) {
      this.isSearchShow = isSearchShow
    }
  },
  created() {
    this.routePath = this.$router.options.routes
  },
}
</script>

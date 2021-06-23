<template>
  <div class="tab-bar" ref="tabBar" :class="{stickTop:isStickTop}">
      <div class="logo">
          <a href="/">小析の</a>
      </div>
      <div class="menuBtn" v-if="getWindow <= 768" @click="showMiniMenu" >三</div>
      <div class="menus" :class="{miniMenuShow:isShowMiniMenu}">
          <div class="closed" v-if="getWindow <= 768" @click="closeMiniMenu">X</div>
          <slot></slot>
      </div>
      <div class="other">
          <div class="search" @click="toggleSearch">
              <span class="iconfont">&#xe67d;</span>
          </div>
          <div class="user">
              <span class="iconfont">&#xe640;</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            isStickTop: false,
            isSearchShow:false,
            isShowMiniMenu:false
        }
    },
    props: {
        menus: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        activeClick(index) {
            this.currentIndex = index
        },
        toggleSearch() {
            this.isSearchShow = true
            this.$emit('toggleSearch',this.isSearchShow)
        },
        //移动端显示菜单
        showMiniMenu() {
            this.isShowMiniMenu = true;
        },
        closeMiniMenu() {
            this.isShowMiniMenu = false;
        }
    },
    created() {
        //监听滚动事件
        window.addEventListener('scroll', e=>{
            //滚动条高度大于10的时候导航栏固定
            let scroll = e.target.documentElement.scrollTop
            scroll > 10 ? this.isStickTop = true : this.isStickTop = false
        })
    },
    computed: {
        getWindow() {
            return this.$store.getters.getWindowWidth.value
        }
    }
}
</script>

<style>
    .router-link-active {
        color: pink;
    }
    .stickTop {
        background-color: #fff !important;
        box-shadow: 0 -5px 25px #ccc;
        color: #000 !important;
    }
    @media screen and (max-width:1200px) {
        .tab-bar .menus a {
            font-size: 14px;
            transition: all .5s;
        }
    }
    .tab-bar img {
        width: 100%;
    }
    .tab-bar {
        width: 100vw;
        position: fixed;
        display: flex;
        justify-content: space-around;
        background-color: rgba(255,255,255,0);
        transition: all .2s linear;
        color: #fff;
        z-index: 10;
    }
    .tab-bar:hover {
        background-color: #fff;
        box-shadow: 0 -5px 25px #ccc;
        color: #000;
    }
    .tab-bar:hover .logo a {
        background-color: rgba(255,255,255);
    }
    .tab-bar .logo {
        display: inline-block;
        text-align: center;
        /* width: 7.5rem; */
    }
    .tab-bar .logo a {
        line-height: 4.5rem;
        font-size: 1.875rem;
        background-color: rgba(255,244,244,.5);
        border-radius: 15px;
        padding: 0;
    }
    .tab-bar .menus {
        display: flex;
        justify-content: space-around;
    }
    @media screen and (max-width:768px) {
        .closed {
            position: absolute;
            right: 0;
            font-size: 25px;
            width: 50px;
        }
        .miniMenuShow {
            left: 0 !important;
        }
        .tab-bar {
            height: 44px;
            justify-content: space-between;
        }
        .tab-bar .logo {
            display: none;
        }
        .menus .menu::after {
            display: none;
        }
        .tab-bar .menus{
            /* display: none; */
            position: fixed;
            left: -80vw;
            top: 0;
            flex-direction: column;
            justify-content: start;
            height: 100vh;
            width: 200px;
            background-color: #fff;
            box-shadow: 0 0 10px var(--shadow);
            text-align: center;
            color: #000;
            transition: all .5s;
        }
        .tab-bar .menus a {
            width: 10rem;
            line-height: 50px;
        }
        .other {
            margin-right: 15px;
        }
        .other span {
            font-size: 20px !important;
        }
        .tab-bar .other .search,
        .tab-bar .other .user {
            width: 5rem;
        }
    }
    .menus a {
        display: inline-block;
        letter-spacing: 2px;
        text-align: center;
        line-height: 4.375rem;
        width: 5rem;
    }
    .tab-bar .other { 
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .search,
    .user {
        width: 3rem;
        text-align: center;
        cursor: pointer;
    }
    .tab-bar .other .search:hover,
    .tab-bar .other .user:hover {
        color: aqua;
        transition: all .5s;
    }
    .tab-bar .other .search span,
    .tab-bar .other .user span {
        font-size: 1.5625rem;
    }
    .menuBtn {
        line-height: 44px;
        font-size: 25px;
        margin-left: 15px;
    }
</style>
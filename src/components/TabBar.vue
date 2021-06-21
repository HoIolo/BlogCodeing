<template>
  <div class="tab-bar" ref="tabBar" :class="{stickTop:isStickTop}">
      <div class="logo">
          <a href="/">小析の</a>
      </div>
      <div class="menus">
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
            isSearchShow:false
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
        }
    },
    created() {
        //监听滚动事件
        window.addEventListener('scroll', e=>{
            //滚动条高度大于10的时候导航栏固定
            let scroll = e.target.documentElement.scrollTop
            scroll > 10 ? this.isStickTop = true : this.isStickTop = false
        })
    }
}
</script>

<style>
    .stickTop {
        background-color: #fff !important;
        box-shadow: 0 -5px 25px #ccc;
        color: #000 !important;
    }
    .active {
        color: pink;
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
        padding: 0 px;
    }
    .tab-bar .menus {
        display: flex;
        justify-content: space-around;
    }
    @media screen and (max-width:768px) {
        .tab-bar {
            height: 44px;
        }
        .tab-bar .logo {
            display: none;
        }
        .tab-bar .menus{
            position: absolute;
            left: 0;
            top: 44px;
            display: inline-block;
            flex-direction: column;
        }
    }
    .tab-bar .menus a {
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
    .tab-bar .other .search,
    .tab-bar .other .user {
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
</style>
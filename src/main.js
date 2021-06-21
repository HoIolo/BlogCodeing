import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/font/iconfont.css'
import './assets/font/font.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'aplayer/dist/APlayer.min.css'
import APlayer from 'aplayer'
import {aplayerOptions} from './network/aplayer.js'
import store from './store'

createApp(App).use(store)
.use(router)
.mount('#app')

router.beforeEach((to, from, next) => {
    //加载进度条启动
    NProgress.start();
    
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title
    }

    next()
})

router.afterEach(() => {  
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})

//加载进度条配置
NProgress.configure({     
  easing: 'ease',  // 动画方式    
  speed: 500,  // 递增进度条的速度    
  showSpinner: false, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3 // 初始化时的最小百分比
})

//音乐播放器
const ap = new APlayer(aplayerOptions());


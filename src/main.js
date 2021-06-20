import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/font/iconfont.css'
import './assets/font/font.css'

createApp(App).use(router).mount('#app')

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next()
})

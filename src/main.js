import { createApp } from 'vue'
import './assets/css/main.scss'
import router from './assets/js/router'
import App from './App.vue'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
ScrollTrigger.config ({ autoRefreshEvents : "DOMContentLoaded,load,visibilitychange" }); 
gsap.registerPlugin(ScrollTrigger)

createApp(App).use(router).mount('#app')

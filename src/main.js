import { createApp } from 'vue'
import './assets/css/main.scss'
import router from './assets/js/router'
import App from './App.vue'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.normalizeScroll(true)
ScrollTrigger.config({autoRefreshEvents: "DOMContentLoaded,load,visibilitychange"});

createApp(App).use(router).mount('#app')

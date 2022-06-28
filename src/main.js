import './index'
import './style/index.css'
import './style/index.less';
// 引入字体图标文件
import './assets/fonts/iconfont.css'



// jq的使用
// src/mains.js
// 先引入jquery
import $ from 'jquery';
// $('#swiper').css('background-color', 'red')

class App1 {
    static a = 123
}

console.log(App1.a)

import { createApp } from 'vue'
// import Vue from 'vue'				// 引入Vue
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

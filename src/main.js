/*
 * @Author: daidai
 * @Date: 2022-01-12 14:05:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-07 11:03:31
 * @FilePath: \web-pc\src\pages\big-screen\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  loading,
  borderBox13,
  borderBox12,
  digitalFlop,
  capsuleChart,
  borderBox8,
  scrollRankingBoard,
} from '@jiaminghi/data-view'
import { Radio, Button, RadioGroup } from 'element-ui'
import Echart from './components/echart/index.vue'
import ItemWrap from './components/item-wrap/item-wrap.vue'
import Message from './components/message/message.vue'
import Reacquire from './components/reacquire/reacquire.vue'
import Messages from './components/message/message'
import 'vue-easytable/libs/theme-default/index.css'
import '@/assets/css/public.scss'
import '@/assets/css/index.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as filters from '@/directives/filters'
import axios  from "axios";
require('./mock/mock') //是否使用mock
Vue.config.productionTip = false
Vue.prototype.$http = axios
// 自定义组件
Vue.component('Echart', Echart)
Vue.component('ItemWrap', ItemWrap)
Vue.component('Message', Message)
Vue.component('Reacquire', Reacquire)
Vue.prototype.$Message = Messages
// element组件
Vue.use(Radio)
Vue.use(Button)
Vue.use(RadioGroup)

// datav组件
Vue.use(loading)
Vue.use(borderBox13)
Vue.use(borderBox8)
Vue.use(digitalFlop)
Vue.use(capsuleChart)
Vue.use(borderBox12)

Vue.use(scrollRankingBoard)
Vue.use(axios)
Vue.use(ElementUI)
// 全局数据过滤器
Object.keys(filters).forEach((k) => Vue.filter(k, filters[k]))
new Vue({
  el: '#app',
  router,
  ElementUI,
  store,
  render: (h) => h(App),
}).$mount('#app')

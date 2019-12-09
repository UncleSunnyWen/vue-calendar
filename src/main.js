import Vue from 'vue'
import App from './App.vue'
// 导入组件库
import Calendar from './components/index'
// 注册组件库
Vue.use(Calendar)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
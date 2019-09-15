import Vue from 'vue'
import App from './App.vue'
/*import Users from "./Components/Users";

//注册全局组件
Vue.component("users",Users)*/

new Vue({
  el: '#app',
  render: h => h(App)
})

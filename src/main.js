import Vue from 'vue'
import App from './App.vue'
import { install } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
install(Vue)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import index from './style/index.css'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')

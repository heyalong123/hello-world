import Vue from 'vue'
import App from './App.vue'
// 引入通配的样式
import './style/index.less'
// 引入字体图标
import './style/iconfont.less'
// 引入lib-flexible,可以自适应所有的屏幕
import 'lib-flexible'
import router from './routers/index'
// 引入axios
import axios from 'axios'
// 全局绑定
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:3000'
// vant
import { Toast } from 'vant'
Vue.use(Toast)
//----------------------------------全局注册组件------------------------------------
// 头部
import HmHeader from './component/HmHeader.vue'
Vue.component('hm-header', HmHeader)
// logo图标
import HmLogo from './component/HmLogo.vue'
Vue.component('hm-logo', HmLogo)
// 按钮
import HmButton from './component/HmButton.vue'
Vue.component('hm-button', HmButton)
// input
import HmInput from './component/HmInput.vue'
Vue.component('hm-input', HmInput)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')

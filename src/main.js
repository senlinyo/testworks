import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import router from './router'
Vue.use(ElementUi)
Vue.config.productionTip = false

new Vue({
  // render: h => h(App),
  router
}).$mount('#app')

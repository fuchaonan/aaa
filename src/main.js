import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.$axios=axios;
import "./assets/js/flexble.js"
import VueJsonp from 'vue-jsonp';
import "./request";
import MintUI from 'mint-ui';//入口文件里引入mint-ui
import 'mint-ui/lib/style.css';
Vue.use(MintUI);
Vue.use(VueJsonp);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

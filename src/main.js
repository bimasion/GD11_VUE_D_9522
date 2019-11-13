import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.prototype.$http = Axios;
Vue.prototype.$apiUrl = 'http://12.34.56.78:80/modul11/index.php';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

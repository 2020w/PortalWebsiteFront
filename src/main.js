import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

// CSS
import './assets/css/bootstrap.min.css';
import './assets/css/animate.css';
import './assets/css/style.css';
import './assets/font-awesome-4.1.0/css/font-awesome.min.css';
import './assets/css/pe-icons.css';

// JS
import './assets/js/bootstrap.min.js';
import './assets/js/plugins';

import './assets/js/jqBootstrapValidation';
import './assets/js/contact_me';
import './assets/js/init';

Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://127.0.0.1:3000';
Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

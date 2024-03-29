import Vue from 'vue';
import App from './App.vue';
import router from './router';

import '@/plugin/element-ui';
import '@/plugin/store';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

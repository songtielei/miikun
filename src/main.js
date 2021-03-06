import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// vue-meta
import './plugins/vue-meta/index';

// codemirror
import './plugins/codemirror/index';

// fontawesome
import './plugins/fontawesome/index';

// Miikun Menu
import appMenu from './service/app-menu';

new Vue({
  router,
  store,
  mounted() {
    appMenu.setupAppMenu();
    appMenu.setupContextMenu();
  },
  render: (h) => h(App),
}).$mount('#app');

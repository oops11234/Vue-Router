import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/assets/css/reset.css';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA0cWq5aQw1N5nBE0VhD-DbY-89Dgmd9kI',
    libraries: 'places',
  },
  installComponents: true,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

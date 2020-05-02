import Vue from 'vue';
import WeatherApp from './WeatherApp.vue';
import axios from 'axios';

// Add Axios to Vue prototype
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(WeatherApp),
}).$mount('#app')

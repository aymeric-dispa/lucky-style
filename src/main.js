import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'
import VueAnalytics from 'vue-analytics'
import App from './App'
import router from './router'
import Config from '@/assets/config.json';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueCarousel from 'vue-carousel';
import vueSmoothScroll from 'vue-smooth-scroll';
import icons from 'glyphicons';


Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(VueCarousel);
Vue.use(icons);
Vue.use(vueSmoothScroll)
Vue.use(VueAnalytics, {
  id: Config.analyticsApiKey,
  router
});

new Vue({
//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: {App},
  router
}).$mount('#app');//mount the router on the app




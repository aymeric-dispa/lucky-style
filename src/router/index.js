import Vue from 'vue'

import VueRouter from 'vue-router'

//The @ is an alias for the /src directory that was setup in webpack by the Vue command line tool.

Vue.use(VueRouter);

const routes = [

];

const router = new VueRouter({
  mode: 'history',
  routes
});


router.replace({path: '/', redirect: '*'});
export default router

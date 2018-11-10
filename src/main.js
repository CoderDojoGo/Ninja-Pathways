import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'
import VueSession from 'vue-session'


// Components

import NinjasDash from './components/NinjasDash'
import NinjaBoard from './components/NinjaBoard'
import NinjaLogin from './components/NinjaLogin'


Vue.config.productionTip = false

// Plugins

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueSession)
Vue.use(Vuetify)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: NinjasDash },
    { path: '/ninja', component: NinjaBoard },
    { path: '/login', name: 'login', component: NinjaLogin }
  ]
})
let yes = true;
router.beforeEach((to, from, next) => {
  if(yes){
    yes = false;
    next({name: 'login'})

  } 
  else
    next();
  
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

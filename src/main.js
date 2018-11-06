import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import NinjasDash from './components/NinjasDash'
import NinjaBoard from './components/NinjaBoard'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: NinjasDash },
    { path: '/ninja', component: NinjaBoard },
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

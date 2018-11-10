import Vue from 'vue'
import Vuex from 'vuex'
import ninjasModule from './modules/ninjasModule.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    ninjasModule
  },
  strict: debug,
})
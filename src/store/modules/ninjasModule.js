/** VUEX module for ninjas management **/

import ns from "../../services/ninjaService.js";

export default {
    namespaced: true,
    // -----------------------------------------------------------------
    state: {
      all: []
    },
    // -----------------------------------------------------------------
    getters: {
      
    },
    // -----------------------------------------------------------------
    mutations: {
      setNinjas(state, ninjas) {
        state.all = ninjas
      }
    },
    // -----------------------------------------------------------------
    actions: {
      async getAllNinjasAync({commit}) {
        var res = await ns.getAllNinjas()
        commit('setNinjas', res)
      },
      // create: (context, todoData) => {
      //   // stuff to create a new ninja on the backend : CRUD CREATE ACTION
      // },
      // read: (context, id) => {
      //   // stuff to retrieve a particular ninja data from the backend : CRUD READ ACTION
      // },
      // update: (context, todoData) => {
      //   // stuff to update a particular ninja data to the backend : CRUD UPDATE ACTION
      // },
      // delete: (context, id) => {
      //   // stuff to erase a particular ninja on the backend : CRUD DELETE ACTION
      // }
    }
  }
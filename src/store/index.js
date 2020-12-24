import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import axios from "axios"
import router from "../router/index"

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    auth: "",
    user:"",
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

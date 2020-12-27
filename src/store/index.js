import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    auth: "",
    user:"",
  },
  mutations: {
    auth(state, payload) {
      state.auth = payload;
    },
    user(state, payload) {
      state.user = payload;
    },
    logout(state, payload) {
      state.auth = payload;
    },
  },
  actions: {
    async login({ commit }, { name, password }) {
      const responseLogin = await axios.post(
        "https://fathomless-springs-88074.herokuapp.com/api/login",
        {
          name: name,
          password: password,
        }
      );
      commit("auth", responseLogin.data.auth);
      this.$router.push({name:'main'});
    },
    logout({ commit }) {
      axios.post("https://fathomless-springs-88074.herokuapp.com/api/logout", {
        auth: this.state.auth,
      })
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response);
          commit("logout", response.data.auth);
          router.replace("/");
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }
  },
  modules: {
  }
})

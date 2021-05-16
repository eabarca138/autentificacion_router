import Vue from "vue";
import Vuex from "vuex";
import router from '@/router'
import firebase from "firebase"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: "",
    password: ""
  },
  mutations: {
    log_in() {
      router.push("home");
    },
    updateEmail (state, email) {
      state.email = email
    },
    updatePassword (state, password) {
      state.password = password
    }
  },
  actions: {
    login({ state, commit }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(state.email, state.password)
        .then((userCredential) => {
          console.log(userCredential);
          commit('log_in')
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
  modules: {},
});

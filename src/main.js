import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Firebase from "firebase"
import FirebaseConfig from "../config/Firebase"

Firebase.initializeApp(FirebaseConfig);

import { BootstrapVue, /* IconsPlugin */ } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  Firebase,
  render: (h) => h(App),
}).$mount("#app");

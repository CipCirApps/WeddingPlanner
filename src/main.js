// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import 'chart.js'


import { store } from "./store/store";

// import firebase from 'firebase'
// import 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore'

Vue.use(Vuetify, {
  theme: {
    primary: "#009688", // teal
    secondary: "#424242",
    accent: "#1867c0",
    error: "#FF5252",
    info: "#2196F3",
    success: "#00c853", // green accent-4
    warning: "#FFC107",
    veniti:"#a0cfff",
    nesositi:"#ffc107"
  }
});
Vue.use(VueChartkick, { Chartkick })
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>",
  created: function() {
    this.$store.dispatch("loadFireStatus");
  }
});

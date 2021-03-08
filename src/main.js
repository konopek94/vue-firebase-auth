// import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import firebase from 'firebase/app'

var firebaseConfig = {
  apiKey: "AIzaSyDYXv2gxOjvVIooPTHE38QYRaQHK1ImHxg",
  authDomain: "fir-auth-a2397.firebaseapp.com",
  projectId: "fir-auth-a2397",
  storageBucket: "fir-auth-a2397.appspot.com",
  messagingSenderId: "662368423357",
  appId: "1:662368423357:web:37bd60eb187c8cc1db16d4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


let app
firebase.auth().onAuthStateChanged(user => {
  console.log('user', user)
  if(!app) {
    app = createApp(App).use(router, store)
    app.config.globalProperties.$http = axios
    app.mount('#app')
    
  }
})
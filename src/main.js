import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

const app = createApp(App).use(router, store).mount('#app')
app.config.globalProperties.$http = axios

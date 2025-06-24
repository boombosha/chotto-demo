import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '/node_modules/@mobilon-dev/chotto/dist/chotto.css';
import 'primeicons/primeicons.css'
import './assets/style.css'

import App from './App.vue'
import router from './router';
const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
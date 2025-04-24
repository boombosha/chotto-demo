import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '/node_modules/@mobilon-dev/chotto/dist/chotto.css';
import 'primeicons/primeicons.css'
import './assets/style.css'

import App from './App.vue'

const pinia = createPinia()

createApp(App).use(pinia).mount('#app')
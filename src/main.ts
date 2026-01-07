import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import api from '@/services/axios.ts'

const app = createApp(App)

app.use(router)
app.mount('#app')

// Setting up axios
const baseURL = new URL('/api', window.location.origin).toString();
api.setBaseURL(baseURL);

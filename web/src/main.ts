import { createApp } from 'vue'
import App from './App.vue'
import { installMotion } from './motion'
import './styles/main.css'

const app = createApp(App)
installMotion(app)
app.mount('#app')

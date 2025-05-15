import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importamos el router
import './assets/main.css'

createApp(App)
  .use(router) // Usamos el router en la aplicación
  .mount('#app')

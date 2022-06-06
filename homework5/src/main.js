import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router.js'

const app = createApp(App)

app.use(router)
app.mount('#app')



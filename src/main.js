import { createApp } from 'vue'
import DefaultTemplate from './layouts/DefaultTemplate.vue'
import router from './routes'

createApp(DefaultTemplate)
    .use(router)
    .mount('#app');
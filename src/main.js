require('./bootstrap')
import { createApp } from 'vue'
import BaseTemplate from './layouts/BaseTemplate.vue'
import router from './routes'
import store from './vuex'

createApp(BaseTemplate)
    .use(router)
    .use(store)
    .mount('#app');
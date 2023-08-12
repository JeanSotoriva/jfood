require('./bootstrap')
import { createApp } from 'vue'
import BaseTemplate from './layouts/BaseTemplate.vue'
import router from './routes'
import store from './store'
import ToastPlugin from '@/plugins/VueToastify';

const app = createApp(BaseTemplate);

app.use(router);
app.use(store);
app.use(ToastPlugin);
app.mount('#app');
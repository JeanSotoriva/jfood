require('./bootstrap')
import { createApp } from 'vue'
import BaseTemplate from './layouts/BaseTemplate.vue'
import router from './routes'
import store from './store'
import ToastPlugin from '@/plugins/VueToastify';
// import GlobalComponents from '@/plugins/GlobalComponents';
import PreloaderComponent from '@/components/Preloader.vue'

const app = createApp(BaseTemplate);

app.component('preloader-component', PreloaderComponent);

app.use(router);
app.use(store);
app.use(ToastPlugin);
app.mount('#app');
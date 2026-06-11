import { createApp } from 'vue';
import App from './App.vue';
import 'devextreme/dist/css/dx.light.css';
import config from 'devextreme/core/config';
import router from './router';
import './assets/main.css';
import { licenseKey } from './devextreme-license';

config({ licenseKey });

const app = createApp(App);

app.use(router);

app.mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import { VxeIcon, VxeButton } from '../../packages/all'
import './style/index.scss'
import '../../styles/all.scss'

const app = createApp(App);

app.use(VxeIcon).use(VxeButton)

app.config.globalProperties.$t = i18n.global.t;

app.mount('#app');

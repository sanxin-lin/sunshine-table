// requestAnimationFrame(() => {
//   console.log('init')
// });

// setTimeout(() => {
//   console.log('init')
// }, 0);

// const _ob = new MutationObserver(mutations => {
//   console.log('init')
// })

// _ob.observe(document.body, { attributes: true })

import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import {
  VxeIcon,
  VxeButton,
  VxeRadio,
  VxeRadioButton,
  VxeRadioGroup,
  VxeCheckbox,
  VxeCheckboxGroup,
  VxeSwitch,
  VxeTextarea,
  VxeModuleExport,
  VxeLoading,
  VxeModal,
  VxeForm,
  VxeFormItem,
} from '../../packages/all';
import './style/index.scss';
import '../../styles/all.scss';
const app = createApp(App);

app
  .use(VxeIcon)
  .use(VxeButton)
  .use(VxeRadioButton)
  .use(VxeRadio)
  .use(VxeRadioGroup)
  .use(VxeCheckbox)
  .use(VxeCheckboxGroup)
  .use(VxeSwitch)
  .use(VxeTextarea)
  .use(VxeModuleExport)
  .use(VxeLoading)
  .use(VxeModal)
  .use(VxeForm)
  .use(VxeFormItem);

app.config.globalProperties.$t = i18n.global.t;

app.mount('#app');

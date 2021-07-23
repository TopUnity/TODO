import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import { registerSW } from 'virtual:pwa-register'

// 通用字体
import 'vfonts/Lato.css';

// 等宽字体
import 'vfonts/FiraCode.css';

const updateSW = registerSW({
    onNeedRefresh() {
      // show a prompt to user
    },
    onOfflineReady() {
      // show a ready to work offline to user
    },
})

createApp(App).use(router).use(store).mount('#app');

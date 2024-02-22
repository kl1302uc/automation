

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

/* 阻止弹出菜单 */
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

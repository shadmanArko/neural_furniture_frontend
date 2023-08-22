import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import TopBar from './components/TopBar.vue';
import SofaPage from './components/SofaPage.vue';
import BedPage from './components/BedPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: TopBar },
    { path: '/sofa', component: SofaPage },
    { path: '/bed', component: BedPage },
  ],
});

createApp(App).use(router).mount('#app');

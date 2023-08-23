import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue'
import AlmirahPage from './components/AlmirahPage.vue';
import BedPage from './components/BedPage.vue';
import DiningTablePage from './components/DiningTablePage.vue';
import DressingTablePage from './components/DressingTablePage.vue';
import ShoeRackPage from './components/ShoeRackPage.vue';
import ShowcasePage from './components/ShowcasePage.vue';
import SofaPage from './components/SofaPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/almirah', component: AlmirahPage },
    { path: '/bed', component: BedPage },
    { path: '/diningtable', component: DiningTablePage },
    { path: '/dressingtable', component: DressingTablePage },
    { path: '/shoerack', component: ShoeRackPage },
    { path: '/showcase', component: ShowcasePage },
    { path: '/sofa', component: SofaPage },
  ],
});

createApp(App).use(router).mount('#app');

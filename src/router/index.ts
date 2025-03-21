import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomeView.vue';
import EpisodesPage from '../views/EpisodesPage.vue';
import ProductionPage from '../views/ProductionPage.vue';
import ContactPage from '../views/ContactPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/episodes',
    name: 'Episodes',
    component: EpisodesPage
  },
  {
    path: '/production',
    name: 'Production',
    component: ProductionPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Always scroll to top when navigating
    return { top: 0 };
  }
});

export default router;
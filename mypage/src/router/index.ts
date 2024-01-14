import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MyCreation from '../views/creationView.vue';
import About from '../views/AboutView.vue';
import GameGobang from '../views/GameGobang.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: '/creation',
    name: 'creation',
    component: MyCreation,
  },
  {
    path: '/GameGobang',
    name: 'GameGobang',
    component: GameGobang,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import Menu from '../layout/Menu.vue';
// 公共路由
export const constantRoutes = [
  {
    path: '/',
    name: 'index',
    component: Menu
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
});
router.beforeEach(async (to, form, next) => {
  next();
});
export default router;

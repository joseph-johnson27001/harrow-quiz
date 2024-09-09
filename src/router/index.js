import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import QuizPage from "../views/QuizPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/quiz", component: QuizPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

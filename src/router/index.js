import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "../views/WelcomePage.vue";
import QuizPage from "../views/QuizPage.vue";
import ResultsPage from "../views/ResultsPage.vue";

const routes = [
  {
    path: "/",
    name: "WelcomePage",
    component: WelcomePage,
  },
  {
    path: "/quiz",
    name: "QuizPage",
    component: QuizPage,
  },
  {
    path: "/results",
    name: "ResultsPage",
    component: ResultsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "../views/WelcomePage.vue";
import QuizPage from "../views/QuizPage.vue";
import ResultsPage from "../views/ResultsPage.vue";
import { useUserStore } from "../store/userStore";

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
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.path !== "/" && !userStore.firstName) {
    userStore.resetAll();
    next({ name: "WelcomePage" });
  } else {
    next();
  }
});

export default router;

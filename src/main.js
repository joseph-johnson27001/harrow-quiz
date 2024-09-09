import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router"; // Import the router

const pinia = createPinia();

const app = createApp(App);

// Use both the Pinia store and the router
app.use(pinia);
app.use(router); // <-- Make sure to add this line to use the router

app.mount("#app");

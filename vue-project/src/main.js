import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
import "./assets/main.css";
import store from "./store.js";
const app = createApp(App);
app.use(store);
app.config.strict = true;
app.use(router);
app.use(bootstrap);
app.mount("#app");

// imports app.use and mounting the app

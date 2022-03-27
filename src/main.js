import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.scss"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "@fortawesome/fontawesome-free/js/all.min.js"
import store from "./store"
import Toast, { POSITION } from "vue-toastification"
import 'vue-toastification/dist/index.css'

const option = {
  timeout: 1500,
  position: POSITION.BOTTOM_RIGHT
}

createApp(App).use(store).use(Toast, option).mount("#app");

import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircle,
  faTimes,
  faHome,
  faTerminal,
  faCommentAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers
} from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import store from './store'

library.add(faCircle, faTimes, faHome, faTerminal, faCommentAlt);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.component("font-awesome-layers", FontAwesomeLayers);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircle,
  faTimes,
  faHome,
  faTerminal,
  faCommentAlt,
  faShoppingCart,
  faPiggyBank
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers
} from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store/";

library.add(
  faCircle,
  faTimes,
  faHome,
  faTerminal,
  faCommentAlt,
  faShoppingCart,
  faPiggyBank
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.component("font-awesome-layers", FontAwesomeLayers);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

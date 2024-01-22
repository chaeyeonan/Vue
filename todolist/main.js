import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// eslint-disable-next-line
new Vue({
  el: "#app",
  render: (h) => h(App), // https://css-tricks.com/what-does-the-h-stand-for-in-vues-render-method/
});

import { createApp } from "vue";

import "./index.scss";

import App from "./App.vue";

// Mount function to start up the app
const mount = (el) => {
  const app = createApp(App);
  app.mount(el); // this a function from Vue.
};

export default mount;

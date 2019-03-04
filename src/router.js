import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/console",
      name: "Console",
      component: () => import("./views/Console.vue")
    },
    {
      path: "/whispr",
      name: "Whispr",
      component: () => import("./views/Whispr.vue")
    },
    {
      path: "/oink",
      name: "Oink",
      component: () => import("./views/Oink.vue")
    },
    {
      path: "/market",
      name: "Market",
      component: () => import("./views/Market.vue")
    }
  ]
});

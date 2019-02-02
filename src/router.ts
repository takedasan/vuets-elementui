import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import TickerListComponent from "@/ticker/list/TickerListComponent";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/ticker",
      name: "ticker",
      component: TickerListComponent
    }
  ]
});

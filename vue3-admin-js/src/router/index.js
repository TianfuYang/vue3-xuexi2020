import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";

const routes = [
  //登录
  {
    path: "/",
    name: "Login",
    component: () => import("../views/account/Login.vue")
  },
  //注册
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/account/Register.vue")
  },
    //忘记密码
  {
    path: "/forget",
    name: "Forget",
    component: () => import("../views/account/Forget.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/ceshi",
    name: "Ceshi",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Ceshi.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

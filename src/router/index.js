import Vue from "vue";
import VueRouter from "vue-router";
import RoomList from "../views/RoomList.vue";
import ChatBoard from "../views/ChatBoard.vue";
import LoginView from "../views/LoginView.vue";
import SignUp from "../views/SignUp.vue";
import firebase from "@/firebase/firebase";

Vue.use(VueRouter);

const routes = [
 {
  path: "/",
  name: "RoomList",
  component: RoomList,
  meta: { requiresAuth: true },
 },
 {
  path: "/chat",
  name: "ChatBoard",
  component: ChatBoard,
 },
 {
  path: "/login",
  name: "LoginView",
  component: LoginView,
 },
 {
  path: "/signup",
  name: "SignUp",
  component: SignUp,
 },
];

const router = new VueRouter({
 mode: "history",
 base: process.env.BASE_URL,
 routes,
});

router.beforeEach((to, from, next) => {
 const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
 if (requiresAuth) {
  firebase.auth().onAuthStateChanged((user) => {
   if (!user) {
    next({
     path: "/login",
     query: { redirect: to.fullPath },
    });
   } else {
    next();
   }
  });
 } else {
  next();
 }
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Demo1 from "../views/Demo1_Intro.vue";
import Demo2 from "../views/Demo2_EventMethod.vue";
import Demo3 from "../views/Demo3_Data.vue";
import Demo4 from "../views/Demo4_Compute.vue";
import Demo5 from "../views/Demo5_Binding.vue";
import Demo6 from "../views/Demo6_Form.vue";
import Demo7 from "../views/Demo7_Slot.vue";
import Demo8 from "../views/Demo8_Condition.vue";
import Demo9 from "../views/Demo9_Loop.vue";
import Demo10 from "../views/Demo10_LifeCycle.vue";
import Demo11 from "../views/Demo11_Variable_and_State.vue";
import Demo12 from "../views/Demo12_Ref.vue";
import Demo13 from "../views/Demo13_Filters.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/demo1",
    name: "Demo1",
    component: Demo1,
  },
  {
    path: "/demo2",
    name: "Demo2",
    component: Demo2,
  },
  {
    path: "/demo3",
    name: "Demo3",
    component: Demo3,
  },
  {
    path: "/demo4",
    name: "Demo4",
    component: Demo4,
  },
  {
    path: "/demo5",
    name: "Demo5",
    component: Demo5,
  },
  {
    path: "/demo6",
    name: "Demo6",
    component: Demo6,
  },
  {
    path: "/demo7",
    name: "Demo7",
    component: Demo7,
  },
  {
    path: "/demo8",
    name: "Demo8",
    component: Demo8,
  },
  {
    path: "/demo9",
    name: "Demo9",
    component: Demo9,
  },
  {
    path: "/demo10",
    name: "Demo10",
    component: Demo10,
  },
  {
    path: "/demo11",
    name: "Demo11",
    component: Demo11,
  },
  {
    path: "/demo12",
    name: "Demo12",
    component: Demo12,
  },
  {
    path: "/demo13",
    name: "Demo13",
    component: Demo13,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

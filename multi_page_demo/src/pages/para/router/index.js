import Vue from "vue";
import VueRouter from "vue-router";

import Index from "../components/index";
import Active from "../components/active";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            name: 'homePage',
            path: "/homePage",
            component: Index
        },
        {
            name: 'activeList',
            path: "/activeList",
            component: Active
        }
    ]
})
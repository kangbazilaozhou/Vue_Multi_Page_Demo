import Vue from "vue";
import VueRouter from "vue-router";

import Test1 from "../components/Test1";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            name: 'Test1',
            path: "/*",
            component: Test1
        },
    ]
})
import Vue from 'vue'
import VueRouter from 'vue-router'
import Table from './views/Table'
import Test from './views/Test'
import Login from './views/Login'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/Table",
            name: "Table",
            component: Table
        },
        {
            path: "/Test",
            name: "Test",
            component: Test
        },
        {
            path: "/",
            name: "Login",
            component: Login
        },
    ]
})
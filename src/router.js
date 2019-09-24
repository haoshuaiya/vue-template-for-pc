import Vue from "vue"
import Router from "vue-router"

const Home = () => import("./views/Home.vue")

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            meta: {
                title: "亲近母语"
            }
        }
    ]
})
router.afterEach((to, from) => {
    document.title = to.meta.title
})
export default router

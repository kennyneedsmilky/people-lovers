const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
        { path: "/", component: Home },
        { path: "/about", component: About },
    ]
})
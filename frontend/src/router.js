import VueRouter from "vue-router";

const routes = [
    ...require("./pages/toplevel/routes.js").default,
    ...require("./pages/user/routes.js").default,
    ...require("./pages/challenges/create-challenge/routes.js").default,
    ...require("./pages/challenges/single-challenge/routes.js").default
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        };
    },
});

export default router;
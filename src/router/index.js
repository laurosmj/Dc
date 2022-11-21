import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/music',
        name: 'music',
        component: () => import('../views/Music.vue')
    },
    {
        path: '/member',
        name: 'member',
        component: () => import('../views/Member.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
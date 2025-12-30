import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

import Dashboard from '@/pages/Dashboard.vue'
import Users from '@/pages/Users.vue'
import Settings from '@/pages/Settings.vue'

const requireAuth = (to, from, next) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        unsubscribe()
        user ? next() : next('/login')
    })
}

const routes = [{
        path: '/login',
        component: () =>
            import ('@/pages/Login.vue')
    },
    {

        path: '/',
        component: DashboardLayout,
        beforeEnter: requireAuth,
        children: [{
                path: '',
                name: 'dashboard',
                component: Dashboard
            },
            {
                path: 'users',
                name: 'users',
                component: Users
            },
            {
                path: 'settings',
                name: 'settings',
                component: Settings
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
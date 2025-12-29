import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

import Dashboard from '@/pages/Dashboard.vue'
import Users from '@/pages/Users.vue'
import Settings from '@/pages/Settings.vue'



const routes = [{
    path: '/',
    component: DashboardLayout,
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
}]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
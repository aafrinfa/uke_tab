
import {createRouter, createWebHistory} from 'vue-router';
import register from '../components/register.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/register',
            name: 'register',
            component: register
        }
    ]
})

export default router;
import { createRouter, createWebHistory } from 'vue-router';
import Search from '@/modules/search/pages/Search.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/search',
            component: () => import('@/modules/search/layout/SearchLayout.vue'),
            children: [
                {
                    path: '/search',
                    name: 'search',
                    component: Search,
                },
                {
                    path: '/search/results',
                    name: 'results',
                    component: () => import('@/modules/search/pages/Results.vue'),
                },
            ],
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('@/common/components/NotFound.vue'),
        },
    ],
});

export default router;

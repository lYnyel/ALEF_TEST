import { createRouter, createWebHistory } from "vue-router";
import Page from "../pages/Page.vue";
import Preview from "../pages/Preview.vue";
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Page},
        {path: '/preview', component: Preview},
    ]
});
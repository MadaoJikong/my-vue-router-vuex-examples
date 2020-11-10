import Vue from 'vue';
import VueRouter from 'vue-router';
import Blog from '../components/blog/blog';
import Calendar from '../components/calendar/calendar';

Vue.use(VueRouter);

const routerData = [
    { path: '/blog/:id', component: Blog },
    { path: '/calendar', component: Calendar },
];

const router = new VueRouter({
    routes: routerData
});

export default router;
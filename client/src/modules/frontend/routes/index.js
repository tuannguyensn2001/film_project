import { lazy } from 'react';
import LayoutFrontend from '~/modules/frontend/layouts';

const Home = lazy(() => import('~/modules/frontend/pages/home'));
const Schedule = lazy(() => import('~/modules/frontend/pages/schedule'));

const routes = [
    {
        path: '/',
        component: Home,
        layout: LayoutFrontend,
    },
    {
        path: '/schedules',
        component: Schedule,
        layout: LayoutFrontend,
    },
];

export default routes;

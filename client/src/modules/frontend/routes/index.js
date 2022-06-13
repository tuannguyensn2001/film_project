import { lazy } from 'react';
import LayoutFrontend from '~/modules/frontend/layouts';

const Home = lazy(() => import('~/modules/frontend/pages/home'));

const routes = [
    {
        path: '/',
        component: Home,
        layout: LayoutFrontend,
    },
];

export default routes;

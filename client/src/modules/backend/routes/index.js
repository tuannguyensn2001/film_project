// import Dashboard from '~/modules/backend/pages/dashboard';
import DefaultLayout from '~/modules/backend/layouts/default';
// import ListFilms from '~/modules/backend/pages/list-films';
import { lazy } from 'react';

const Dashboard = lazy(() => import('~/modules/backend/pages/dashboard'));
const ListFilms = lazy(() => import('~/modules/backend/pages/list-films'));
// const DefaultLayout = lazy(() => import('~/modules/backend/layouts/default'));
const CreateFilm = lazy(() => import('~/modules/backend/pages/create_film'));
const EditFilm = lazy(() => import('~/modules/backend/pages/edit_film'));
const Schedules = lazy(() => import('~/modules/backend/pages/schedules'));

const routes = [
    {
        path: '/admin',
        component: Dashboard,
        layout: DefaultLayout,
    },
    {
        path: '/admin/films',
        component: ListFilms,
        layout: DefaultLayout,
        breadcrumbs: [
            {
                label: 'Quan ly phim',
            },
        ],
    },
    {
        path: '/admin/films/create',
        component: CreateFilm,
        layout: DefaultLayout,
        breadcrumbs: [
            {
                label: 'Quan ly phim',
                href: '/admin/films',
            },
            {
                label: 'Them moi phim',
            },
        ],
    },
    {
        path: '/admin/films/:id/edit',
        component: EditFilm,
        layout: DefaultLayout,
        breadcrumbs: [
            {
                label: 'Quan ly phim',
                href: '/admin/films',
            },
            {
                label: 'Sua',
            },
        ],
    },
    {
        path: '/admin/schedules',
        component: Schedules,
        layout: DefaultLayout,
        breadcrumbs: [
            {
                label: 'Quan ly lich chieu',
            },
        ],
    },
];

export default routes;

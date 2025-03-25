import { CreateEmployeePage } from '@/pages/CreateEmployeePage/ui/CreateEmployeePage';
import { EditEmployeePage } from '@/pages/EditEmployeePage/ui/EditEmployeePage';
import { InfoEmployeePage } from '@/pages/InfoEmployeePage';
import { MainPage } from '@/pages/MainPage/ui/MainPage';
import { NotFound } from '@/pages/NotFound/ui/NotFound';
import { Suspense } from 'react';
import { RouteObject } from 'react-router-dom';

export const routeConfig: RouteObject[] = [
    {
        path: '/',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <MainPage />
            </Suspense>
        ),
    },
    {
        path: '/create',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <CreateEmployeePage />
            </Suspense>
        ),
    },
    {
        path: '/edit',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <EditEmployeePage />
            </Suspense>
        ),
    },
    {
        path: '/info',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <InfoEmployeePage />
            </Suspense>
        ),
    },
    {
        path: '*',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <NotFound />
            </Suspense>
        ),
    },
];

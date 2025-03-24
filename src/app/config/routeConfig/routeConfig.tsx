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
        path: '*',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <NotFound />
            </Suspense>
        ),
    },
];

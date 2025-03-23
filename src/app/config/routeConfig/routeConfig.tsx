import { Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import { MainPage } from '../../../pages/MainPage/ui/MainPage';

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
                <MainPage />
            </Suspense>
        ),
    },
];

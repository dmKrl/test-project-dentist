import { useRoutes } from 'react-router-dom';
import { routeConfig } from '../../../config';

export const AppRouter = () => {
    const elementRoutes = useRoutes(routeConfig);

    return elementRoutes;
};

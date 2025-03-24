import { AppLink, AppLinkTheme } from '../../../shared/AppLink';
import cls from './NotFound.module.css';

export const NotFound = () => {
    return (
        <div className={cls.notFound}>
            <h2>Такой страницы не существует</h2>
            <AppLink
                className={cls.notFoundLink}
                linkTheme={AppLinkTheme.LINK_CLEAR}
                to="/"
            >
                Перейти на главную
            </AppLink>
        </div>
    );
};

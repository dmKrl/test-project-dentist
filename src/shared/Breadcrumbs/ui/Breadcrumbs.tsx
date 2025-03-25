import { FC } from 'react';
import { AppLink, AppLinkTheme } from '@/shared/AppLink';
import ArrowLeftIcon from '../assets/arrowLeft.svg?react';
import SlashIcon from '../assets/slash.svg?react';
import cls from './Breadcrumbs.module.css';

interface BreadcrumbsProps {
    namePage: string;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ namePage }) => {
    return (
        <div className={cls.breadcrumbs}>
            <AppLink
                className={cls.breadcrumbsText}
                to="/"
                linkTheme={AppLinkTheme.LINK_CLEAR}
            >
                <ArrowLeftIcon />
                Персоналии
            </AppLink>
            <SlashIcon />
            <div className={cls.breadcrumbsName}>
                <span>{namePage}</span>
            </div>
        </div>
    );
};

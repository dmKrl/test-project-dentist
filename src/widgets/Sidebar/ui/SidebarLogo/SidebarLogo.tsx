import { FC } from 'react';
import classNames from 'classnames';
import LogoIcon from '../../assets/logo/logo.svg?react';
import { AppLink, AppLinkTheme } from '@/shared/AppLink';
import cls from './SidebarLogo.module.css';

interface SidebarLogoProps {
    isCollapsed: boolean;
}

export const SidebarLogo: FC<SidebarLogoProps> = ({ isCollapsed }) => {
    const mods: Record<string, boolean> = {
        [cls.logoContentHide]: isCollapsed,
    };
    return (
        <AppLink
            to="/"
            className={cls.logoContainer}
            linkTheme={AppLinkTheme.LINK_CLEAR}
        >
            <LogoIcon />
            <div className={classNames(cls.logoContent, mods, [])}>
                <p className={cls.logoTitle}>СБ21</p>
                <p className={cls.logoNaming}>Секретарь СКК</p>
            </div>
        </AppLink>
    );
};

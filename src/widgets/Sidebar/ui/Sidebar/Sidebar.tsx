import { useState } from 'react';
import AboutIcon from '../../assets/workspace/about.svg?react';
import ArrowsCollapsed from '../../assets/button/arrowsCollapsed.svg?react';
import { SidebarPersonal } from '../SidebarPersonal/SidebarPersonal';
import { SidebarWorkspace } from '../SidebarWorkspace/SidebarWorkspace';
import { ButtonTheme } from '@/shared/Button/types/ButtonTheme';
import { AppLink, AppLinkTheme } from '@/shared/AppLink';
import { Button } from '@/shared/Button';
import classNames from 'classnames';
import cls from './Sidebar.module.css';
import { SidebarLogo } from '../SidebarLogo/SidebarLogo';

export const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const changeIsCollapsed = () => {
        setIsCollapsed((prev) => !prev);
    };

    const mods: Record<string, boolean> = {
        [cls.collapsed]: isCollapsed,
    };

    return (
        <section className={classNames(cls.sidebar, mods, [])}>
            <nav className={cls.sidebarContent}>
                <SidebarLogo isCollapsed={isCollapsed} />
                <SidebarPersonal isCollapsed={isCollapsed} />
                <SidebarWorkspace isCollapsed={isCollapsed} />
            </nav>
            <AppLink to="/" linkTheme={AppLinkTheme.LINK_SIDEBAR}>
                <AboutIcon />
                {isCollapsed ? '' : <span>О сервисе</span>}
            </AppLink>
            <Button
                type="button"
                onClick={changeIsCollapsed}
                buttonTheme={ButtonTheme.BUTTON_SIDEBAR}
                className={cls.collapsedButton}
            >
                <ArrowsCollapsed />
            </Button>
        </section>
    );
};

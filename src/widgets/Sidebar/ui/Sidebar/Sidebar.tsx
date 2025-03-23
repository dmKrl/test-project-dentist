import { useState } from 'react';
import { AppLink, AppLinkTheme } from '../../../../shared/AppLink';
import { SidebarPersonal } from '../SidebarPersonal/SidebarPersonal';
import { SidebarWorkspace } from '../SidebarWorkspace/SidebarWorkspace';
// import AboutIcon from '../../assets/workspace/about.svg';
import { Button } from '../../../../shared/Button';
import { ButtonTheme } from '../../../../shared/Button/types/ButtonTheme';
import AboutIcon from '../../assets/workspace/about.svg?react';
import cls from './Sidebar.module.css';
import classNames from 'classnames';

export const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const changeIsCollapsed = () => {
        setIsCollapsed((prev) => !prev);
    };

    const mods: Record<string, boolean> = {
        [cls.collapsed]: isCollapsed,
    };

    return (
        <div className={classNames(cls.sidebar, mods, [])}>
            <div className={cls.sidebarContent}>
                <SidebarPersonal isCollapsed={isCollapsed} />
                <SidebarWorkspace isCollapsed={isCollapsed} />
            </div>
            <AppLink to="/" linkTheme={AppLinkTheme.LINK_SIDEBAR}>
                <AboutIcon />
                {isCollapsed ? '' : <span>О сервисе</span>}
            </AppLink>
            <Button
                type="button"
                onClick={changeIsCollapsed}
                buttonTheme={ButtonTheme.CLEAR}
            >
                {isCollapsed ? '>>' : '<<'}
            </Button>
        </div>
    );
};

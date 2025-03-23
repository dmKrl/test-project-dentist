import { AppLink, AppLinkTheme } from '../../../../shared/AppLink';
import cls from './SidebarWorkspace.module.css';
import Star from '../../assets/workspace/star.svg?react';
import { FC } from 'react';

interface SidebarPersonalProps {
    isCollapsed: boolean;
}

export const SidebarWorkspace: FC<SidebarPersonalProps> = ({ isCollapsed }) => {
    return (
        <div className={cls.sidebarWorkspace}>
            <AppLink linkTheme={AppLinkTheme.LINK_SIDEBAR} to="/">
                <Star />
                {isCollapsed ? '' : <span>Руководитель МО</span>}
            </AppLink>
            <AppLink linkTheme={AppLinkTheme.LINK_SIDEBAR} to="/">
                <Star />
                {isCollapsed ? '' : <span>Ответственное лицо</span>}
            </AppLink>
            <AppLink linkTheme={AppLinkTheme.LINK_SIDEBAR} to="/">
                <Star />
                {isCollapsed ? '' : <span>Уполномоченное лицо</span>}
            </AppLink>
            <AppLink linkTheme={AppLinkTheme.LINK_SIDEBAR} to="/">
                <Star />
                {isCollapsed ? '' : <span>Председатель ВК</span>}
            </AppLink>
            <AppLink linkTheme={AppLinkTheme.LINK_SIDEBAR} to="/">
                <Star />
                {isCollapsed ? '' : <span>Секретарь ВК</span>}
            </AppLink>
            <AppLink linkTheme={AppLinkTheme.LINK_SIDEBAR} to="/">
                <Star />
                {isCollapsed ? '' : <span>Член ВК</span>}
            </AppLink>
            <AppLink linkTheme={AppLinkTheme.LINK_SIDEBAR} to="/">
                <Star />
                {isCollapsed ? '' : <span>Администратор клиники</span>}
            </AppLink>
        </div>
    );
};

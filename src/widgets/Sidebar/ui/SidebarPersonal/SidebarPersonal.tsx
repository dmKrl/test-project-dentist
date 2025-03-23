import { AppLink, AppLinkTheme } from '../../../../shared/AppLink';
import cls from './SidebarPersonal.module.css';
import Calendar from '../../assets/personal/calendar.svg?react';
import Organization from '../../assets/personal/organization.svg?react';
import Ruble from '../../assets/personal/ruble.svg?react';
import Structure from '../../assets/personal/structure.svg?react';
import VvkRegister from '../../assets/personal/vvk-register.svg?react';
import { FC } from 'react';

interface SidebarPersonalProps {
    isCollapsed: boolean;
}

export const SidebarPersonal: FC<SidebarPersonalProps> = (props) => {
    const { isCollapsed } = props;
    return (
        <div className={cls.sidebarPersonal}>
            <AppLink linkTheme={AppLinkTheme.LINK_SIDEBAR} to="/">
                <Structure />
                {isCollapsed ? '' : <span>Структура ВКК</span>}
            </AppLink>
            <AppLink linkTheme={AppLinkTheme.LINK_SIDEBAR} to="/">
                <Organization />
                {isCollapsed ? '' : <span>Организация</span>}
            </AppLink>
            <AppLink linkTheme={AppLinkTheme.LINK_SIDEBAR} to="/">
                <VvkRegister />
                {isCollapsed ? '' : <span>Реестр документов ВКК</span>}
            </AppLink>
            <AppLink linkTheme={AppLinkTheme.LINK_SIDEBAR} to="/">
                <Calendar />
                {isCollapsed ? '' : <span>Календарь ВКК</span>}
            </AppLink>
            <AppLink linkTheme={AppLinkTheme.LINK_SIDEBAR} to="/">
                <Ruble />
                {isCollapsed ? '' : <span>Тарифы и оплата</span>}
            </AppLink>
        </div>
    );
};

import { FC } from 'react';
import Calendar from '../../assets/personal/calendar.svg?react';
import Organization from '../../assets/personal/organization.svg?react';
import Ruble from '../../assets/personal/ruble.svg?react';
import Structure from '../../assets/personal/structure.svg?react';
import VvkRegister from '../../assets/personal/vvk-register.svg?react';
import ArrowDrop from '../../assets/button/arrowDrop.svg?react';
import { AppLink, AppLinkTheme } from '@/shared/AppLink';
import { Button } from '@/shared/Button';
import { ButtonTheme } from '@/shared/Button/types/ButtonTheme';
import cls from './SidebarPersonal.module.css';
import classNames from 'classnames';

interface SidebarPersonalProps {
    isCollapsed: boolean;
}

export const SidebarPersonal: FC<SidebarPersonalProps> = ({ isCollapsed }) => {
    const mods: Record<string, boolean> = {
        [cls.collapsed]: isCollapsed,
    };
    return (
        <>
            <Button
                buttonTheme={ButtonTheme.CLEAR}
                className={classNames(cls.buttonDrop, mods, [])}
            >
                {!isCollapsed && 'Личный кабинет'} <ArrowDrop />
            </Button>
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
        </>
    );
};

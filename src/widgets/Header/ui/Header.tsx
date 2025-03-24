import { FC } from 'react';
import classNames from 'classnames';
import NotificationIcon from '../assets/notification.svg?react';
import MailIcon from '../assets/mail.svg?react';
import UserIcon from '../assets/user.svg?react';
import LineIcon from '../assets/line.svg?react';
import { Select, SelectTheme } from '@/shared/Select';
import { AppLink, AppLinkTheme } from '@/shared/AppLink';
import cls from './Header.module.css';

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
    return (
        <header className={classNames(cls.header, {}, [className])}>
            <div className="headerRight">
                <Select
                    selectLabel="Выберите подразделение"
                    selectTheme={SelectTheme.SELECT_HEADER}
                />
            </div>
            <div className={cls.headerRight}>
                <AppLink to="/" linkTheme={AppLinkTheme.LINK_CLEAR}>
                    <NotificationIcon />
                </AppLink>
                <AppLink to="/" linkTheme={AppLinkTheme.LINK_CLEAR}>
                    <MailIcon />
                </AppLink>
                <LineIcon />
                <div className={cls.userRole}>
                    <span>Руководитель МО</span>
                </div>
                <AppLink to="/" linkTheme={AppLinkTheme.LINK_CLEAR}>
                    <UserIcon />
                </AppLink>
            </div>
        </header>
    );
};

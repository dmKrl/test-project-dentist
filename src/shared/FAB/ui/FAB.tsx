import MessageIcon from '../assets/message.svg?react';
import cls from './FAB.module.css';
import { AppLink, AppLinkTheme } from '@/shared/AppLink';

export const FAB = () => {
    return (
        <AppLink to="/" linkTheme={AppLinkTheme.LINK_CLEAR} className={cls.fAB}>
            <MessageIcon />
        </AppLink>
    );
};

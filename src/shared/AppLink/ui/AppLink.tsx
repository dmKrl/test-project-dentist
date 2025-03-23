import classNames from 'classnames';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { AppLinkTheme } from '../types/AppLinkTheme';
import cls from './AppLink.module.css';

interface AppLinkProps extends LinkProps {
    className?: string;
    linkTheme: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { className, children, to = '/', linkTheme } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[linkTheme]])}
        >
            {children}
        </Link>
    );
};

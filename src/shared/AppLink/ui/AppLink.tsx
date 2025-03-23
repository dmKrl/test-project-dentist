import classNames from 'classnames';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.css';

interface AppLinkProps extends LinkProps {
    className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { className, children } = props;

    return (
        <Link to="/" className={classNames(cls.appLink, {}, [className])}>
            {children}
        </Link>
    );
};

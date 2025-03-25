import { FC, ReactNode } from 'react';
import cls from './InfoItem.module.css';
import classNames from 'classnames';

interface InfoItemProps {
    children?: ReactNode;
    className?: string;
}

export const InfoItem: FC<InfoItemProps> = ({ children, className }) => {
    return (
        <th className={classNames(cls.infoItem, {}, [className])}>
            {children}
        </th>
    );
};

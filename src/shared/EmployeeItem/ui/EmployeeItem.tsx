import { FC, ReactNode } from 'react';
import cls from './EmployeeItem.module.css';
import classNames from 'classnames';

interface EmployeeItemProps {
    children?: ReactNode;
    className?: string;
}

export const EmployeeItem: FC<EmployeeItemProps> = ({
    children,
    className,
}) => {
    return (
        <td className={classNames(cls.employeeItem, {}, [className])}>
            {children}
        </td>
    );
};

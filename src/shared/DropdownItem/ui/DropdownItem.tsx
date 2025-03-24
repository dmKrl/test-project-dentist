import { FC, ReactNode } from 'react';
import CloseButton from '../assets/closeButton.svg?react';
import { Button } from '@/shared/Button';
import { ButtonTheme } from '@/shared/Button/types/ButtonTheme';
import cls from './DropdownItem.module.css';
import classNames from 'classnames';
import { DropdownItemTheme } from '../types/ItemTheme';

interface DropdownItemProps {
    children: ReactNode;
    dropdownTheme: DropdownItemTheme;
}

export const DropdownItem: FC<DropdownItemProps> = ({
    children,
    dropdownTheme,
}) => {
    return (
        <div className={classNames(cls.dropdownItem, {}, [cls[dropdownTheme]])}>
            <span className={cls.dropdownItemText}>{children}</span>
            <Button buttonTheme={ButtonTheme.CLEAR}>
                <CloseButton className={cls.dropdownItemClose} />
            </Button>
        </div>
    );
};

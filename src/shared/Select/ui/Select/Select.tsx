import { FC, ReactNode } from 'react';
import { SelectTheme } from '../../types/SelectTheme';
import classNames from 'classnames';
import ArrowSelect from '@/shared/assets/arrowSelect.svg?react';
import cls from './Select.module.css';

interface SelectProps {
    selectLabel?: ReactNode;
    selectTheme: SelectTheme;
}

export const Select: FC<SelectProps> = ({ selectLabel, selectTheme }) => {
    return (
        <div className={classNames(cls.select, {}, [cls[selectTheme]])}>
            <label>
                {selectLabel} <ArrowSelect />
            </label>
        </div>
    );
};

import { FC } from 'react';
import { SelectTheme } from '../../types/SelectTheme';
import classNames from 'classnames';
import ArrowSelect from '@/shared/assets/arrowSelect.svg?react';
import { Position } from '@/entites/Employee/model/types/infoSchema';
import cls from '../Select/Select.module.css';

interface SelectPositionProps {
    selectLabel?: string;
    selectTheme: SelectTheme;
    options: Position[];
    value: string;
    onChange: (value: string) => void;
}

export const SelectPosition: FC<SelectPositionProps> = ({
    selectLabel,
    selectTheme,
    options,
    value,
    onChange,
}) => {
    const handerOnChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <div className={cls.selectContainer}>
            <span>Медицинская должность</span>
            <div className={classNames(cls.select, {}, [cls[selectTheme]])}>
                <label>
                    {value || 'Выберите должность'} <ArrowSelect />
                </label>
                <select
                    id={selectLabel}
                    value={value}
                    onChange={(e) => handerOnChangeSelect(e)}
                >
                    <option value=""></option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

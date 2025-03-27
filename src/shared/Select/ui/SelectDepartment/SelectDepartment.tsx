import { FC } from 'react';
import { SelectTheme } from '../../types/SelectTheme';
import classNames from 'classnames';
import ArrowSelect from '@/shared/assets/arrowSelect.svg?react';
import { Department } from '@/entites/Employee/model/types/infoSchema';
import cls from './SelectDepartment.module.css';

interface SelectDepartmentProps {
    selectLabel?: string;
    selectTheme: SelectTheme;
    options: Department[];
    value: string;
    onChange: (value: string) => void;
}

export const SelectDepartment: FC<SelectDepartmentProps> = ({
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
            <span>Подразделение</span>
            <div className={classNames(cls.select, {}, [cls[selectTheme]])}>
                <label>
                    {value || 'Выберите подразделение'} <ArrowSelect />
                </label>
                <select
                    id={selectLabel}
                    value={value}
                    onChange={(e) => handerOnChangeSelect(e)}
                >
                    <option value="">{value}</option>
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

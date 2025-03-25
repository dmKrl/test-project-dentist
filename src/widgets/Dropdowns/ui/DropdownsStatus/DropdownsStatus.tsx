import { FC } from 'react';
import ArrowSelect from '@/shared/assets/arrowSelect.svg?react';
import { DropdownItem } from '@/shared/DropdownItem';
import cls from './DropdownsStatus.module.css';
import { DropdownItemTheme } from '@/shared/DropdownItem/types/ItemTheme';
import classNames from 'classnames';

interface DropdownsStatusProps {
    data: string[];
    className: string;
}

export const DropdownsStatus: FC<DropdownsStatusProps> = ({
    data,
    className,
}) => {
    return (
        <div className={classNames(cls.dropdownsStatus, {}, [className])}>
            {data.map((item, index) => {
                return (
                    <DropdownItem
                        dropdownTheme={DropdownItemTheme.ITEM_STATUS}
                        key={index}
                    >
                        {item}
                    </DropdownItem>
                );
            })}
            <span className={cls.ellipsis}>...</span>
            <div className={cls.quantity}>{data.length}</div>
            <ArrowSelect />
        </div>
    );
};

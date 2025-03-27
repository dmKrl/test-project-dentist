import { FC } from 'react';
import ArrowSelect from '@/shared/assets/arrowSelect.svg?react';
import { DropdownItem } from '@/shared/DropdownItem';
import { DropdownItemTheme } from '@/shared/DropdownItem/types/ItemTheme';
import classNames from 'classnames';
import cls from './DropdownsName.module.css';

interface DropdownsNameProps {
    data: string[];
    className: string;
}

export const DropdownsName: FC<DropdownsNameProps> = ({ data, className }) => {
    return (
        <div className={classNames(cls.dropdownsNameContainer, {}, [className])}>
            <div className={cls.dropdownsName}>
                {data.map((item, index) => {
                    return (
                        <DropdownItem
                            dropdownTheme={DropdownItemTheme.ITEM_NAME}
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
        </div>
    );
};

import { FC, useState } from 'react';
import ArrowSelect from '@/shared/assets/arrowSelect.svg?react';
import { DropdownItem } from '@/shared/DropdownItem';
import { DropdownItemTheme } from '@/shared/DropdownItem/types/ItemTheme';
import { FiltersName, filterStore } from '@/features/Filters';
import { TypeEmployeeDB } from '@/entites/Employee';
import { observer } from 'mobx-react-lite';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import cls from '../Dropdowns/Dropdowns.module.css';

interface DropdownsNameProps {
    className: string;
    filteredEmployees: TypeEmployeeDB[];
}

export const DropdownsName: FC<DropdownsNameProps> = observer(
    ({ className, filteredEmployees }) => {
        const [isOpenList, setIsOpenList] = useState(false);

        const handerIsOpenList = () => {
            setIsOpenList((prev) => !prev);
        };

        return (
            <>
                <div
                    className={classNames(cls.dropdownsNameContainer, {}, [
                        className,
                    ])}
                >
                    <div
                        className={cls.dropdownsBlock}
                        onClick={handerIsOpenList}
                    >
                        <div className={cls.dropdownItems}>
                            {!filterStore.selectedName.length && (
                                <p className={cls.dropdownText}>
                                    Выберите фильтр
                                </p>
                            )}
                            {filterStore.selectedName.map((item) => {
                                return (
                                    <DropdownItem
                                        dropdownTheme={
                                            DropdownItemTheme.ITEM_NAME
                                        }
                                        key={uuidv4()}
                                    >
                                        {item}
                                    </DropdownItem>
                                );
                            })}
                        </div>
                        <div className={cls.dropdownsContent}>
                            <span className={cls.ellipsis}>...</span>
                            <div className={cls.quantity}>
                                {filterStore.selectedName.length}
                            </div>
                            <ArrowSelect />
                        </div>
                    </div>
                    {isOpenList && (
                        <FiltersName filteredEmployees={filteredEmployees} />
                    )}
                </div>
            </>
        );
    },
);

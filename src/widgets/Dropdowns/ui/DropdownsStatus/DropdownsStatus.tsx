import { FC, useState } from 'react';
import ArrowSelect from '@/shared/assets/arrowSelect.svg?react';
import { DropdownItem } from '@/shared/DropdownItem';
import { DropdownItemTheme } from '@/shared/DropdownItem/types/ItemTheme';
import { Position } from '@/entites/Employee/model/types/infoSchema';
import { FiltersRole, filterStore } from '@/features/Filters';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import cls from '../Dropdowns/Dropdowns.module.css';

interface DropdownsStatusProps {
    className: string;
    listRoles: Position[];
}

export const DropdownsStatus: FC<DropdownsStatusProps> = observer(
    ({ className, listRoles }) => {
        const [isOpenList, setIsOpenList] = useState(false);

        const handerIsOpenList = () => {
            setIsOpenList((prev) => !prev);
        };

        return (
            <>
                <div
                    className={classNames(cls.dropdownsStatusContainer, {}, [
                        className,
                    ])}
                >
                    <div
                        className={cls.dropdownsBlock}
                        onClick={handerIsOpenList}
                    >
                        <div className={cls.dropdownItems}>
                            {!filterStore.selectendRole.length && (
                                <div>Выберите фильтр</div>
                            )}
                            {filterStore.selectendRole.map((item) => {
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
                                {filterStore.selectendRole.length}
                            </div>
                            <ArrowSelect />
                        </div>
                    </div>
                    {isOpenList && <FiltersRole listRoles={listRoles} />}
                </div>
            </>
        );
    },
);

import { FC, useState } from 'react';
import ArrowSelect from '@/shared/assets/arrowSelect.svg?react';
import { DropdownItem } from '@/shared/DropdownItem';
import { DropdownItemTheme } from '@/shared/DropdownItem/types/ItemTheme';
import { Department } from '@/entites/Employee/model/types/infoSchema';
import { FiltersRole, filterStore } from '@/features/Filters';
import { v4 as uuidv4 } from 'uuid';
import cls from './DropdownsStatus.module.css';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

interface DropdownsStatusProps {
    className: string;
    listRoles: Department[];
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
                        className={cls.dropdownsStatus}
                        onClick={handerIsOpenList}
                    >
                        {!filterStore.selectendRole.length && <div>Пусто</div>}
                        {listRoles.map((item) => {
                            return (
                                <DropdownItem
                                    dropdownTheme={DropdownItemTheme.ITEM_NAME}
                                    key={uuidv4()}
                                >
                                    {item.label}
                                </DropdownItem>
                            );
                        })}
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

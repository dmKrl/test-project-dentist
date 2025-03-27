import { FilterItem } from '../FilterItem/FilterItem';
import { filterStore } from '../../model/store/filterStore';
import { observer } from 'mobx-react-lite';
import { v4 as uuidv4 } from 'uuid';
import { FC } from 'react';
import { Department } from '@/entites/Employee/model/types/infoSchema';
import cls from './FiltersRole.module.css';
import classNames from 'classnames';

interface FilterRole {
    listRoles: Department[];
    className?: string;
}

export const FiltersRole: FC<FilterRole> = observer(
    ({ listRoles, className }) => {
        return (
            <div className={classNames(cls.filters, {}, [className])}>
                <div className={cls.filtersCheckboxes}>
                    {listRoles.map((department) => {
                        return (
                            <FilterItem
                                key={uuidv4()}
                                categoryLabel={department.label}
                                category={department.value}
                                handleCheckboxChange={filterStore.toggleRole}
                                selectedCategories={
                                    filterStore.selectedCatogories
                                }
                                className={cls.filterNameItem}
                            />
                        );
                    })}
                </div>
            </div>
        );
    },
);

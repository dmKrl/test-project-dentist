import { FilterItem } from '../FilterItem/FilterItem';
import { filterStore } from '../../model/store/filterStore';
import { observer } from 'mobx-react-lite';
import { v4 as uuidv4 } from 'uuid';
import { TypeEmployeeDB } from '@/entites/Employee/model/types/employee';
import { FC } from 'react';
import { changeToFullname } from '@/entites/Employee/model/lib/changeToFullname';
import cls from './FiltersName.module.css';
import classNames from 'classnames';

interface FilterName {
    filteredEmployees: TypeEmployeeDB[];
    className?: string;
}

export const FiltersName: FC<FilterName> = observer(
    ({ filteredEmployees, className }) => {
        return (
            <div className={classNames(cls.filters, {}, [className])}>
                <div className={cls.filtersCheckboxes}>
                    {filteredEmployees.map((employer) => {
                        return (
                            <FilterItem
                                key={uuidv4()}
                                categoryLabel={changeToFullname(
                                    employer.surname,
                                    employer.name,
                                    employer.patronymic,
                                )}
                                category={employer.surname}
                                handleCheckboxChange={filterStore.toggleName}
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

import { FilterItem } from '../FilterItem/FilterItem';
import { filterStore } from '../../model/store/filterStore';
import { observer } from 'mobx-react-lite';
import { v4 as uuidv4 } from 'uuid';
import { FC } from 'react';
import { TypeEmployeeDB } from '@/entites/Employee';
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
                                category={changeToFullname(
                                    employer.surname,
                                    employer.name,
                                    employer.patronymic,
                                )}
                                handleCheckboxChange={filterStore.toggleName}
                                selectedData={filterStore.selectedName}
                                className={cls.filterNameItem}
                            />
                        );
                    })}
                </div>
            </div>
        );
    },
);

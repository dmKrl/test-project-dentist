import { DropdownsName } from '../DropdownsName/DropdownsName';
import { DropdownsStatus } from '../DropdownsStatus/DropdownsStatus';
import { FC } from 'react';
import { TypeEmployeeDB } from '@/entites/Employee/model/types/employee';
import cls from './Dropdowns.module.css';
import { getEmployeeStore } from '@/entites/Employee';
import { observer } from 'mobx-react-lite';

interface DropdownsProps {
    filteredEmployees: TypeEmployeeDB[];
}

export const Dropdowns: FC<DropdownsProps> = observer(
    ({ filteredEmployees }) => {
        return (
            <div className={cls.dropdowns}>
                <DropdownsName
                    className={cls.dropdownsContainer}
                    filteredEmployees={filteredEmployees}
                />
                <DropdownsStatus
                    className={cls.dropdownsContainer}
                    listRoles={getEmployeeStore.departments}
                />
            </div>
        );
    },
);

import { FC } from 'react';
import { DropdownsName } from '../DropdownsName/DropdownsName';
import { DropdownsStatus } from '../DropdownsStatus/DropdownsStatus';
import { getEmployeeStore, TypeEmployeeDB } from '@/entites/Employee';
import { observer } from 'mobx-react-lite';
import cls from './Dropdowns.module.css';

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
                    listRoles={getEmployeeStore.positions}
                />
            </div>
        );
    },
);

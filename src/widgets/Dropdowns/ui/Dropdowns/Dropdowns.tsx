import cls from './Dropdowns.module.css';
import { DropdownsName } from '../DropdownsName/DropdownsName';
import { DropdownsStatus } from '../DropdownsStatus/DropdownsStatus';

// interface DropdownsProps {
// }

const dataNames: string[] = [
    'Иван Иванов Иванович',
    'Иван Иванов Иванович',
    'Иван Иванов Иванович',
    'Иван Иванов Иванович',
];

const dataStatus: string[] = [
    'Руководитель МО',
    'Руководитель МО',
    'Руководитель МО',
];

export const Dropdowns = () => {
    return (
        <div className={cls.dropdowns}>
            <DropdownsName
                data={dataNames}
                className={cls.dropdownsContainer}
            />
            <DropdownsStatus
                data={dataStatus}
                className={cls.dropdownsContainer}
            />
        </div>
    );
};

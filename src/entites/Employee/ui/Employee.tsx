import { FC, useState } from 'react';
import CopyIcon from '../assets/copyIcon.svg?react';
import BlockIcon from '../assets/block.svg?react';
import PasswordIcon from '../assets/checkPassword.svg?react';
import DeleteIcon from '../assets/delete.svg?react';
import EditIcon from '../assets/edit.svg?react';
import Check from '../assets/check.svg?react';
import { TypeEmployee } from '../model/types/employee';
import { Input, InputTheme } from '@/shared/Input';
import { EmployeeItem } from '@/shared/EmployeeItem/ui/EmployeeItem';
import cls from './Employee.module.css';
import { Button } from '@/shared/Button';
import { ButtonTheme } from '@/shared/Button/types/ButtonTheme';

interface EmployeeProps {
    className?: string;
}

export const Employee: FC<EmployeeProps> = () => {
    const [employees] = useState<TypeEmployee[]>([
        // Ваши данные о сотрудниках (замените моковые данные)
        {
            id: '1',
            fullName: 'Иванов Иван Иванович',
            phone: '+ 7 (999) 999 99-99',
            mail: 'ksenia.s@pyrobyte.ru',
            password: '•••••••••',
            jobPosition: 'Разработчик',
            role: 'Руководитель МО',
            status: 'Активна',
            pap: false,
            dateJoin: '29.03.2023',
            dateQuit: '29.03.2023',
        },
        {
            id: '2',
            fullName: 'Петров Петр Петрович',
            phone: '+ 7 (999) 999 99-99',
            mail: 'ksenia.s@pyrobyte.ru',
            password: '•••••••••',
            jobPosition: 'Менеджер',
            role: 'Врач ВК',
            status: 'Активна',
            pap: true,
            dateJoin: '29.03.2023',
            dateQuit: '29.03.2023',
        },
    ]);
    return (
        <tbody className={cls.employee}>
            {employees.map((employee) => {
                return (
                    <tr key={employee.id}>
                        <td>
                            <Input
                                type="checkbox"
                                value={employee.id}
                                className={cls.employeeCheckbox}
                                inputTheme={InputTheme.CHECKBOX_INPUT}
                            />
                        </td>
                        <EmployeeItem className={cls.fullName}>
                            <span>{employee.fullName}</span>
                        </EmployeeItem>
                        <EmployeeItem className={cls.phone}>
                            <span>{employee.phone}</span>
                            <Button buttonTheme={ButtonTheme.CLEAR}>
                                <CopyIcon />
                            </Button>
                        </EmployeeItem>
                        <EmployeeItem className={cls.mail}>
                            <span>{employee.mail}</span>
                            <Button buttonTheme={ButtonTheme.CLEAR}>
                                <CopyIcon />
                            </Button>
                        </EmployeeItem>
                        <EmployeeItem className={cls.password}>
                            <span>{employee.password}</span>
                            <Button buttonTheme={ButtonTheme.CLEAR}>
                                <PasswordIcon />
                            </Button>
                        </EmployeeItem>
                        <EmployeeItem className={cls.jobPosition}>
                            <span>{employee.jobPosition}</span>
                        </EmployeeItem>
                        <EmployeeItem className={cls.role}>
                            <span>{employee.role}</span>
                        </EmployeeItem>
                        <EmployeeItem className={cls.status}>
                            <span>{employee.status}</span>
                        </EmployeeItem>
                        <EmployeeItem className={cls.pap}>
                            <span>{<Check />}</span>
                        </EmployeeItem>
                        <EmployeeItem className={cls.dateJoin}>
                            <span>{employee.dateJoin}</span>
                        </EmployeeItem>
                        <EmployeeItem className={cls.dateQuit}>
                            <span>{employee.dateQuit}</span>
                        </EmployeeItem>
                        <EmployeeItem className={cls.dismiss}>
                            <Button
                                buttonTheme={ButtonTheme.BUTTON_SECONDARY_SMALL}
                            >
                                Уволить
                            </Button>
                        </EmployeeItem>
                        <EmployeeItem className={cls.entry}>
                            <Button buttonTheme={ButtonTheme.CLEAR}>
                                <EditIcon />
                            </Button>
                        </EmployeeItem>
                        <EmployeeItem className={cls.entry}>
                            <Button buttonTheme={ButtonTheme.CLEAR}>
                                <BlockIcon />
                            </Button>
                        </EmployeeItem>
                        <EmployeeItem className={cls.entry}>
                            <Button buttonTheme={ButtonTheme.CLEAR}>
                                <DeleteIcon />
                            </Button>
                        </EmployeeItem>
                    </tr>
                );
            })}
        </tbody>
    );
};

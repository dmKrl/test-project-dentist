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
import { Button } from '@/shared/Button';
import { ButtonTheme } from '@/shared/Button/types/ButtonTheme';
import { CustomTooltip } from '@/shared/CustomTooltip';
import { AppLink, AppLinkTheme } from '@/shared/AppLink';
import cls from './Employee.module.css';
import { DismissalModal } from '@/features/DismissalEmployee/Index';

interface EmployeeProps {
    className?: string;
}

export const Employee: FC<EmployeeProps> = () => {
    const [isDismissalOpen, setIsDismissalOpen] = useState(false);
    const [employees] = useState<TypeEmployee[]>([
        // Ваши данные о сотрудниках (замените моковые данные)
        {
            id: 1,
            fullName: 'Иванов Иван Иванович',
            phone: '+ 7 (999) 999 99-99',
            mail: 'ksenia.s@pyrobyte.ru',
            password: '•••••••••',
            jobPosition: 'Дикектор',
            role: 'Руководитель МО',
            status: 'Активна',
            pap: false,
            dateJoin: '29.03.2023',
            dateQuit: '29.03.2023',
        },
        {
            id: 2,
            fullName: 'Петров Петр Петрович',
            phone: '+ 7 (999) 999 99-99',
            mail: 'ksenia.s@pyrobyte.ru',
            password: '•••••••••',
            jobPosition: 'Дикектор',
            role: 'Врач ВК',
            status: 'Активна',
            pap: true,
            dateJoin: '29.03.2023',
            dateQuit: '29.03.2023',
        },
    ]);

    const handlerOpenDismissalModal = () => {
        setIsDismissalOpen((prev) => !prev);
    };

    return (
        <>
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
                                <AppLink
                                    to="/info"
                                    linkTheme={AppLinkTheme.LINK_CLEAR}
                                >
                                    <span>{employee.fullName}</span>
                                </AppLink>
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
                                <span
                                    data-tooltip-id="job-position"
                                    data-tooltip-content={'Главный врач'}
                                >
                                    {employee.jobPosition}
                                </span>
                                <CustomTooltip
                                    id="job-position"
                                    place="bottom"
                                />
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
                                    buttonTheme={
                                        ButtonTheme.BUTTON_SECONDARY_SMALL
                                    }
                                    onClick={handlerOpenDismissalModal}
                                >
                                    Уволить
                                </Button>
                            </EmployeeItem>
                            <EmployeeItem className={cls.entry}>
                                <Button buttonTheme={ButtonTheme.CLEAR}>
                                    <AppLink
                                        to="/edit"
                                        linkTheme={AppLinkTheme.LINK_CLEAR}
                                    >
                                        <EditIcon />
                                    </AppLink>
                                </Button>
                            </EmployeeItem>
                            <EmployeeItem className={cls.entry}>
                                <Button buttonTheme={ButtonTheme.CLEAR}>
                                    <BlockIcon
                                        data-tooltip-id="block-tooltip"
                                        data-tooltip-content={
                                            'Разблокировать сотрудника'
                                        }
                                    />
                                </Button>
                                <CustomTooltip
                                    id="block-tooltip"
                                    place="left"
                                />
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
            <DismissalModal
                isOpen={isDismissalOpen}
                onClose={handlerOpenDismissalModal}
            />
        </>
    );
};

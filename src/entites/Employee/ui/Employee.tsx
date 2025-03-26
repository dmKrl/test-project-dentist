import { FC, useState } from 'react';
import CopyIcon from '../assets/copyIcon.svg?react';
import BlockIcon from '../assets/block.svg?react';
import PasswordIcon from '../assets/checkPassword.svg?react';
import DeleteIcon from '../assets/delete.svg?react';
import EditIcon from '../assets/edit.svg?react';
import Check from '../assets/check.svg?react';
import { TypeEmployeeDB } from '../model/types/employee';
import { Input, InputTheme } from '@/shared/Input';
import { EmployeeItem } from '@/shared/EmployeeItem/ui/EmployeeItem';
import { Button } from '@/shared/Button';
import { ButtonTheme } from '@/shared/Button/types/ButtonTheme';
import { CustomTooltip } from '@/shared/CustomTooltip';
import { AppLink, AppLinkTheme } from '@/shared/AppLink';
import cls from './Employee.module.css';
import { BlockModal } from '@/features/BlockEmployee/Index';
import { DismissalModal } from '@/features/DismissalEmployee';
import { DeleteModal } from '@/features/DeleteEmployee';
import { changeToFullname } from '../model/lib/changeToFullname';
import { observer } from 'mobx-react-lite';
import { infoEmployeeStore } from '@/entites/InfoForm';

interface EmployeeProps {
    className?: string;
    employees?: TypeEmployeeDB[] | undefined;
}

export const Employee: FC<EmployeeProps> = observer(({ employees }) => {
    const [isDismissalOpen, setIsDismissalOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isBlockOpen, setIsBlockOpen] = useState(false);

    const changeChoosenEmployeer = (employee: TypeEmployeeDB) => {
        if (employee) {
            infoEmployeeStore.setChoosenEmployee(employee);
        }
    };

    const handlerOpenDismissalModal = () => {
        setIsDismissalOpen((prev) => !prev);
    };
    const handlerOpenDeleteModal = () => {
        setIsDeleteOpen((prev) => !prev);
    };
    const handlerOpenBlockModal = () => {
        setIsBlockOpen((prev) => !prev);
    };

    return (
        <>
            <tbody className={cls.employee}>
                {employees?.map((employee) => {
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
                                    <span
                                        onClick={() =>
                                            changeChoosenEmployeer(employee)
                                        }
                                        data-tooltip-id="fullName"
                                        data-tooltip-content={changeToFullname(
                                            employee.surname,
                                            employee.name,
                                            employee.patronymic,
                                        )}
                                    >
                                        {changeToFullname(
                                            employee.surname,
                                            employee.name,
                                            employee.patronymic,
                                        )}
                                    </span>
                                </AppLink>
                                <CustomTooltip id="fullName" place="bottom" />
                            </EmployeeItem>
                            <EmployeeItem className={cls.phone}>
                                <span>{employee.phone}</span>
                                <Button buttonTheme={ButtonTheme.CLEAR}>
                                    <CopyIcon />
                                </Button>
                            </EmployeeItem>
                            <EmployeeItem className={cls.mail}>
                                <span>{employee.email}</span>
                                <Button buttonTheme={ButtonTheme.CLEAR}>
                                    <CopyIcon />
                                </Button>
                            </EmployeeItem>
                            <EmployeeItem className={cls.password}>
                                <span>•••••••••</span>
                                <Button buttonTheme={ButtonTheme.CLEAR}>
                                    <PasswordIcon />
                                </Button>
                            </EmployeeItem>
                            <EmployeeItem className={cls.jobPosition}>
                                <span
                                    data-tooltip-id="job-position"
                                    data-tooltip-content={
                                        employee.medical_position?.label
                                    }
                                >
                                    {employee.medical_position?.label}
                                </span>
                                <CustomTooltip
                                    id="job-position"
                                    place="bottom"
                                />
                            </EmployeeItem>
                            <EmployeeItem className={cls.role}>
                                <span>
                                    {employee.administrative_position?.label}
                                </span>
                            </EmployeeItem>
                            <EmployeeItem className={cls.status}>
                                <span>{employee?.status?.label}</span>
                            </EmployeeItem>
                            <EmployeeItem className={cls.pap}>
                                <span>{<Check />}</span>
                            </EmployeeItem>
                            <EmployeeItem className={cls.dateJoin}>
                                <span>{employee.hired_at}</span>
                            </EmployeeItem>
                            <EmployeeItem className={cls.dateQuit}>
                                <span>{employee.fired_at}</span>
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
                                <Button
                                    buttonTheme={ButtonTheme.CLEAR}
                                    onClick={handlerOpenBlockModal}
                                >
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
                                <Button
                                    buttonTheme={ButtonTheme.CLEAR}
                                    onClick={handlerOpenDeleteModal}
                                >
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
            <DeleteModal
                isOpen={isDeleteOpen}
                onClose={handlerOpenDeleteModal}
            />
            <BlockModal isOpen={isBlockOpen} onClose={handlerOpenBlockModal} />
        </>
    );
});

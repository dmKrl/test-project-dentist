import { FC, useState } from 'react';
import { Input, InputTheme } from '@/shared/Input';
import { Button } from '@/shared/Button';
import { ButtonTheme } from '@/shared/Button/types/ButtonTheme';
import { ChangePasswordModal } from '@/features/ChangePassword';
import { TypeEmployeeDB } from '@/entites/Employee/model/types/employee';
import { formatDate } from '@/entites/Employee/model/lib/FormatDate';
import Calendar from '../../assets/calendar.svg?react';
import {
    SelectDepartment,
    SelectPosition,
    SelectRole,
    SelectTheme,
} from '@/shared/Select';
import { getEmployeeStore } from '@/entites/Employee';
import DatePicker from 'react-datepicker';
import cls from './EditForm.module.css';

interface EditFormProps {
    className?: string;
    chosenEmployer: TypeEmployeeDB | null;
}

export const EditForm: FC<EditFormProps> = ({ chosenEmployer }) => {
    const [isOpenChangePassword, setIsOpenChangePassword] = useState(false);
    const [surname, setSurname] = useState(chosenEmployer?.surname);
    const [name, setName] = useState(chosenEmployer?.name);
    const [patronymic, setPatronymic] = useState(chosenEmployer?.patronymic);
    const [adminPosition, setAdminPosition] = useState(
        chosenEmployer?.administrative_position?.label ?? '',
    );
    const [medPosition, setMedPosition] = useState(
        chosenEmployer?.medical_position?.label ?? '',
    );
    const [department, setDepartment] = useState(
        chosenEmployer?.department?.label,
    );
    const [phone, setPhone] = useState(chosenEmployer?.phone);
    const [email, setEmail] = useState(chosenEmployer?.email);
    const [hiredDate, setHiredDate] = useState<Date | null>(new Date());

    const handerIsOpenChangePassword = () => {
        setIsOpenChangePassword((prev) => !prev);
    };

    return (
        <div className={cls.editForm}>
            <div className={cls.inputsBlock}>
                <Input
                    value={surname}
                    onChange={(e) => setSurname(e)}
                    labelInput="Фамилия"
                    placeholder="Введите Фамилию"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    value={name}
                    onChange={(e) => setName(e)}
                    labelInput="Имя"
                    placeholder="Введите Имя"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    value={patronymic}
                    onChange={(e) => setPatronymic(e)}
                    labelInput="Отчество"
                    placeholder="Введите Отчество"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <SelectRole
                    value={adminPosition}
                    options={getEmployeeStore.positions}
                    selectTheme={SelectTheme.SELECT_HEADER}
                    onChange={(e) => setAdminPosition(e)}
                />
                <SelectPosition
                    value={medPosition}
                    options={getEmployeeStore.positions}
                    selectTheme={SelectTheme.SELECT_HEADER}
                    onChange={(e) => setMedPosition(e)}
                />
                <SelectDepartment
                    value={department}
                    options={getEmployeeStore.departments}
                    selectTheme={SelectTheme.SELECT_HEADER}
                    onChange={(e) => setDepartment(e)}
                />
                <Input
                    value={phone}
                    onChange={(e) => setPhone(e)}
                    labelInput="Телефон"
                    placeholder="+7 (•••) ••• •• ••"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    value={email}
                    onChange={(e) => setEmail(e)}
                    labelInput="E-mail"
                    placeholder="Введите ваш E-mail"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Button
                    className={cls.editPassword}
                    buttonTheme={ButtonTheme.BUTTON_SECONDARY}
                    onClick={handerIsOpenChangePassword}
                >
                    Изменить пароль
                </Button>
                <DatePicker
                    selected={hiredDate}
                    onChange={(date) => setHiredDate(date)}
                    className={cls.calendar}
                    customInput={<Calendar />}
                ></DatePicker>
                <Input
                    value={formatDate(hiredDate)}
                    labelInput="Дата принятия на работу"
                    placeholder="Выберите дату"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
            </div>
            <Button buttonTheme={ButtonTheme.BUTTON_PRIMARY}>
                Сохранить изменения
            </Button>
            <ChangePasswordModal
                isOpen={isOpenChangePassword}
                onClose={handerIsOpenChangePassword}
            />
        </div>
    );
};

import { FC, useState } from 'react';
import { getUnixTime } from 'date-fns';
import DatePicker from 'react-datepicker';
import { Input, InputTheme } from '@/shared/Input';
import { Button } from '@/shared/Button';
import { ButtonTheme } from '@/shared/Button/types/ButtonTheme';
import { formatDate } from '@/entites/Employee/model/lib/FormatDate';
import Calendar from '../../assets/calendar.svg?react';
import { TypeCreateEmployee } from '../../model/types/typeCreateEmployee';
import { createEmployeeStore } from '../../model/store/createStore';
import cls from './CreateForm.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.css';
import {
    SelectDepartment,
    SelectPosition,
    SelectRole,
    SelectTheme,
} from '@/shared/Select';
import { getEmployeeStore } from '@/entites/Employee';
import { observer } from 'mobx-react-lite';

interface CreateFormProps {
    className?: string;
}

export const CreateForm: FC<CreateFormProps> = observer(() => {
    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [adminPosition, setAdminPosition] = useState('');
    const [medPosition, setMedPosition] = useState('');
    const [department, setDepartment] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [hiredDate, setHiredDate] = useState<Date | null>(new Date());

    const handerOnCreateNewEmployee = () => {
        const newEmployee: TypeCreateEmployee = {
            name: name,
            surname: surname,
            patronymic: patronymic,
            email: email,
            phone: phone,
            department: department,
            administrative_position: adminPosition,
            medical_position: medPosition,
            is_simple_digital_sign_enabled: false,
            hired_at: hiredDate ? getUnixTime(hiredDate) : null,
        };
        createEmployeeStore.createEmployee(newEmployee);
    };

    return (
        <div className={cls.createForm}>
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
            <Button
                disabled={!surname}
                buttonTheme={
                    !surname
                        ? ButtonTheme.BUTTON_DISABLED_PRIM
                        : ButtonTheme.BUTTON_PRIMARY
                }
                onClick={handerOnCreateNewEmployee}
            >
                Сохранить изменения
            </Button>
        </div>
    );
});

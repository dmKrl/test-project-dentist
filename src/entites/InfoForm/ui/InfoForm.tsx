import { FC } from 'react';
import cls from './InfoForm.module.css';
import { Input, InputTheme } from '@/shared/Input';
import { TypeEmployeeDB } from '@/entites/Employee/model/types/employee';

interface InfoFormProps {
    className?: string;
    chosenEmployer: TypeEmployeeDB | null;
}

export const InfoForm: FC<InfoFormProps> = ({ chosenEmployer }) => {
    return (
        <div className={cls.infoForm}>
            <div className={cls.inputsBlock}>
                <Input
                    value={chosenEmployer?.surname}
                    labelInput="Фамилия"
                    placeholder="Введите Фамилию"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    value={chosenEmployer?.name}
                    labelInput="Имя"
                    placeholder="Введите Имя"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    value={chosenEmployer?.patronymic}
                    labelInput="Отчество"
                    placeholder="Введите Отчество"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    value={chosenEmployer?.administrative_position?.label}
                    labelInput="Административная должность"
                    placeholder="Выберите должность"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    value={chosenEmployer?.medical_position?.label}
                    labelInput="Медицинская должность"
                    placeholder="Выберите должность"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    value={chosenEmployer?.department?.label}
                    labelInput="Подразделение"
                    placeholder="Выберите подразделение"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    value={chosenEmployer?.phone}
                    labelInput="Телефон"
                    placeholder="+7 (•••) ••• •• ••"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    value={chosenEmployer?.email}
                    labelInput="E-mail"
                    placeholder="Введите ваш E-mail"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    value={chosenEmployer?.hired_at}
                    labelInput="Дата принятия на работу"
                    placeholder="Выберите дату"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
            </div>
        </div>
    );
};

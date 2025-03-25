import { FC } from 'react';
import cls from './InfoForm.module.css';
import { Input, InputTheme } from '@/shared/Input';

interface InfoFormProps {
    className?: string;
}

export const InfoForm: FC<InfoFormProps> = () => {
    return (
        <div className={cls.infoForm}>
            <div className={cls.inputsBlock}>
                <Input
                    value="Иванов"
                    labelInput="Фамилия"
                    placeholder="Введите Фамилию"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    value="Иван"
                    labelInput="Имя"
                    placeholder="Введите Имя"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    value="Иванович"
                    labelInput="Отчество"
                    placeholder="Введите Отчество"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    value="Генеральный деректор"
                    labelInput="Административная должность"
                    placeholder="Выберите должность"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    value="Врач-стоматолог"
                    labelInput="Медицинская должность"
                    placeholder="Выберите должность"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    value="Хирургия"
                    labelInput="Подразделение"
                    placeholder="Выберите подразделение"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    value="+7 (976) 913 31 42"
                    labelInput="Телефон"
                    placeholder="+7 (•••) ••• •• ••"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    value="info@pyrobyte.ru"
                    labelInput="E-mail"
                    placeholder="Введите ваш E-mail"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    value="14.06.24"
                    labelInput="Дата принятия на работу"
                    placeholder="Выберите дату"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
            </div>
        </div>
    );
};

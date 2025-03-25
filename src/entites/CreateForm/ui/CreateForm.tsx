import { FC } from 'react';
import cls from './CreateForm.module.css';
import { Input, InputTheme } from '@/shared/Input';
import { Button } from '@/shared/Button';
import { ButtonTheme } from '@/shared/Button/types/ButtonTheme';

interface CreateFormProps {
    className?: string;
}

export const CreateForm: FC<CreateFormProps> = () => {
    return (
        <div className={cls.createForm}>
            <div className={cls.inputsBlock}>
                <Input
                    labelInput="Фамилия"
                    placeholder="Введите Фамилию"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    labelInput="Имя"
                    placeholder="Введите Имя"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    labelInput="Отчество"
                    placeholder="Введите Отчество"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    labelInput="Административная должность"
                    placeholder="Выберите должность"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    labelInput="Медицинская должность"
                    placeholder="Выберите должность"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    labelInput="Подразделение"
                    placeholder="Выберите подразделение"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    labelInput="Телефон"
                    placeholder="+7 (•••) ••• •• ••"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    labelInput="E-mail"
                    placeholder="Введите ваш E-mail"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
                <Input
                    labelInput="Дата принятия на работу"
                    placeholder="Выберите дату"
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                />
            </div>
            <Button buttonTheme={ButtonTheme.BUTTON_DISABLED_PRIM}>
                Сохранить изменения
            </Button>
        </div>
    );
};

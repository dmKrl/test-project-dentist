import { FC, useState } from 'react';
import cls from './EditForm.module.css';
import { Input, InputTheme } from '@/shared/Input';
import { Button } from '@/shared/Button';
import { ButtonTheme } from '@/shared/Button/types/ButtonTheme';
import { ChangePasswordModal } from '@/features/ChangePassword/Index';

interface EditFormProps {
    className?: string;
}

export const EditForm: FC<EditFormProps> = () => {
    const [isOpenChangePassword, setIsOpenChangePassword] = useState(false);

    const handerIsOpenChangePassword = () => {
        setIsOpenChangePassword((prev) => !prev);
    };

    return (
        <div className={cls.editForm}>
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
                <Button
                    className={cls.editPassword}
                    buttonTheme={ButtonTheme.BUTTON_SECONDARY}
                    onClick={handerIsOpenChangePassword}
                >
                    Изменить пароль
                </Button>
                <Input
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

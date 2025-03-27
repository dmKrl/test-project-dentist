import { FC } from 'react';
import classNames from 'classnames';
import { Input, InputTheme } from '@/shared/Input';
import { Button } from '@/shared/Button';
import { ButtonTheme } from '@/shared/Button/types/ButtonTheme';
import cls from './ChangePasswordForm.module.css';

interface ChangePasswordFormProps {
    className?: string;
    onClose: () => void;
}

export const ChangePasswordForm: FC<ChangePasswordFormProps> = (props) => {
    const { className, onClose } = props;

    return (
        <div className={classNames(cls.changePasswordForm, {}, [className])}>
            <h2>Изменение пароля</h2>
            <div className={cls.ChangePasswordInputsBlock}>
                <Input
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                    placeholder="Введите старый пароль"
                    labelInput="Старый пароль"
                />
                <Input
                    type="text"
                    inputTheme={InputTheme.FORM_INPUT}
                    placeholder="Введите новый пароль"
                    labelInput="Новый пароль"
                />
            </div>
            <Button
                buttonTheme={ButtonTheme.BUTTON_DISABLED_PRIM}
                onClick={onClose}
            >
                Сохранить и выйти
            </Button>
        </div>
    );
};

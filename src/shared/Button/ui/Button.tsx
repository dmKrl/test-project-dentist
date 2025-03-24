import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import { ButtonTheme } from '../types/ButtonTheme';
import cls from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonTheme: ButtonTheme;
    className?: string;
    type?: 'button' | 'submit';
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        type = 'button',
        children,
        buttonTheme,
        onClick,
        disabled,
    } = props;
    return (
        <button
            type={type}
            className={classNames(cls.button, {}, [
                className,
                cls[buttonTheme],
            ])}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

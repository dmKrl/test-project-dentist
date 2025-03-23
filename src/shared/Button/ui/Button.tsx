import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import { ButtonTheme } from '../types/ButtonTheme';
import cls from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    buttonTheme: ButtonTheme;
    type?: 'button' | 'submit';
}

export const Button: FC<ButtonProps> = (props) => {
    const { type = 'button', children, buttonTheme, onClick } = props;
    return (
        <button
            type={type}
            className={classNames(cls.button, {}, [cls[buttonTheme]])}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    type?: 'button' | 'submit';
}

export const Button: FC<ButtonProps> = (props) => {
    const { type = 'button', children } = props;
    return (
        <button type={type} className={classNames(cls.button, {}, [])}>
            {children}
        </button>
    );
};

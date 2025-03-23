import classNames from 'classnames';
import { FC, InputHTMLAttributes } from 'react';
import cls from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: 'text' | 'button' | 'checkbox';
}

export const Input: FC<InputProps> = (props) => {
    const { type = 'text' } = props;

    return <input type={type} className={classNames(cls.input, {}, [])} />;
};

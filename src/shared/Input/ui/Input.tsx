import classNames from 'classnames';
import { FC, InputHTMLAttributes, ReactNode } from 'react';
import { InputTheme } from '../types/InputTheme';
import cls from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: 'text' | 'button' | 'checkbox' | 'radio';
    inputTheme: InputTheme;
    placeholder?: string;
    className?: string;
    value?: string;
    checked?: boolean | undefined;
    isActiveRadio?: boolean;
    labelInput?: ReactNode;
    onChange?: () => void;
    onClick?: () => void;
}

export const Input: FC<InputProps> = (props) => {
    const {
        className,
        value,
        type = 'text',
        placeholder,
        labelInput,
        inputTheme,
        checked,
        onChange,
        onClick,
    } = props;

    return (
        <div
            className={classNames(cls.input, {}, [className, cls[inputTheme]])}
            onClick={onClick}
        >
            {
                <label>
                    <input
                        placeholder={placeholder}
                        type={type}
                        onChange={onChange}
                        value={value}
                        defaultChecked={checked}
                    />
                    {labelInput && labelInput}
                </label>
            }
        </div>
    );
};

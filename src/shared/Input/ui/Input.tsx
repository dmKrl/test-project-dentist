import classNames from 'classnames';
import { FC, InputHTMLAttributes, ReactNode } from 'react';
import { InputTheme } from '../types/InputTheme';
import cls from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: 'text' | 'button' | 'checkbox' | 'radio';
    placeholder?: string;
    className?: string;
    isActiveRadio?: boolean;
    labelInput?: ReactNode;
    inputTheme: InputTheme;
    onChange?: () => void;
    onClick?: () => void;
}

export const Input: FC<InputProps> = (props) => {
    const {
        className,
        type = 'text',
        placeholder,
        isActiveRadio,
        labelInput,
        inputTheme,
        onChange,
        onClick,
    } = props;

    const mods: Record<string, boolean | undefined> = {
        [cls.activeRadio]: isActiveRadio,
    };

    return (
        <div
            className={classNames(cls.input, mods, [
                className,
                cls[inputTheme],
            ])}
            onClick={onClick}
        >
            {labelInput && <span>{labelInput}</span>}
            <input placeholder={placeholder} type={type} onChange={onChange} />
        </div>
    );
};

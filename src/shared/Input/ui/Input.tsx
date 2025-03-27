import classNames from 'classnames';
import { FC, InputHTMLAttributes, memo, ReactNode } from 'react';
import { InputTheme } from '../types/InputTheme';
import cls from './Input.module.css';

type InputExtends = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'onChange' | 'checked'
>;

interface InputProps extends InputExtends {
    type: 'text' | 'button' | 'checkbox' | 'radio' | 'select';
    inputTheme: InputTheme;
    placeholder?: string;
    className?: string;
    value?: string | number | undefined;
    checked?: boolean | undefined;
    isActiveRadio?: boolean;
    labelInput?: ReactNode;
    onChange?: (value: string) => void;
    onClick?: () => void;
}

export const Input: FC<InputProps> = memo((props) => {
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

    const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

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
                        onChange={handlerOnChange}
                        value={value}
                        defaultChecked={checked}
                    />
                    {labelInput && <span>{labelInput}</span>}
                </label>
            }
        </div>
    );
});

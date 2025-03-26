import { FC } from 'react';
import cls from './ModalContent.module.css';
import { Button } from '@/shared/Button';
import { ButtonTheme } from '@/shared/Button/types/ButtonTheme';

interface ModalContentProps {
    heading: string;
    description: string;
    buttonTodoText?: string;
    isError?: boolean;
    isChange?: boolean;
    onClose: () => void;
    onTodo?: () => void;
}

export const ModalContent: FC<ModalContentProps> = ({
    heading,
    description,
    buttonTodoText,
    isError,
    isChange,
    onClose,
    onTodo,
}) => {
    return (
        <>
            <div className={cls.modalContent}>
                <h2>{heading}</h2>
                <p>{description}</p>
            </div>

            {isChange && (
                <div className={cls.buttonsBlock}>
                    <Button
                        onClick={onTodo}
                        buttonTheme={ButtonTheme.BUTTON_SECONDARY}
                    >
                        {buttonTodoText}
                    </Button>
                    <Button
                        onClick={onClose}
                        buttonTheme={ButtonTheme.BUTTON_PRIMARY}
                    >
                        Отмена
                    </Button>
                </div>
            )}

            {isError && (
                <Button
                    onClick={onClose}
                    buttonTheme={ButtonTheme.BUTTON_PRIMARY}
                >
                    Таб Исполнительный орган
                </Button>
            )}
        </>
    );
};

import { FC, ReactNode } from 'react';
import cls from './Title.module.css';
import { Button } from '@/shared/Button';
import { ButtonTheme } from '@/shared/Button/types/ButtonTheme';

interface TitleProps {
    children?: ReactNode;
    buttonMounted?: boolean;
    onClick?: () => void;
}

export const Title: FC<TitleProps> = ({ children, buttonMounted, onClick }) => {
    return (
        <div className={cls.titleContainer}>
            <h1>{children}</h1>
            {buttonMounted && (
                <Button
                    buttonTheme={ButtonTheme.BUTTON_PRIMARY}
                    onClick={onClick}
                >
                    Добавить сотрудника
                </Button>
            )}
        </div>
    );
};

import { FC, ReactNode } from 'react';
import cls from './Title.module.css';
import { Button } from '@/shared/Button';
import { ButtonTheme } from '@/shared/Button/types/ButtonTheme';
import { AppLink, AppLinkTheme } from '@/shared/AppLink';
import classNames from 'classnames';

interface TitleProps {
    children?: ReactNode;
    buttonMounted?: boolean;
    className?: string;
}

export const Title: FC<TitleProps> = ({
    children,
    buttonMounted,
    className,
}) => {
    return (
        <div className={classNames(cls.titleContainer, {}, [className])}>
            <h1>{children}</h1>
            {buttonMounted && (
                <Button buttonTheme={ButtonTheme.BUTTON_PRIMARY}>
                    <AppLink
                        className={cls.link}
                        to="/create"
                        linkTheme={AppLinkTheme.LINK_CLEAR}
                    >
                        Добавить сотрудника
                    </AppLink>
                </Button>
            )}
        </div>
    );
};

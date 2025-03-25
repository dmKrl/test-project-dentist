import { FC } from 'react';
import cls from './DismissalContent.module.css';
import { ModalContent } from '@/shared/ModalContent';
import { Button } from '@/shared/Button';
import { ButtonTheme } from '@/shared/Button/types/ButtonTheme';

interface DismissalContentProps {
    onClose: () => void;
}

export const DismissalContent: FC<DismissalContentProps> = ({ onClose }) => {
    return (
        <div className={cls.dismissalContent}>
            <ModalContent
                heading="Увольнение сотрудника"
                description="Это действие будет невозможно отменить. Вы действительно хотите уволить сотрудника? 
Он навсегда потеряет доступ к своей учетной записи, если таковая была. Все созданные им документы и сделанные изменения в документах сохранятся. Также карточка данного сотрудника будет храниться в вашей базе данных."
            />
            <div className={cls.dismissalButtonsBlock}>
                <Button buttonTheme={ButtonTheme.BUTTON_SECONDARY}>
                    Уволить
                </Button>
                <Button
                    onClick={onClose}
                    buttonTheme={ButtonTheme.BUTTON_PRIMARY}
                >
                    Отмена
                </Button>
            </div>
        </div>
    );
};

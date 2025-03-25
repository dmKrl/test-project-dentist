import { FC } from 'react';
import { ModalContent } from '@/shared/ModalContent';

interface DismissalContentProps {
    onClose: () => void;
}

export const DismissalContent: FC<DismissalContentProps> = ({ onClose }) => {
    return (
        <div>
            <ModalContent
                heading="Увольнение сотрудника"
                description="Это действие будет невозможно отменить. Вы действительно хотите уволить сотрудника? 
Он навсегда потеряет доступ к своей учетной записи, если таковая была. Все созданные им документы и сделанные изменения в документах сохранятся. Также карточка данного сотрудника будет храниться в вашей базе данных."
                buttonTodoText="Уволить"
                isChange
                onClose={onClose}
            />
        </div>
    );
};

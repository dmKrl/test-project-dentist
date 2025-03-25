import { FC } from 'react';
import { ModalContent } from '@/shared/ModalContent';

interface BlockContentProps {
    onClose: () => void;
}

export const BlockContent: FC<BlockContentProps> = ({ onClose }) => {
    return (
        <div>
            <ModalContent
                heading="Блокировка сотрудника"
                description="Это действие будет можно отменить. Вы действительно хотите заблокировать сотрудника? 
На время блокировки сотрудник потеряет доступ к своей учётной записи, если таковая существует. Все созданные им документы и сделанные изменения в документах сохранятся. Также карточка данного сотрудника будет храниться в вашей базе данных."
                buttonTodoText="Заблокировать"
                isChange
                onClose={onClose}
            />
        </div>
    );
};

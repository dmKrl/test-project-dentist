import { FC } from 'react';
import { ModalContent } from '@/shared/ModalContent';

interface DeleteContentProps {
    onClose: () => void;
}

export const DeleteContent: FC<DeleteContentProps> = ({ onClose }) => {
    return (
        <div>
            <ModalContent
                heading="Удаление карточки сотрудника"
                description="Это действие будет невозможно отменить. Вы действительно хотите удалить карточку сотрудника? 
После этого сотрудник навсегда потеряет доступ к своей учетной записи, если таковая существует. Также карточка данного сотрудника будет безвозвратно удалена из вашей базы данных. Все созданные им документы и сделанные изменения в документах сохранятся."
                buttonTodoText="Удалить карточку"
                isChange
                onClose={onClose}
            />
        </div>
    );
};

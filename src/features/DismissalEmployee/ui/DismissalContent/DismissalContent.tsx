import { FC, useCallback } from 'react';
import { ModalContent } from '@/shared/ModalContent';
import { deleteEmployeeStore } from '@/features/DeleteEmployee';
import { infoEmployeeStore } from '@/entites/InfoForm';

interface DismissalContentProps {
    onClose: () => void;
}

export const DismissalContent: FC<DismissalContentProps> = ({ onClose }) => {
    const employerId: string | number | undefined =
        infoEmployeeStore.choosenEmployee.id;

    const handleOnDismissalEmployer = useCallback(() => {
        deleteEmployeeStore.deleteEmployee(employerId);
        onClose();
    }, [deleteEmployeeStore]);
    return (
        <div>
            <ModalContent
                heading="Увольнение сотрудника"
                description="Это действие будет невозможно отменить. Вы действительно хотите уволить сотрудника? 
Он навсегда потеряет доступ к своей учетной записи, если таковая была. Все созданные им документы и сделанные изменения в документах сохранятся. Также карточка данного сотрудника будет храниться в вашей базе данных."
                buttonTodoText="Уволить"
                isChange
                onClose={onClose}
                onTodo={handleOnDismissalEmployer}
            />
        </div>
    );
};

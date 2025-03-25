import { FC } from 'react';
import { Modal } from '@/shared/Modal/Modal';
import { ModalContent } from '@/shared/ModalContent';

interface DismissalModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const DismissalModal: FC<DismissalModalProps> = (props) => {
    const { isOpen, onClose } = props;
    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            <div>
                <ModalContent
                    heading="Невозможно удалить сотрудника"
                    description="Этот сотрудник назначен на роль ВКК. Пожалуйста, измените ответственного в разделе «Исполнительный орган», чтобы продолжить удаление"
                    onClose={onClose}
                    isError
                />
            </div>
        </Modal>
    );
};

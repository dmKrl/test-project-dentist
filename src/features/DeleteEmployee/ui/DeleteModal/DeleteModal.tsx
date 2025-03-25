import { FC } from 'react';
import { Modal } from '@/shared/Modal/Modal';
import { DeleteContent } from '../DeleteContent/DeleteContent';

interface DeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const DeleteModal: FC<DeleteModalProps> = (props) => {
    const { isOpen, onClose } = props;
    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            <DeleteContent onClose={onClose} />
        </Modal>
    );
};

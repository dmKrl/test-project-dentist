import { FC } from 'react';
import { Modal } from '@/shared/Modal/Modal';
import { DismissalContent } from '../DismissalContent/DismissalContent';

interface DismissalModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const DismissalModal: FC<DismissalModalProps> = (props) => {
    const { isOpen, onClose } = props;
    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            <DismissalContent onClose={onClose} />
        </Modal>
    );
};

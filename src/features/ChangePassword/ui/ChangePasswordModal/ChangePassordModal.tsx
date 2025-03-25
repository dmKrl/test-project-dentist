import { FC } from 'react';
import { Modal } from '@/shared/Modal/Modal';
import { ChangePasswordForm } from '../ChangePasswordForm/ChangePasswordForm';

interface ChangePasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ChangePasswordModal: FC<ChangePasswordModalProps> = (props) => {
    const { isOpen, onClose } = props;
    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            <ChangePasswordForm onClose={onClose} />
        </Modal>
    );
};

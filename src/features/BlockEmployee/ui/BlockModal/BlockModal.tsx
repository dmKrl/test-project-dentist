import { FC } from 'react';
import { Modal } from '@/shared/Modal/Modal';
import { BlockContent } from '../BlockContent/BlockContent';

interface BlockModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const BlockModal: FC<BlockModalProps> = (props) => {
    const { isOpen, onClose } = props;
    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            <BlockContent onClose={onClose} />
        </Modal>
    );
};

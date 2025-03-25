import { FC } from 'react';
import cls from './ModalContent.module.css';

interface ModalContentProps {
    heading: string;
    description: string;
}

export const ModalContent: FC<ModalContentProps> = ({
    heading,
    description,
}) => {
    return (
        <div className={cls.modalContent}>
            <h2>{heading}</h2>
            <p>{description}</p>
        </div>
    );
};

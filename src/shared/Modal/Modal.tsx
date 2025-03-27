import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.css';
import { Button } from '../Button';
import { ButtonTheme } from '../Button/types/ButtonTheme';
import CloseModal from '../assets/closeModal.svg?react';

interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    lazy?: boolean;
    onClose: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
    const { children, isOpen, lazy, onClose } = props;
    const [isMounted, setIsMounted] = useState(false);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDownClose = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        },
        [onClose],
    );

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDownClose);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDownClose);
        };
    }, [isOpen, onKeyDownClose]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(cls.overlay, mods, [])}
                onClick={onClose}
            >
                <div className={cls.modal}>
                    <div className={cls.modalContent} onClick={onContentClick}>
                        <Button
                            onClick={onClose}
                            className={cls.modalClose}
                            buttonTheme={ButtonTheme.CLEAR}
                        >
                            <CloseModal />
                        </Button>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

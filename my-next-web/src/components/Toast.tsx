'use client';
import React, { useEffect } from 'react';
import styles from './Toast.module.scss';

interface ToastProps {
    children: React.ReactNode;
    type?: 'success' | 'error' | 'info';
    duration?: number;
    onClose: () => void;
}

const Toast = ({
    children,
    type = 'success',
    duration = 3000,
    onClose,
}: ToastProps) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return <div className={`${styles.toast} ${styles[type]}`}>{children}</div>;
};

export default Toast;

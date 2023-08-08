import React from "react";
import styles from "./Modal.module.scss";
import { HiXMark } from "react-icons/hi2";

type ModalProps = {
    children?: React.ReactNode;
    onClose?: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, onClose = () => {} }) => {
    return (
        <>
            <div className={styles.overlay} onClick={onClose}></div>
            <div className={styles.modal}>
                <button className={styles.modal__btn} onClick={onClose}>
                    <HiXMark />
                </button>
                {children}
            </div>
        </>
    );
};

export default Modal;

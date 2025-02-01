import React from "react";
import { IoCopy, IoCopyOutline } from "react-icons/io5";
import styles from "./CopyButton.module.scss";

const CopyButton = ({
    isCopied,
    onClick
}: {
    isCopied: boolean;
    onClick: () => void;
}) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.btn} ${
                isCopied ? styles.btn__copied : styles.btn__copy
            }`}
        >
            {isCopied ? (
                <span>
                    <IoCopy size={18} />
                    Copied!
                </span>
            ) : (
                <span>
                    <IoCopyOutline size={18} /> Copy
                </span>
            )}
        </button>
    );
};

export default CopyButton;

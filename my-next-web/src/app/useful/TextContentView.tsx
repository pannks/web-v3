import React from "react";
import styles from "./TextContentView.module.scss";

type TextContentViewProps = {
    text: string | string[];
};

const TextContentView: React.FC<TextContentViewProps> = ({ text }) => {
    return (
        <div className={styles.container}>
            {Array.isArray(text) ? (
                text.map((t, i) => <p key={i}>{t}</p>)
            ) : (
                <p>{text}</p>
            )}
        </div>
    );
};

export default TextContentView;

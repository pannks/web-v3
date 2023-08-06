import React from "react";
import styles from "./Badge.module.scss";

type BadgeProps = {
    text?: string;
    bg?: string;
    fg?: string;
    children?: React.ReactNode;
};

const Badge: React.FC<BadgeProps> = ({
    text,
    bg = "var(--c-grey-700)",
    fg,
    children,
}) => {
    const bgStyle: React.CSSProperties = {
        backgroundColor: bg,
        color: fg ? fg : "var(--c-black)",
    };
    return (
        <span className={styles.badge} style={bgStyle}>
            {children}
            {text}
        </span>
    );
};

export default Badge;

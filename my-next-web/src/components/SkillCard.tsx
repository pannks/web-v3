"use client";
import React, { useState } from "react";
import styles from "./SkillCard.module.scss";

type SkillCardProps = {
    name: string;
    desc: string;
    time: string;
    icon?: React.ReactNode;
    colorOnHov?: string;
};

const SkillCard: React.FC<SkillCardProps> = ({
    name,
    desc,
    time,
    icon,
    colorOnHov
}) => {
    const [colorHov, setColorHov] = useState("var(--c-grey-700)");
    const iconStyle: React.CSSProperties = {
        color: colorHov
    };
    return (
        <div
            className={styles.card}
            onMouseEnter={() => {
                if (colorOnHov) setColorHov(colorOnHov);
            }}
            onMouseLeave={() => {
                setColorHov("var(--c--black)");
            }}
        >
            <div className={styles.icon} style={iconStyle}>
                {icon}
            </div>
            <h4>{name}</h4>
            <p>{desc}</p>
        </div>
    );
};

export default SkillCard;

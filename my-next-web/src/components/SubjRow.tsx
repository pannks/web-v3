import React from "react";
import styles from "./SubjRow.module.scss";
import Badge from "./Badge";

type SubjRowProps = {
    subj: string;
    children?: React.ReactNode;
    index?: number;
    desc?: string;
    name?: string;
    badgeColor?: string;
};

const SubjRow: React.FC<SubjRowProps> = ({
    subj,
    children,
    index = 1,
    desc,
    name,
    badgeColor = "var(--c-chip-1)",
}) => {
    return (
        <div className={styles.container}>
            <h4>
                <Badge bg={badgeColor} fg={`var(--c-gb-white)`}>
                    {subj}
                </Badge>
                {name}
            </h4>
            {desc && <p className={styles.desc}>{desc}</p>}
            <div className={styles.gridBox}>{children}</div>
        </div>
    );
};

export default SubjRow;

import React from "react";
import styles from "./SubjRow.module.scss";
import Badge from "./Badge";

type SubjRowProps = {
    subj: string;
    children?: React.ReactNode;
    index?: number;
};

const SubjRow: React.FC<SubjRowProps> = ({ subj, children, index = 1 }) => {
    return (
        <div className={styles.container}>
            <h4>
                <Badge
                    bg={`var(--c-chip-${2 * index - 1})`}
                    fg={`var(--c-gb-white)`}
                >
                    {subj}
                </Badge>
            </h4>
            <div className={styles.gridBox}>{children}</div>
        </div>
    );
};

export default SubjRow;

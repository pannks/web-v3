import React, { CSSProperties } from "react";
import styles from "./FileMenuCard.module.scss";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

type FileMenuCardProps = {
    name: string;
    to: Url;
    icon?: React.ReactNode;
    fg?: string;
    bg?: string;
};

export interface CSSPropertiesWithVars extends CSSProperties {
    "--c-svg-color": string;
    "--c-bg-color": string;
}

const FileMenuCard: React.FC<FileMenuCardProps> = ({
    name,
    to,
    icon,
    fg = "#FFF",
    bg = "#FFF",
}) => {
    return (
        <Link
            data-hover="menu"
            href={to}
            className={styles.card}
            style={
                {
                    "--c-svg-color": fg,
                    "--c-bg-color": bg,
                } as React.CSSProperties
            }
        >
            {icon}
            <h3>{name}</h3>
        </Link>
    );
};

export default FileMenuCard;

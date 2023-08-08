import React, { ReactElement } from "react";
import styles from "./FileCard.module.scss";
import Badge from "./Badge";
import Link from "next/link";
import {
    convertFbTimeToDate,
    formatLocalTime,
    getFileIcon,
} from "@/utils/transform";
import { File } from "@/utils/dataType";
import { Url } from "next/dist/shared/lib/router/router";

type FileCardProps = {
    file: File;
};

const FileCard: React.FC<FileCardProps> = ({ file }) => {
    const icon = getFileIcon(file.type);
    let readTime = null;
    if (file.createAt) {
        const time = convertFbTimeToDate(file.createAt);
        readTime = formatLocalTime(time);
    }

    return (
        <Link href={file.url as Url} rel="noopener noreferrer" target="_blank">
            <div className={styles.card}>
                <div className={styles.card__head}>
                    <div
                        className={styles.card__grid__1}
                        style={{ color: icon.c }}
                    >
                        {icon.i()}
                    </div>
                    <div className={styles.card__grid__2}>
                        <Badge bg="var(--c-grey-200)">{file.subj}</Badge>
                        <span className={styles.card__sem}>{file.sem} </span>
                        <h4 className={styles.card__name}>{file.name}</h4>
                        {readTime && <p>{readTime}</p>}
                    </div>
                    {/* <div className={styles.card__grid__3}>
                        {file.desc !== "" && (
                            <p className={styles.card__desc}>{file.desc}</p>
                        )}
                    </div> */}
                </div>
            </div>
        </Link>
    );
};

export default FileCard;

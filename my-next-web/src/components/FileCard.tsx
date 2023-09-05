"use client";

import React, { ReactElement, useEffect, useState } from "react";
import styles from "./FileCard.module.scss";
import Badge from "./Badge";
import Link from "next/link";
import {
    convertFbTimeToDate,
    formatLocalTime,
    getFileIcon,
} from "@/utils/transform";
import { File } from "@/utils/dataType";
import Modal from "./Modal";
import { HiLockClosed, HiPencil, HiUserCircle } from "react-icons/hi2";

type FileCardProps = {
    file: File;
    showSubj?: boolean;
    showGroup?: boolean;
    showAuthor?: boolean;
    bgSubj?: string;
};

const FileCard: React.FC<FileCardProps> = ({
    file,
    showSubj = true,
    showGroup = false,
    showAuthor = false,
    bgSubj = "var(--c-grey-200)",
}) => {
    const [textPassword, setTextPassword] = useState("");
    const [showVerify, setShowVerify] = useState(false);
    const icon = getFileIcon(file.type);
    let readTime = null;
    if (file.createAt) {
        const time = convertFbTimeToDate(file.createAt);
        readTime = formatLocalTime(time);
    }

    const openFile = () => {
        window.open(file.url, "_blank", "rel=noopener noreferrer");
        setTextPassword("");
        setShowVerify(false);
    };

    const verify = () => {
        setShowVerify(true);
        if (textPassword === file.password) openFile();
    };

    useEffect(() => {
        if (textPassword !== "") {
            verify();
        }
    }, [textPassword]);

    return (
        // <Link href={file.url as Url} rel="noopener noreferrer" target="_blank">
        <>
            <div
                className={styles.card}
                onClick={file.password === undefined ? openFile : verify}
            >
                <div className={styles.card__head}>
                    <div
                        className={styles.card__grid__1}
                        style={{ color: icon.c }}
                    >
                        {icon.i()}
                    </div>
                    <div className={styles.card__grid__2}>
                        {showSubj && <Badge bg={bgSubj}>{file.subj}</Badge>}
                        {file.sem && (
                            <span className={styles.card__sem}>
                                {file.sem}{" "}
                            </span>
                        )}
                        <h4 className={styles.card__name}>
                            {showGroup && file?.group && (
                                <span className={styles.card__group}>
                                    {file?.group}
                                </span>
                            )}
                            {file.name}
                        </h4>
                        {readTime && (
                            <p className={styles.card__timeauthor}>
                                {readTime}
                                {showAuthor && file?.author && (
                                    <span>
                                        <HiUserCircle /> {file?.author}
                                    </span>
                                )}
                            </p>
                        )}
                    </div>
                    <div className={styles.card__grid__3}>
                        {file.desc !== "" && (
                            <p className={styles.card__desc}>{file.desc}</p>
                        )}
                    </div>
                    {file.password !== undefined && (
                        <div className={styles.card__grid__4}>
                            <HiLockClosed />
                        </div>
                    )}
                </div>
            </div>
            {showVerify && (
                <Modal onClose={() => setShowVerify(false)}>
                    <h4>password</h4>
                    <input
                        type="text"
                        className={styles.card__input}
                        value={textPassword}
                        onChange={(e) => setTextPassword(e.target.value)}
                    />
                </Modal>
            )}
        </>
        // </Link>
    );
};

export default FileCard;

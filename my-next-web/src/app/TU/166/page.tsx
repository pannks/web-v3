"use client";

import FileCard from "@/components/FileCard";
import Spinner from "@/components/Spinner";
import { useFiles } from "@/contexts/FilesContext";
import React from "react";
import styles from "./page.module.scss";
import { File } from "@/utils/dataType";
import SubjRow from "@/components/SubjRow";

const ThisSemPage = () => {
    const { files, loading } = useFiles();
    const categorized =
        files?.reduce((groups, item) => {
            const key = item.subj;
            if (!groups[key]) {
                groups[key] = [];
            }
            groups[key].push(item);
            return groups;
        }, {}) ?? {};

    return (
        <div className={styles.page}>
            <h1 className={styles.heading}>Files 1/66</h1>

            {loading && (
                <div className="spinner_container">
                    <Spinner />
                </div>
            )}
            {Object.keys(categorized).map((subj, i) => (
                <SubjRow key={subj} subj={subj} index={i + 1}>
                    {categorized[subj].map((file: File) => (
                        <FileCard key={file.id} file={file as File} showSubj={false} />
                    ))}
                </SubjRow>
            ))}
        </div>
    );
};

export default ThisSemPage;

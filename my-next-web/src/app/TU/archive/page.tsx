"use client";

import FileCard from "@/components/FileCard";
import Spinner from "@/components/Spinner";
import { useFiles } from "@/contexts/FilesContext";
import React from "react";
import styles from "./page.module.scss";
import { File } from "@/utils/dataType";

const ArchivePage = () => {
    const { archives, loading } = useFiles();

    return (
        <div className={styles.page}>
            <h1 className={styles.heading}>Archives</h1>

            {loading && (
                <div className="spinner_container">
                    <Spinner />
                </div>
            )}
            {archives && (
                <div className={styles.files_grid}>
                    {archives.map((file) => (
                        <FileCard key={file.id} file={file as File} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ArchivePage;

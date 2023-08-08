"use client";

import FileCard from "@/components/FileCard";
import Spinner from "@/components/Spinner";
import { useFiles } from "@/contexts/FilesContext";
import React from "react";
import styles from "./page.module.scss";

const ThisSemPage = () => {
    const { files, loading } = useFiles();

    return (
        <div className={styles.page}>
            <h1 className={styles.heading}>Files 1/66</h1>

            {loading && (
                <div className="spinner_container">
                    <Spinner />
                </div>
            )}
            {files && (
                <div className={styles.files_grid}>
                    {files?.length === 0 && "No Files"}
                    {files.map((file) => (
                        <FileCard key={file.id} file={file} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ThisSemPage;

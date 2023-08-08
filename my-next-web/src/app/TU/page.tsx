"use client";
import React from "react";
import styles from "./page.module.scss";
import FileMenuCard from "./FileMenuCard";
import {
    BsBookmarkCheckFill,
    BsGearFill,
    BsPinAngleFill,
} from "react-icons/bs";
import SettingFileCard from "./SettingFileCard";
import { useFiles } from "@/contexts/FilesContext";
import FileCard from "@/components/FileCard";

const TUPage = () => {
    const { files } = useFiles();
    return (
        <>
            <section className={styles.section__1}>
                <h1 className={styles.heading}>Welcome to TU's Files</h1>
                <div className={styles.menus}>
                    <FileMenuCard
                        name={"1/66"}
                        to={"/TU/166"}
                        icon={<BsPinAngleFill />}
                        fg="#ffd240"
                        bg="#ffe60025"
                    />
                    <FileMenuCard
                        name={"Archives"}
                        to={"/TU/archive"}
                        icon={<BsBookmarkCheckFill />}
                        fg="#f56666"
                        bg="#ff295f23"
                    />
                    <SettingFileCard
                        name={"Manage Files"}
                        icon={<BsGearFill />}
                        fg="#40b6d4"
                        bg="#00d9ff23"
                    />
                </div>
            </section>
            <section className={styles.section__2}>
                <h2 className={styles.heading}>Recently</h2>
                {files?.length === 0 && "No Files"}
                {files && (
                    <div className={styles.files_grid}>
                        {files.map((file) => (
                            <FileCard key={file.id} file={file} />
                        ))}
                    </div>
                )}
            </section>
        </>
    );
};

export default TUPage;

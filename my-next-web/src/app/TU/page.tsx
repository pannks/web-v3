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
import { File } from "@/utils/dataType";
import Schedule from "@/components/Schedule";
import Spinner from "@/components/Spinner";
import { ThisSemSubjs } from "@/data/subjsData";

const TUPage = () => {
    const { files, loading } = useFiles();
    const subjInfo = (sbj: string) =>
        ThisSemSubjs.find((subj) => subj.subj === sbj);
    return (
        <>
            <section className={styles.section__1}>
                <h1 className={styles.heading}>Welcome to TU Files</h1>
                <div className={styles.menus}>
                    <FileMenuCard
                        name={"1/66"}
                        to={"/TU/166"}
                        icon={<BsPinAngleFill />}
                        fg="#ffc629"
                        bg="#ffd0003d"
                        desc="รวมไฟล์เทอมนี้"
                    />
                    <FileMenuCard
                        name={"Archives"}
                        to={"/TU/archive"}
                        icon={<BsBookmarkCheckFill />}
                        fg="#db545b"
                        bg="#ff295f3d"
                        desc="รวมไฟล์เทอมก่อนหน้า"
                    />
                    <SettingFileCard
                        name={"Manage Files"}
                        icon={<BsGearFill />}
                        fg="#139fe0"
                        bg="#00d9ff3d"
                        desc="จัดการไฟล์ (เฉพาะแอดมิน)"
                    />
                </div>
            </section>
            <section className={styles.section__double}>
                <div className={styles.section__sub}>
                    <h2 className={styles.heading__2}>Schedule 1/66</h2>
                    <Schedule />
                </div>
                <div className={styles.section__sub}>
                    <h2 className={styles.heading__2}>Recently</h2>
                    {files?.length === 0 && "No Files"}
                    {loading && (
                        <div className="spinner_container">
                            <Spinner />
                        </div>
                    )}
                    {files && (
                        <div className={styles.files_grid}>
                            {files
                                .sort((a, b) => b.createAt - a.createAt)
                                .map((file) => (
                                    <FileCard
                                        key={file.id}
                                        file={file as File}
                                        bgSubj={subjInfo(file?.subj)?.c}
                                    />
                                ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default TUPage;

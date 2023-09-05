"use client";

import SkeletonLoading from "@/components/SkeletonLoading";
import styles from "./page.module.scss";
import { useFiles } from "@/contexts/FilesContext";
import { useTasks } from "@/contexts/TasksContext";
import React from "react";
import TaskCard from "@/components/TaskCard";
import FileCard from "@/components/FileCard";
import { File, Task } from "@/utils/dataType";
import { useUser } from "@/contexts/UserContext";

type SubjPageViewProps = {
    slug: string;
    accessRoles?: string[];
};

const SubjPageView: React.FC<SubjPageViewProps> = ({
    slug,
    accessRoles = [],
}) => {
    const { files, loading: loadingFiles } = useFiles();
    const { tasks, loading: loadingTasks } = useTasks();
    const { user: getUser, loading } = useUser();

    const fileList = files?.filter((file) => file.subj === slug);
    const taskList = tasks?.filter((task) => task.subj === slug);

    const canAccessRole = (role: string, accessRoles: string[]) => {
        const a = role.split("_");
        return Boolean(a.filter((x) => accessRoles.includes(x)).length !== 0);
    };

    if (!canAccessRole(getUser?.role ?? "", accessRoles) && !loading) {
        return (
            <p className={styles.page__head}>
                Unauthorized (403)
                <ul className={styles.error}>
                    <li>คุณไม่ได้รับอนุญาตให้เข้า</li>
                    <li>บทบาทของคุณไม่มีสิทธิ์การเข้าถึง</li>
                    <li>คุณยังไม่ได้รับการยืนยันจากแอดมิน</li>
                </ul>
            </p>
        );
    }

    return (
        <>
            <p className={styles.page__head}>Tasks ({taskList?.length})</p>
            <p className={styles.page__task}>
                <span className={styles.page__task__stt}>
                    TO DO:{" "}
                    {taskList?.filter((t) => t.status === "TODO")?.length}
                </span>
                <span className={styles.page__task__stt}>
                    IN PROGRESS:{" "}
                    {taskList?.filter((t) => t.status === "PROGRESS")?.length}
                </span>
                <span className={styles.page__task__stt}>
                    DONE: {taskList?.filter((t) => t.status === "DONE")?.length}
                </span>
            </p>
            {loadingTasks && <SkeletonLoading />}
            <div className={styles.fold_grid}>
                {taskList
                    ?.sort((a, b) => Number(a.due) - Number(b.due))
                    .map((task) => (
                        <TaskCard key={task.id} task={task as Task} />
                    ))}
                {taskList?.length === 0 && (
                    <p className={styles.not_found}>
                        It&apos;s clean! Not found any task.
                    </p>
                )}
            </div>
            <p className={styles.page__head}>Files ({fileList?.length})</p>
            {loadingFiles && <SkeletonLoading />}
            <div className={styles.fold_grid}>
                {fileList
                    ?.sort((a, b) => Number(b.createAt) - Number(a.createAt))
                    .map((file) => (
                        <FileCard
                            key={file.id}
                            file={file as File}
                            showSubj={false}
                            showGroup
                            showAuthor
                        />
                    ))}
            </div>
        </>
    );
};

export default SubjPageView;

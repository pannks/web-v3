"use client";

import SkeletonLoading from "@/components/SkeletonLoading";
import styles from "./page.module.scss";
import { useFiles } from "@/contexts/FilesContext";
import { useTasks } from "@/contexts/TasksContext";
import React from "react";
import TaskCard from "@/components/TaskCard";
import FileCard from "@/components/FileCard";
import { File, Task } from "@/utils/dataType";

type SubjPageViewProps = {
    slug: string;
};

const SubjPageView: React.FC<SubjPageViewProps> = ({ slug }) => {
    const { files, loading: loadingFiles } = useFiles();
    const { tasks, loading: loadingTasks } = useTasks();

    const fileList = files?.filter((file) => file.subj === slug);
    const taskList = tasks?.filter((task) => task.subj === slug);

    return (
        <>
            <p className={styles.page__head}>Tasks ({taskList?.length})</p>
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
                {fileList?.map((file) => (
                    <FileCard
                        key={file.id}
                        file={file as File}
                        showSubj={false}
                    />
                ))}
            </div>
        </>
    );
};

export default SubjPageView;

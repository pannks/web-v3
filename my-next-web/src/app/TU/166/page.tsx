"use client";

import FileCard from "@/components/FileCard";
import Spinner from "@/components/Spinner";
import { useFiles } from "@/contexts/FilesContext";
import React from "react";
import styles from "./page.module.scss";
import { File, Task } from "@/utils/dataType";
import SubjRow from "@/components/SubjRow";
import { useTasks } from "@/contexts/TasksContext";
import TaskCard from "@/components/TaskCard";
import { ThisSemSubjs } from "@/data/subjsData";
import SkeletonLoading from "@/components/SkeletonLoading";
import SectionBackLink from "@/components/SectionBackLink";

const ThisSemPage = () => {
    const { files, loading: loadingFiles } = useFiles();
    const { tasks, loading: loadingTasks } = useTasks();

    const categorized = (objArr: Array<any>) => {
        return (
            objArr?.reduce((groups: any, item: any) => {
                const key = item.subj;
                if (!groups[key]) {
                    groups[key] = [];
                }
                groups[key].push(item);
                return groups;
            }, {}) ?? {}
        );
    };

    const ctgrFile = categorized(files || []);
    const ctgrTask = categorized(tasks || []);
    const subjArray = ThisSemSubjs.map((subjObj) => subjObj.subj);

    return (
        <>
            <SectionBackLink />
            <div className={styles.page}>
                <h1 className={styles.heading}> 1/66 Files</h1>

                <div className={styles.folder_grid}>
                    {[...subjArray, "_private"].map((subj, i) => (
                        <SubjRow
                            key={subj}
                            subj={subj}
                            desc={ThisSemSubjs[i]?.desc}
                            name={ThisSemSubjs[i]?.name}
                            badgeColor={ThisSemSubjs[i]?.c}
                        >
                            {ctgrTask[subj]
                                ?.sort(
                                    (a: Task, b: Task) =>
                                        Number(a.due) - Number(b.due)
                                )
                                .map((task: Task) => (
                                    <TaskCard key={task.id} task={task} />
                                ))}
                            {ctgrFile[subj]?.map((file: File) => (
                                <FileCard
                                    key={file.id}
                                    file={file as File}
                                    showSubj={false}
                                    showAuthor
                                    showGroup
                                />
                            ))}
                            {loadingFiles && <SkeletonLoading />}
                        </SubjRow>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ThisSemPage;

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
        <div className={styles.page}>
            <h1 className={styles.heading}> 1/66</h1>
            {loadingFiles && (
                <div className="spinner_container">
                    <Spinner />
                </div>
            )}
            <div className={styles.folder_grid}>
                {[...subjArray, "_private"].map((subj, i) => (
                    <SubjRow key={subj} subj={subj} index={i + 1}>
                        {ctgrFile[subj]?.map((file: File) => (
                            <FileCard
                                key={file.id}
                                file={file as File}
                                showSubj={false}
                            />
                        ))}
                        {ctgrTask[subj]?.map((task: Task) => (
                            <TaskCard key={task.id} task={task} />
                        ))}
                    </SubjRow>
                ))}
            </div>
        </div>
    );
};

export default ThisSemPage;

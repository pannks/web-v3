"use client";

import styles from "./page.module.scss";
import { Metadata } from "next";
import { ThisSemSubjs } from "@/data/subjsData";
import { useFiles } from "@/contexts/FilesContext";
import { useTasks } from "@/contexts/TasksContext";
import { File, Task } from "@/utils/dataType";
import TaskCard from "@/components/TaskCard";
import FileCard from "@/components/FileCard";
import SkeletonLoading from "@/components/SkeletonLoading";

type SbjViewPageProps = {
    params: {
        slug: string;
    };
};

const SbjViewPage: React.FC<SbjViewPageProps> = ({ params }) => {
    const { files, loading: loadingFiles } = useFiles();
    const { tasks, loading: loadingTasks } = useTasks();

    const subj = ThisSemSubjs.find((sbj) => sbj.subj === params.slug);

    const fileList = files?.filter((file) => file.subj === params.slug);
    const taskList = tasks?.filter((task) => task.subj === params.slug);

    return (
        <>
            <div className={styles.page}>
                <h1 className={styles.page__title}>{subj?.subj}</h1>
                <h2 className={styles.page__desc}>{subj?.name}</h2>
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
            </div>
        </>
    );
};

export async function generateMetadata({
    params,
}: SbjViewPageProps): Promise<Metadata> {
    const subj = ThisSemSubjs.find((sbj) => sbj.subj === params.slug);

    return {
        title: `${subj?.subj} | PannKs`,
        description: subj?.name,
    };
}

export async function generateStaticParams() {
    const subjs = ThisSemSubjs;
    console.log(subjs);

    return subjs.map((sbj) => ({
        slug: sbj.subj,
    }));
}

export default SbjViewPage;

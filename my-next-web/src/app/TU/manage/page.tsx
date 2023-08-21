"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import { useUser } from "@/contexts/UserContext";
import Spinner from "@/components/Spinner";
import AddFileForm from "./AddFileForm";
import FilePreview from "./FilePreview";
import Modal from "@/components/Modal";
import { HiDocumentPlus, HiDocumentText, HiQueueList } from "react-icons/hi2";
import AddTaskForm from "./AddTaskForm";
import { useTasks } from "@/contexts/TasksContext";
import TaskCard from "@/components/TaskCard";
import { Task } from "@/utils/dataType";
import { DocumentData } from "firebase/firestore";
import { deleteTaskById, updateTaskById } from "@/utils/firebase";

const ManagePage = () => {
    const { user, loading } = useUser();
    const { tasks, loading: loadingTasks, revalidate } = useTasks();
    const [showAddFileForm, setShowAddFileForm] = useState(false);
    const [showAddTaskForm, setShowAddTaskForm] = useState(false);

    const changeTaskStatus = (newStatus: string, id: string) => {
        const updateStt = { status: newStatus };
        updateTaskById(id, updateStt);
        revalidate();
    };

    const onDeleteTask = (id: string) => {
        deleteTaskById(id);
        revalidate();
    };

    return (
        <div className={styles.page}>
            {loading && <Spinner />}
            {!user && !loading && <div>Unauthorized [403]</div>}
            {user && (
                <>
                    <button
                        className={styles.headerBtn}
                        onClick={() => setShowAddFileForm(!showAddFileForm)}
                    >
                        <>
                            <HiDocumentPlus size={20} /> เพิ่มไฟล์
                        </>
                    </button>
                    <button
                        className={styles.headerBtn}
                        onClick={() => setShowAddTaskForm(!showAddTaskForm)}
                    >
                        <>
                            <HiQueueList size={20} /> เพิ่มงาน
                        </>
                    </button>
                    {showAddFileForm && (
                        <Modal onClose={() => setShowAddFileForm(false)}>
                            <AddFileForm />
                        </Modal>
                    )}
                    {showAddTaskForm && (
                        <Modal onClose={() => setShowAddTaskForm(false)}>
                            <AddTaskForm />
                        </Modal>
                    )}
                    <h5>รายการทั้งหมด</h5>
                    <FilePreview />
                    {tasks?.map((taskData: DocumentData) => {
                        const task: Task = taskData as Task;
                        return (
                            <TaskCard
                                key={task.id}
                                task={task}
                                canEdit={true}
                                onChangeStatus={(stt) =>
                                    changeTaskStatus(stt, task.id)
                                }
                                onDeleteTask={onDeleteTask}
                            ></TaskCard>
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default ManagePage;

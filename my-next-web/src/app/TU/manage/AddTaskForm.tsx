"use client";

import React, { useState } from "react";
import styles from "./AddFileForm.module.scss";
import { createNewTask } from "@/utils/firebase";
import { useTasks } from "@/contexts/TasksContext";

const AddTaskForm = () => {
    const { revalidate } = useTasks();
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [subj, setSubj] = useState("_private");
    const [dueDate, setDueDate] = useState("");
    const [dueTime, setDueTime] = useState("");

    const onSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (name === "" || subj === "" || dueDate === "") {
            return;
        }
        const dueStr = `${dueDate} ${dueTime}`;
        const data = {
            name,
            desc,
            subj,
            dueStr,
            status: "TODO",
        };
        const res = await createNewTask(data);
        if (res?.status === "success") {
            resetForm();
            revalidate();
        }
    };

    const resetForm = () => {
        setName("");
        setDesc("");
        setSubj("");
        setDueDate("");
        setDueTime("");
    };

    return (
        <>
            <h1 className={styles.head}>เพิ่ม Task</h1>
            <form className={styles.form}>
                <label htmlFor="name">ชื่อ Task</label>
                <input
                    id="name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <label htmlFor="desc">คำอธิบาย Task</label>
                <input
                    id="desc"
                    type="text"
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                />
                <label htmlFor="subj">วิชา</label>
                <select
                    id="subj"
                    value={subj}
                    onChange={(e) => setSubj(e.target.value)}
                >
                    <option value="_private">_private</option>
                    <option value="JC208">JC208</option>
                    <option value="JC462">JC462</option>
                    <option value="JC463">JC463</option>
                    <option value="JC360">JC360</option>
                    <option value="JC369">JC369</option>
                    <option value="IS462">IS462</option>
                </select>
                <label htmlFor="due">กำหนดส่ง/เวลานัดหมาย </label>

                <input
                    id="due"
                    onChange={(e) => setDueDate(e.target.value)}
                    value={dueDate}
                    placeholder="YYYY-MM-DD"
                />
                <input
                    id="due"
                    onChange={(e) => setDueTime(e.target.value)}
                    value={dueTime}
                    placeholder="HH:mm"
                />
                <div className={styles.form__btn}>
                    <button
                        className={styles.form__btn__reset}
                        onClick={resetForm}
                    >
                        Reset
                    </button>
                    <button
                        className={styles.form__btn__add}
                        onClick={onSubmit}
                    >
                        Add
                    </button>
                </div>
            </form>
        </>
    );
};

export default AddTaskForm;

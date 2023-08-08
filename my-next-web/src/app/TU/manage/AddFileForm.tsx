"use client";

import React, { useState } from "react";
import styles from "./AddFileForm.module.scss";
import { createNewFile } from "@/utils/firebase";
import { useFiles } from "@/contexts/FilesContext";

const AddFileForm = () => {
    const { revalidate } = useFiles();
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [subj, setSubj] = useState("");
    const [url, setUrl] = useState("");
    const [type, setType] = useState("doc");

    const onSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();
        const data = {
            name,
            desc,
            subj,
            url,
            type,
        };
        if (name === "" || subj === "" || url === "") {
            return;
        }
        const res = await createNewFile(data);
        if (res?.status === "success") {
            resetForm();
            revalidate();
        }
    };

    const resetForm = () => {
        setName("");
        setDesc("");
        setSubj("");
        setUrl("");
        setType("");
    };

    return (
        <>
            <form className={styles.form}>
                <label htmlFor="name">ชื่อไฟล์</label>
                <input
                    id="name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <label htmlFor="desc">คำอธิบาย</label>
                <input
                    id="desc"
                    type="text"
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                />
                <label htmlFor="subj">วิชา</label>
                <input
                    id="subj"
                    type="text"
                    onChange={(e) => setSubj(e.target.value)}
                    value={subj}
                />
                <label htmlFor="url">ลิงก์</label>
                <input
                    id="url"
                    type="url"
                    onChange={(e) => setUrl(e.target.value)}
                    value={url}
                />
                <label htmlFor="type">ชนิดไฟล์</label>
                <select
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="doc">Google Docs</option>
                    <option value="xls">Spread Sheet</option>
                    <option value="canva">Canva</option>
                    <option value="drive">Google Drive</option>
                    <option value="web">Website</option>
                </select>
                <div className={styles.form__btn}>
                    <button className={styles.form__btn__reset} type="reset">
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

export default AddFileForm;

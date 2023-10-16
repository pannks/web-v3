"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import { useFiles } from "@/contexts/FilesContext";
import FileCard from "@/components/FileCard";
import Modal from "@/components/Modal";
import FileRow from "../../manage/FileRow";
import AddMediaFileForm from "./AddMediaFileForm";
import { useUser } from "@/contexts/UserContext";
import SkeletonLoading from "@/components/SkeletonLoading";
import { File } from "@/utils/dataType";
import { deleteFileById } from "@/utils/firebase";
import DeleteFileForm from "../../manage/DeleteFileForm";
import EditFileForm from "../../manage/EditfileForm";

const PageView = () => {
    const [showAddFileForm, setShowAddFileForm] = useState(false);
    const [showDelModal, setShowDelModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState<undefined | File>(
        undefined
    );

    const [editMode, setEditMode] = useState(false);
    const { logIn, user: getUser } = useUser();

    const { files, loading: loadingFiles, revalidate } = useFiles();
    const fileList = files?.filter((file) => file.subj === "JC463");

    const willDelete = (file: File) => {
        setShowDelModal(true);
        setSelectedFile(file);
    };

    const willEdit = (file: File) => {
        setShowEditModal(true);
        setSelectedFile(file);
    };
    const onDelete = async (id: string) => {
        if (id === "") {
            return;
        }
        const res = await deleteFileById(id);
        if (res.status === "success") {
            setShowDelModal(false);
            revalidate();
        }
    };

    return (
        <div className={styles.page}>
            <h1>📢รวมไฟล์ 463 ไว้ที่นี่</h1>
            <button
                onClick={() => setShowAddFileForm(true)}
                className={styles.btn__add}
            >
                {"+ "}
                ADD FILE
            </button>
            <button
                onClick={() => setEditMode(!editMode)}
                className={styles.btn__edit}
            >
                EDIT
            </button>
            {loadingFiles && <SkeletonLoading />}
            {showAddFileForm && (
                <Modal onClose={() => setShowAddFileForm(false)}>
                    <AddMediaFileForm author={getUser?.username ?? ""} />
                </Modal>
            )}
            {editMode ? (
                <div className={styles.fld__edit}>
                    {fileList
                        ?.sort((b, a) => a.createAt - b.createAt)
                        .map((file) => (
                            <FileRow
                                key={file.id}
                                file={file as File}
                                onClickDel={willDelete}
                                onClickEdit={willEdit}
                            />
                        ))}
                </div>
            ) : (
                <div className={styles.fld}>
                    {fileList
                        ?.sort((b, a) => a.createAt - b.createAt)
                        .map((file) => (
                            <FileCard
                                key={file.id}
                                file={file as File}
                                showSubj={false}
                                showAuthor
                            />
                        ))}
                </div>
            )}
            {showDelModal && (
                <Modal onClose={() => setShowDelModal(false)}>
                    <DeleteFileForm
                        file={selectedFile}
                        onCancel={() => setShowDelModal(false)}
                        onDelete={onDelete}
                    />
                </Modal>
            )}
            {showEditModal && (
                <Modal onClose={() => setShowEditModal(false)}>
                    <EditFileForm
                        file={selectedFile}
                        onClose={() => setShowEditModal(false)}
                    />
                </Modal>
            )}
        </div>
    );
};

export default PageView;

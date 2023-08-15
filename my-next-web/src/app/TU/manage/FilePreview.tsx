"use Client";

import { useFiles } from "@/contexts/FilesContext";
import React, { useState } from "react";
import FileRow from "./FileRow";
import Spinner from "@/components/Spinner";
import { File } from "@/utils/dataType";
import Modal from "@/components/Modal";
import DeleteFileForm from "./DeleteFileForm";
import { deleteFileById } from "@/utils/firebase";
import SubjRow from "@/components/SubjRow";
import EditFileForm from "./EditfileForm";

const FilePreview = () => {
    const { files, loading, revalidate } = useFiles();
    const [showDelModal, setShowDelModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState<undefined | File>(
        undefined
    );

    const categorized =
        files?.reduce((groups, item) => {
            const key = item.subj;
            if (!groups[key]) {
                groups[key] = [];
            }
            groups[key].push(item);
            return groups;
        }, {}) ?? {};

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
        <>
            {loading && (
                <div className="spinner_container">
                    <Spinner />
                </div>
            )}
            <div>
                {Object.keys(categorized).map((subj, i) => (
                    <SubjRow key={subj} subj={subj} index={i + 1}>
                        {categorized[subj].map((file: File) => (
                            <FileRow
                                key={file.id}
                                file={file as File}
                                onClickDel={willDelete}
                                onClickEdit={willEdit}
                            />
                        ))}
                    </SubjRow>
                ))}
            </div>
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
        </>
    );
};

export default FilePreview;

import React from "react";
import styles from "./DeleteFileForm.module.scss";
import { File } from "@/utils/dataType";

type DeleteFileFormProps = {
    file: File | undefined;
    onCancel: () => void;
    onDelete: (id: string) => void;
};

const DeleteFileForm: React.FC<DeleteFileFormProps> = ({
    file,
    onCancel,
    onDelete,
}) => {
    return (
        <div className={styles.form}>
            <h4>ลบไฟล์ {file?.id}</h4>
            <p>name: {file?.name}</p>
            <p>subj: {file?.subj}</p>
            <div className={styles.btn__grp}>
                <button className={styles.btn__cancel} onClick={onCancel}>
                    ยกเลิก
                </button>
                <button
                    className={styles.btn__del}
                    onClick={file ? () => onDelete(file.id) : () => null}
                >
                    ลบ
                </button>
            </div>
        </div>
    );
};

export default DeleteFileForm;

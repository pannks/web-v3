import React from "react";
import styles from "./DeleteFileForm.module.scss";

type DeleteFileFormProps = {
    id: string;
    onCancel: () => void;
    onDelete: (id: string) => void;
};

const DeleteFileForm: React.FC<DeleteFileFormProps> = ({
    id,
    onCancel,
    onDelete,
}) => {
    return (
        <>
            <h4>ลบไฟล์ {id}</h4>
            <div className={styles.btn__grp}>
                <button className={styles.btn__cancel} onClick={onCancel}>
                    ยกเลิก
                </button>
                <button
                    className={styles.btn__del}
                    onClick={() => onDelete(id)}
                >
                    ลบ
                </button>
            </div>
        </>
    );
};

export default DeleteFileForm;

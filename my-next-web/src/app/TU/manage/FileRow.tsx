import React from "react";
import styles from "./FileRow.module.scss";
import {
    convertFbTimeToDate,
    formatLocalTime,
    getFileIcon,
} from "@/utils/transform";
import {
    HiOutlineDocumentDuplicate,
    HiOutlinePencilSquare,
    HiOutlineTrash,
} from "react-icons/hi2";
import { File } from "@/utils/dataType";

type FileRowProps = {
    file: File;
    onClickEdit?: (file: File) => void;
    onClickDel?: (file: File) => void;
};

const FileRow: React.FC<FileRowProps> = ({
    file,
    onClickEdit = () => {},
    onClickDel = () => {},
}) => {
    const icon = getFileIcon(file.type);
    let readTime = "";
    if (file.createAt) {
        const time = convertFbTimeToDate(file.createAt);
        readTime = formatLocalTime(time);
    }

    return (
        <div className={styles.row}>
            <div className={styles.icon}>{icon.i()}</div>
            <div className={styles.name}>
                <h4>{file.name}</h4>
                <p>{file.desc}</p>
                <p>{readTime}</p>
            </div>
            <button className={styles.edit} onClick={() => onClickEdit(file)}>
                <HiOutlinePencilSquare />
            </button>
            <button className={styles.del} onClick={() => onClickDel(file)}>
                <HiOutlineTrash />
            </button>
            <div className={styles.url}>
                <span className={styles.copy}>
                    <HiOutlineDocumentDuplicate />
                </span>
                <p>{file.url}</p>
            </div>
        </div>
    );
};

export default FileRow;

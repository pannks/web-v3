import FileCodeBlock from "@/components/FileCodeBlock";
import React from "react";
import { IoCodeWorkingOutline } from "react-icons/io5";
import styles from "./CodeModuleRow.module.scss";

const CodeModuleRow: React.FC<{
    title: string;
    desciption?: string;
    hash?: string;
    codeObj: {
        code: string;
        lang: string;
        filename: string;
    }[];
}> = ({ title, desciption, hash, codeObj }) => {
    return (
        <div className={styles.row} id={hash}>
            <h3>{title}</h3>
            {desciption && <p>{desciption}</p>}
            <FileCodeBlock codeObj={codeObj} />
        </div>
    );
};

export default CodeModuleRow;

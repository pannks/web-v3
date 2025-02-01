import React from "react";
import CodeModuleRow from "./CodeModuleRow";
import { CodeSnippet, getCodeByName } from "@/libs/getCodeByName";
import styles from "./ImageContentView.module.scss";

type ImageContentViewProps = {
    image_url: string;
    alt?: string;
};

const ImageContentView: React.FC<ImageContentViewProps> = ({
    image_url,
    alt = ""
}) => {
    return (
        <div className={styles.container}>
            <img src={image_url} alt={alt} className={styles.image} />
        </div>
    );
};

export default ImageContentView;

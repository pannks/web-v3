"use client";
import styles from "./FileCodeBlock.module.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import React from "react";
import {
    xcode,
    codepenEmbed
} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import CopyToClipboardButton from "@/hooks/useCopyToClipboard";

interface FileCodeBlockProps {
    codeObj: {
        code: string;
        lang: string;
        filename: string;
    }[];
}

const FileCodeBlock: React.FC<FileCodeBlockProps> = ({ codeObj }) => {
    const [index, setIndex] = React.useState<number>(0);
    const { code, lang, filename } = codeObj[index];

    return (
        <div className={styles.wrapper}>
            <div className={styles.code__header}>
                <div>
                    {codeObj.map((item, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={
                                styles.code__header__file +
                                " " +
                                (i === index ? styles.active : "")
                            }
                        >
                            {item.filename}
                        </button>
                    ))}
                </div>

                <CopyToClipboardButton content={code} key={index} />
            </div>
            <SyntaxHighlighter
                language={lang}
                style={xcode}
                wrapLines={true}
                showLineNumbers={true}
                customStyle={{
                    display: "flex",
                    width: "100%",
                    padding: "1rem",
                    margin: "0",
                    fontSize: "1.4rem",
                    borderRadius: "0.5rem"
                }}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default FileCodeBlock;

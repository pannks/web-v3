import React from "react";
import CodeModuleRow from "./CodeModuleRow";
import { CodeSnippet, getCodeByName } from "@/libs/getCodeByName";
import styles from "./SnippetContentView.module.scss";

type SnippetContentViewProps = {
    snippets: string[][]; // [["sn1", "sn2"], ["sn3"]]
};

const SnippetContentView: React.FC<SnippetContentViewProps> = ({
    snippets
}) => {
    const codeSets = snippets.reduce<CodeSnippet[][]>((acc, snippetSet) => {
        const codeSet = snippetSet
            .map(getCodeByName)
            .filter((snippet): snippet is CodeSnippet => snippet !== null);
        acc.push(codeSet);
        return acc;
    }, []);

    return (
        <div className={styles.container}>
            {codeSets.map((codes, i) => {
                const codeObjArr = codes.map((c) => {
                    return {
                        code: c.content,
                        lang: c.lang,
                        filename: c.filename
                    };
                });
                return (
                    <div key={i} className={styles.row} id={codes[0].hash}>
                        <CodeModuleRow
                            key={i}
                            title={codes[0].title}
                            desciption={codes[0].description}
                            codeObj={codeObjArr}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default SnippetContentView;

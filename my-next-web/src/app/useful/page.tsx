import React from "react";
import styles from "./page.module.scss";
import { getCodeByName } from "@/libs/getCodeByName";
import FileCodeBlock from "@/components/FileCodeBlock";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote/rsc";
import { IoCodeWorkingOutline } from "react-icons/io5";
import CodeModuleRow from "./CodeModuleRow";
import { sourceMaps } from "./sourceMap";
import Link from "next/link";

const UsefulPage = async () => {
    return (
        <div className={styles.page}>
            <div className={styles.col}>
                <h1>Welcome to Useful Page</h1>
                <p>
                    This page will give you some useful resources for developers
                    life and more{" "}
                </p>
                <div className={styles.card__wrapper}>
                    {sourceMaps
                        .filter((s) => s.parent_id === null && s.slug !== "")
                        .map((source, i) => (
                            <Link
                                href={`/useful/${source.slug}`}
                                key={i}
                                className={styles.card}
                            >
                                {source.icon && source.icon({})}
                                <h2>{source.label}</h2>
                                <p>{source.detail}</p>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default UsefulPage;

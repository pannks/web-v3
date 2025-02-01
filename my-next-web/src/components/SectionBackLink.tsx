"use client";
import React from "react";
import styles from "./SectionBackLink.module.scss";
import { HiChevronLeft, HiMiniArrowLeft } from "react-icons/hi2";
import Link from "next/link";

type SectionBackLinkProps = {
    href?: string;
    text?: string;
};

const SectionBackLink: React.FC<SectionBackLinkProps> = ({
    href = "./../",
    text = "Back"
}) => {
    return (
        <section className={styles.back}>
            <button
                className={styles.back__btn}
                onClick={() => {
                    window.history.back();
                }}
            >
                <HiMiniArrowLeft /> {text}
            </button>
        </section>
    );
};

export default SectionBackLink;

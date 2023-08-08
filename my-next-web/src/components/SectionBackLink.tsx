import React from "react";
import styles from "./SectionBackLink.module.scss";
import { HiChevronLeft } from "react-icons/hi2";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

type SectionBackLinkProps = {
    href?: Url;
    text?: string;
};

const SectionBackLink: React.FC<SectionBackLinkProps> = ({
    href = "./../",
    text = "Back",
}) => {
    return (
        <section className={styles.back}>
            <Link href={href}>
                <HiChevronLeft /> {text}
            </Link>
        </section>
    );
};

export default SectionBackLink;

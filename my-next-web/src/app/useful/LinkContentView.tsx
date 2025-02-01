import React from "react";
import styles from "./LinkContentView.module.scss";
import Link from "next/link";

type LinkContentViewProps = {
    links: {
        text: string;
        url: string;
    }[];
};

const LinkContentView: React.FC<LinkContentViewProps> = ({ links }) => {
    return (
        <div className={styles.container}>
            {links.map((link) => (
                <Link href={link.url} key={link.url} className={styles.card}>
                    {link.text}
                </Link>
            ))}
        </div>
    );
};

export default LinkContentView;

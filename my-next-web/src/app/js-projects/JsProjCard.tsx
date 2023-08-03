import Link from "next/link";
import React from "react";
import styles from "./JsProjCard.module.scss";
import { Url } from "next/dist/shared/lib/router/router";

type JsProjCardProps = {
    icon: React.ReactNode;
    name: string;
    desc: string;
    href?: Url;
};

const JsProjCard: React.FC<JsProjCardProps> = ({
    icon,
    name,
    desc,
    href = "./",
}) => {
    return (
        <Link href={href} className={styles.card}>
            <div className={styles.icon}>{icon}</div>
            <h4 className={styles.name}>{name}</h4>
            <p className={styles.desc}>{desc}</p>
        </Link>
    );
};

export default JsProjCard;

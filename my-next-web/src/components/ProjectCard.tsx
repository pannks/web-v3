import React from "react";
import styles from "./ProjectCard.module.scss";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

type ProjectCardProps = {
    title: string;
    desc: string;
    img?: string;
    href?: Url;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    img,
    desc,
    href = "./",
}) => {
    return (
        <Link href={href} className={styles.link}>
            <div className={styles.card}>
                <img src={`${img}`} alt={title} />
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </Link>
    );
};

export default ProjectCard;

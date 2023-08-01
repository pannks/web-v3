import React from "react";
import styles from "./ProjectCard.module.scss";
import Image from "next/image";

type ProjectCardProps = {
    title: string;
    desc: string;
    img?: string;
    href?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    img,
    desc,
    href,
}) => {
    return (
        <div className={styles.card}>
            <img src={img} alt={title} />
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    );
};

export default ProjectCard;

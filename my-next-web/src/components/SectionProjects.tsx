import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./SectionProjects.module.scss";
import { projectData as project } from "./../data/projectData";

const SectionProjects = () => {
    return (
        <>
            <div className={styles.card__row}>
                <ProjectCard
                    title={project.pj01.title}
                    desc={project.pj01.desc}
                    img={project.pj01.src}
                    tagArray={project.pj01.tagArray}
                    href={project.pj01.href}
                />
                <ProjectCard
                    title={project.pj02.title}
                    desc={project.pj02.desc}
                    img={project.pj02.src}
                    tagArray={project.pj02.tagArray}
                    href={project.pj02.href}
                />
                <ProjectCard
                    title={project.pj03.title}
                    desc={project.pj03.desc}
                    img={project.pj03.src}
                    tagArray={project.pj03.tagArray}
                    href={project.pj03.href}
                />
                <ProjectCard
                    title={project.pj04.title}
                    desc={project.pj04.desc}
                    img={project.pj04.src}
                    tagArray={project.pj04.tagArray}
                    href={project.pj04.href}
                />
            </div>
        </>
    );
};

export default SectionProjects;

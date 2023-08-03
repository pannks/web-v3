import React from "react";
import SkillCard from "./SkillCard";
import styles from "./SectionSkill.module.scss";
import { Skill, skillData } from "@/data/skillData";

const SectionSkill = () => {
    const renderSkill = (skill: Skill) => (
        <SkillCard
            key={skill.name}
            name={skill.name}
            time=""
            desc={skill.desc}
            icon={skill.icon()}
            colorOnHov={skill.color}
        />
    );
    return (
        <>
            <h3 className={styles.head}>Frontend</h3>
            <div className={styles.skill__row}>
                {skillData.frontend.map(renderSkill)}
            </div>
            <h3 className={styles.head}>Backend/ Database/ CI/CD</h3>
            <div className={styles.skill__row}>
                {skillData.backend.map(renderSkill)}
            </div>
            <h3 className={styles.head}>Design Tools</h3>
            <div className={styles.skill__row}>
                {skillData.design.map(renderSkill)}
            </div>
        </>
    );
};

export default SectionSkill;

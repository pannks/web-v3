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
            <p className={styles.desc}>
                เป็นส่วนที่ชอบมาก รู้สึกสนุก
                และเห็นการเปลี่ยนแปลงได้อย่างรวดเร็ว อาจมีความซับซ้อนในแง่ State
                & Query Management บ้าง แต่ยังรู้สึกเข้าใจและพยายามทำให้ดีได้
                ตอนนี้เนื่องจากเริ่มชินกับ React + Typescript แล้ว
                จึงพยายามฝึกเขียน Lean Code + เขียนให้เข้าใจง่าย มีระเบียบ
                และคำนึงถึง Performance เช่น Bundle Size, การ Render
                เท่าที่จำเป็น รวมถึงจุดประสงค์ของเว็บ เช่น ต้องการ SEO
                หรือเป็นเว็บหลังบ้าน
            </p>
            <div className={styles.skill__row}>
                {skillData.frontend.map(renderSkill)}
            </div>
            <h3 className={styles.head}>Backend/ Database/ CI/CD</h3>
            <p className={styles.desc}>
                รู้สึกเป็น Part ที่ยาก และต้องใช้ความอดทน ทั้ง Learning Curves
                ที่สูง จึงพยายามเลี่ยงมาทำ Client Side เพื่อให้ Production เร็ว
                และทันท่วงทีต่อความต้องการของลูกค้า
                แต่ไม่ว่ายังไงก็ยังพยายามหาโอกาสเรียนรู้ ศึกษา Tech ใหม่ๆ
                เพื่อหาโอกาสมาจับใช้กับงานต่างๆ
            </p>
            <div className={styles.skill__row}>
                {skillData.backend.map(renderSkill)}
            </div>
            <h3 className={styles.head}>Design Tools</h3>
            <p className={styles.desc}>
                เดิมมีพื้นฐานการทำ Graphic Design อยู่แล้ว พอผนวกกับ UX/UI
                design รู้สึกเป็นศาสตร์ที่ชอบมากๆ ทำให้เกิดความ Connect กับ User
                ทั้งด้าน Visual ,Psychology และ
                ประสบการณ์การใช้งานที่เข้าถึงได้มากกว่า Plain Graphic
                เช่นการถ่ายทอด Data Visualization + Persuade กิจกรรมของ User
            </p>
            <div className={styles.skill__row}>
                {skillData.design.map(renderSkill)}
            </div>
        </>
    );
};

export default SectionSkill;

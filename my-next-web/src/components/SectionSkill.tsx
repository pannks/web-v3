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
            <h3 className={styles.head}>Backend & Database</h3>
            <p className={styles.desc}>
                เป็น Part ที่ท้าทายและหากออกแบบวางแผน ERD
                มาดีก็จะทำให้ทุกอย่างในอนาคตราบรื่น
                นอกจากนี้ผมยังพยายามที่จะใส่ใจการออกแบบ api endpoint รวมถึง
                authentication เพื่อให้ระบบมีความปลอดภัย แม้ผู้ใช้ในระดับ user
                อาจมองข้ามในส่วนนี้ แต่ก็ถือว่าเป็นส่วนที่มองข้ามไปไม่ได้
            </p>
            <div className={styles.skill__row}>
                {skillData.backend.map(renderSkill)}
            </div>
            <h3 className={styles.head}>DevOps</h3>
            <p className={styles.desc}>
                พอเริ่มทำงานที่ซับซ้อนมากขึ้นเช่นการคุยกันของหลายๆ services
                ผมก็ต้องมาพึ่งพาในส่วนการ manage contact มากขึ้นด้วย
                ดังนั้นทำให้ผมได้เรียนรู้ที่จะพยายามฝึกทำงานอย่างเป็นระบบและรองรับการ
                scalability โดยไม่ให้กินค่าใช้จ่ายมากจนเกินไป
                โดยถ้าเป็นเว็บขนาดเล็กก็อาจเลือกใช้ serverless ได้
                แต่ถ้ามันเริ่มจะซับซ้อนหรือบางอย่างเรามองว่าเอามา manage
                เองดีกว่า aws หรือ google cloud ก็จะเริ่มเข้ามามีบทบาท
                ในตอนนี้ผมยอมรับว่าอาจจะยังไม่เก่งในส่วนนี้
                แต่เริ่มเข้าใจภาพว่าระบบใหญ่ๆนั้นทำงานอย่างไร
                และจะพยายามฝึกไปเรื่อยๆครับ
            </p>
            <div className={styles.skill__row}>
                {skillData.devOps.map(renderSkill)}
            </div>
            <h3 className={styles.head}>Mobile</h3>
            <p className={styles.desc}>
                ปฏิเสธไม่ได้ว่าพอมาถึงจุดนึง
                ความสามารถของเว็บอาจไม่ตอบโจทย์ความต้องการใช้งานของผู้ใช้ เช่น
                Notification หรือความคุ้นชินอื่นๆ
                ประกอบกับผมเห็นบริษัทต่างๆเริ่มมีแอปของตัวเอง
                จึงได้เริ่มเขียนแอป และเข้าใจอะไรหลายๆอย่าง
                ผมต้องบอกก่อนเลยว่าเคยเรียน flutter มาจากมหาลัย
                จากนั้นมาเรียนรู้จาก Ionic ก่อน แต่สุดท้ายมาพบว่า React Native
                นี่แหละ ตอบโจทย์ทั้ง library ข้างเคียง การ test การ deploy
                ถ้าใครอยากเขียนแอป ผมแนะนำเลย react native เลยง่ายกว่า flutter
                มากๆ ถ้ายิ่งเขียน react เป็นคือสบายเลย
            </p>
            <div className={styles.skill__row}>
                {skillData.mobile.map(renderSkill)}
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

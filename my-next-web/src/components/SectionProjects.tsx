import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./SectionProjects.module.scss";

const SectionProjects = () => {
    return (
        <>
            <div className={styles.card__row}>
                <ProjectCard
                    title={"Mini Javascript Projects"}
                    desc={
                        "รวมโปรเจค Javascript ที่ทำเล่นๆ ตั้งแต่เริ่มเขียนโปรแกรมแรกๆ"
                    }
                    img={
                        "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    }
                    href={"./js-projects"}
                />
                <ProjectCard
                    title={"Pann's Website V3"}
                    desc={
                        "เว็บนี้นี่เอง ใช้ Next.JS + Typescript เขียน หลังจากที่เริ่มชินกับ React แล้ว ซึ่งเว็บนี้เป็น V3 เพราะว่าปรับมาจากของเก่าที่เขียนด้วย PHP + Vanilla Javascript ES6+ ซึ่งยังอยู่บน Host เดิม เว็บนี้ก็ไม่ได้มีอะไรมาก ไว้รวบรวมงานต่างๆไว้ในที่เดียว"
                    }
                    img={
                        "https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    }
                />
                <ProjectCard
                    title={"Ata bubble tea With Ordering System"}
                    img={
                        "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
                    }
                    desc={
                        "เป็น Official Website ของร้านแอทต้าบั๊บเบิ้ลที ตัวเว็บไม่มีอะไร แต่ลูกเล่นคือมีระบบสั่งน้ำแล้วไปรับที่ร้าน (Order&Pick Up Feature) ซึ่งจะกดสั่งผ่าน Line Rich Menu (ใช้ Line Liff) เพื่อให้สามารถนำข้อมูลลูกค้าจากไลน์มาใช้ยืนยันตัวตนในการสั่งเครื่องดื่มผ่านทางร้าน"
                    }
                />
                <ProjectCard
                    title={"Pilates Nonthaburi"}
                    img="https://images.unsplash.com/photo-1552748608-2c2c9675b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
                    desc={
                        "เว็บนี้ปรับปรุงมาแล้วหลายเวอร์ชั่น(ปัจจุบัน V.2.0.10) เป็นเว็บแอปพลิเคชั่นหลังบ้าน หรือ CRM ของสตูดิโอพิลาทิส นนทบุรี เพื่อดำเนินกิจกรรมต่างๆของลูกค้า เช่น การเช็คอิน ประวัติการซื้อ-ใช้คลาสเรียน ซึ่งปัจจุบันมีลูกค้าอยู่บนฐานระบบมากกว่า 300 ราย"
                    }
                />
            </div>
        </>
    );
};

export default SectionProjects;

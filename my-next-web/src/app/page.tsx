import styles from "./page.module.scss";
import ProjectCard from "@/components/ProjectCard";
import SectionSkill from "@/components/SectionSkill";
import Link from "next/link";
import { HiOutlineChevronRight } from "react-icons/hi2";

export default function Home() {
    return (
        <>
            <div className={styles.quicknav}>
                <Link href={"./"}>files</Link>
                <Link href={"./"}>blogs</Link>
                <Link href={"./about"}>about</Link>
            </div>
            <div className={styles.section__1}>
                <h1>
                    Hello, My Name is <span>Pann Kaansadich</span>
                </h1>
                <p>
                    <HiOutlineChevronRight /> study at JC Thammasat
                    (Advertising)
                </p>
                <p>
                    <HiOutlineChevronRight /> Passionate to be Fullstack
                    Developer
                </p>
            </div>
            <div className={styles.section__2}>
                <h2>Projects</h2>
                <p>My Coding Project</p>
                <div className={styles.card__row}>
                    <ProjectCard
                        title={"Mini Javascript Projects"}
                        desc={
                            "รวมโปรเจค Javascript ที่ทำเล่นๆ ตั้งแต่เริ่มเขียนโปรแกรมแรกๆ"
                        }
                        img={
                            "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        }
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
            </div>
            <div className={styles.section__3}>
                <h2>Skills</h2>
                <SectionSkill />
            </div>
            <div className={styles.section__4}>
                <h2>Contact</h2>
                <p>ติดต่องานที่ pann.rat@dome.tu.ac.th</p>
                <p>
                    รับงานเขียนเว็บแอปพลิเคชั่นสำหรับใช้งานภายในองค์กร และ
                    เว็บไซต์แนว Landing Page / SEO
                </p>
            </div>
        </>
    );
}

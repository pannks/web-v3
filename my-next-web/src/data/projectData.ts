import { Tag } from "@/utils/dataType";
import { Url } from "next/dist/shared/lib/router/router";

export const projectData: Record<
    string,
    {
        title: string;
        desc: string;
        src: string;
        tagArray: Tag[];
        href: Url;
    }
> = {
    pj01: {
        title: "Mini Javascript Projects",
        desc: "รวมโปรเจค Javascript ที่ทำเล่นๆ ตั้งแต่เริ่มเขียนโปรแกรมแรกๆ",
        src: "proj-3.png",
        tagArray: [{ id: "js", name: "Javascript", bg: "#ffd500", fg: "#000" }],
        href: "./js-projects",
    },
    pj02: {
        title: "Pann's Website V3",
        desc: "เว็บนี้นี่เอง ใช้ Next.JS + Typescript เขียน หลังจากที่เริ่มชินกับ React แล้ว ซึ่งเว็บนี้เป็น V3 เพราะว่าปรับมาจากของเก่าที่เขียนด้วย PHP + Vanilla Javascript ES6+ ซึ่งยังอยู่บน Host เดิม เว็บนี้ก็ไม่ได้มีอะไรมาก ไว้รวบรวมงานต่างๆไว้ในที่เดียว",
        src: "proj-4.png",
        tagArray: [
            { id: "nxt", name: "Next.Js", bg: "#43474d", fg: "#fff" },
            { id: "ts", name: "Typescript", bg: "#196ecf", fg: "#fff" },
            { id: "sass", name: "Sass", bg: "#ff30cb" },
            { id: "mdx", name: "MDX", bg: "#ffb536", fg: "#000" },
        ],
        href: "./",
    },
    pj03: {
        title: "Ata bubble tea With Ordering System",
        desc: "เป็น Official Website ของร้านแอทต้าบั๊บเบิ้ลที ตัวเว็บไม่มีอะไร แต่ลูกเล่นคือมีระบบสั่งน้ำแล้วไปรับที่ร้าน (Order&Pick Up Feature) ซึ่งจะกดสั่งผ่าน Line Rich Menu (ใช้ Line Liff) เพื่อให้สามารถนำข้อมูลลูกค้าจากไลน์มาใช้ยืนยันตัวตนในการสั่งเครื่องดื่มผ่านทางร้าน",
        src: "proj-2.png",
        tagArray: [
            { id: "ts", name: "React", bg: "#59d8ff", fg: "#000" },
            { id: "js", name: "Javascript", bg: "#ffd500", fg: "#000" },
            { id: "redux", name: "Redux", bg: "#ab57ff" },
            { id: "sass", name: "Sass", bg: "#ff30cb" },
            { id: "php", name: "PHP", bg: "#567199", fg: "#fff" },
            { id: "firb", name: "Firebase", bg: "#ffa600", fg: "#000" },
        ],
        href: "https://atabubbletea.com/",
    },
    pj04: {
        title: "Pilates Nonthaburi",
        desc: "เว็บนี้ปรับปรุงมาแล้วหลายเวอร์ชั่น(ปัจจุบัน V.2.0.10) เป็นเว็บแอปพลิเคชั่นหลังบ้าน หรือ CRM ของสตูดิโอพิลาทิส นนทบุรี เพื่อดำเนินกิจกรรมต่างๆของลูกค้า เช่น การเช็คอิน ประวัติการซื้อ-ใช้คลาสเรียน ซึ่งปัจจุบันมีลูกค้าอยู่บนฐานระบบมากกว่า 300 ราย",
        src: "proj-1.png",
        tagArray: [
            { id: "ts", name: "React", bg: "#59d8ff" },
            { id: "js", name: "Typescript", bg: "#196ecf", fg: "#fff" },
            { id: "reqry", name: "React Query", bg: "#ed6474" },
            { id: "sass", name: "Styled Components", bg: "#ff8ada" },
            { id: "firb", name: "Supabase", bg: "#50d989" },
        ],
        href: "./",
    },
};

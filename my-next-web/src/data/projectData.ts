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
        title: "Mini Projects",
        desc: "รวมโปรเจคขนาดเล็กที่ทำเล่นๆ ไว้ใช้ประโยชน์ในงานจิปาถะต่างๆ",
        src: "proj-3.png",
        tagArray: [
            { id: "js", name: "Javascript", bg: "#ffd500", fg: "#000" },
            { id: "react", name: "React", bg: "#59d8ff", fg: "#000" }
        ],
        href: "./js-projects"
    },
    pj02: {
        title: "Pann's Website V3",
        desc: "เว็บนี้นี่เอง ใช้ Next.JS + Typescript เขียน หลังจากที่เริ่มชินกับ React แล้ว ซึ่งเว็บนี้เป็น V3 เพราะว่าปรับมาจากของเก่าที่เขียนด้วย PHP + Vanilla Javascript ES6+ ซึ่งยังอยู่บน Host เดิม เว็บนี้ก็ไม่ได้มีอะไรมาก ไว้รวบรวมงานต่างๆไว้ในที่เดียว",
        src: "proj-4.png",
        tagArray: [
            { id: "nxt", name: "Next.Js", bg: "#43474d", fg: "#fff" },
            { id: "ts", name: "Typescript", bg: "#196ecf", fg: "#fff" },
            { id: "sass", name: "Sass", bg: "#ff30cb" },
            { id: "mdx", name: "MDX", bg: "#ffb536", fg: "#000" }
        ],
        href: "./"
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
            { id: "firb", name: "Firebase", bg: "#ffa600", fg: "#000" }
        ],
        href: "https://atabubbletea.com/"
    },
    pj04: {
        title: "Pilates Nonthaburi",
        desc: "เว็บนี้ปรับปรุงมาแล้วหลายเวอร์ชั่น(ปัจจุบัน V.2.0.10) เป็นเว็บแอปพลิเคชั่นหลังบ้าน หรือ CRM ของสตูดิโอพิลาทิส นนทบุรี เพื่อดำเนินกิจกรรมต่างๆของลูกค้า เช่น การเช็คอิน ประวัติการซื้อ-ใช้คลาสเรียน ซึ่งปัจจุบันมีลูกค้าอยู่บนฐานระบบมากกว่า 300 ราย",
        src: "proj-1.png",
        tagArray: [
            { id: "ts", name: "React", bg: "#59d8ff" },
            { id: "js", name: "Typescript", bg: "#196ecf", fg: "#fff" },
            { id: "reqry", name: "React Query", bg: "#ed6474" },
            {
                id: "sass",
                name: "Styled Components",
                bg: "#ff8ada",
                fg: "#000"
            },
            { id: "firb", name: "Supabase", bg: "#50d989", fg: "#000" }
        ],
        href: "./"
    },
    pj05: {
        title: "Captain Quick Riders App",
        desc: "แอปไรเดอร์ที่ใช้เวลาสร้างอย่างรวดเร็วจาก react native โดยมีฟีเจอร์ที่สำคัญ ตั้งแต่รับสมัครไรเดอร์ การรับงาน การดูรายละเอียดงาน จนถึงการจบงาน โดยเป็นไปตามนโยบายการจัดส่งที่กำหนดไว้ ซึ่งแอปนี้มีเป้าหมายในการจัดส่งอาหารประเภทเครื่องดื่มและของหวานที่ต้องการความรวดเร็วในการรับออเดอร์ไปจนถึงจัดส่ง ปัจจุบันยังทดลองใช้ในพื้นที่ขนาดเล็ก มีไรเดอร์เข้าร่วมในระบบแล้วกว่า 10 คน",
        src: "proj-cq-5.png",
        tagArray: [
            { id: "rn", name: "React Native", bg: "#59d8ff" },
            { id: "exp", name: "Expo", bg: "#43474d", fg: "#fff" },
            { id: "ts", name: "Typescript", bg: "#196ecf", fg: "#fff" },
            { id: "reqry", name: "React Query", bg: "#ed6474" },
            { id: "firb", name: "Firebase", bg: "#ffa600" },
            { id: "gcp", name: "Cloud Function", bg: "#a8dbff", fg: "#000" },
            { id: "expr", name: "Express", bg: "#c8ff75", fg: "#000" }
        ],
        href: "./"
    },
    pj06: {
        title: "PLATFEST | Solutions for your Business",
        desc: "เว็บเพื่อรองรับงานเขียนเว็บแบบปรับแต่ง เว็บหลังบ้าน สร้างแบรนด์ หรือบริการอื่นๆ อย่างเป็นมืออาชีพและเป็นทางการ เพื่อช่วยแก้ไขปัญหาทางธุรกิจที่คุณพบเจอ",
        src: "proj-5.png",
        tagArray: [
            { id: "next", name: "Next.js", bg: "#43474d", fg: "#fff" },
            { id: "twd", name: "Taiwind", bg: "#09d4db" },
            { id: "ts", name: "Typescript", bg: "#196ecf", fg: "#fff" }
        ],
        href: "./"
    },
    pj07: {
        title: "PannKs Store",
        desc: "ร้านค้า E-commerce ที่เปิดขึ้น โดยมีแรงบันดาลใจคืออยากจะเอาพวก สูตร, Shortcut, Template ที่มีประโยชน์เพื่อแก้ปัญหาอะไรบางอย่าง เพิ่มประสิทธิภาพการทำงาน หรือเพื่อพัฒนาตัวเอง โดยผมมุ่งหวังว่าทุก Product แต่ะอย่างมันต้องดีจริงๆ ได้คุณภาพจริงๆ ที่ผมคัดสรรมาแล้ว ซึ่งในอนาคตก็จะมีสินค้ามากขึ้น",
        src: "proj-6.png",
        tagArray: [
            { id: "rn", name: "React", bg: "#59d8ff" },
            { id: "twd", name: "Taiwind", bg: "#09d4db" },
            { id: "ts", name: "Typescript", bg: "#196ecf", fg: "#fff" },
            { id: "firb", name: "Firebase", bg: "#ffa600" },
            { id: "gcp", name: "Cloud Function", bg: "#a8dbff", fg: "#000" },
            { id: "expr", name: "Express", bg: "#c8ff75", fg: "#000" },
            { id: "strp", name: "Stripe", bg: "#ab57ff", fg: "#fff" }
        ],
        href: "https://store.pannks.me/"
    }
};

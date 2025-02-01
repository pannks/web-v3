import SectionProjects from "@/components/SectionProjects";
import styles from "./page.module.scss";
import SectionSkill from "@/components/SectionSkill";
import Link from "next/link";
import {
    HiCodeBracketSquare,
    HiComputerDesktop,
    HiFire,
    HiOutlineChevronRight
} from "react-icons/hi2";
import NavSide from "@/components/NavSide";
import HomeImage from "./HomeImage";

export default function Home() {
    return (
        <>
            <NavSide />
            <div className={styles.section__1}>
                <h1>
                    Hi, My name is <span>Pann Kaansadich</span>
                </h1>
                <p>
                    <HiOutlineChevronRight /> Graduated from Advertising Field
                </p>
                <p>
                    <HiOutlineChevronRight /> Working as a Freelance Fullstack
                    Developer
                </p>
                <div className={styles.section__1__img}>
                    <HomeImage />
                </div>
            </div>
            <div className={styles.section__2}>
                <span className={styles.section__2__icon}>
                    <HiCodeBracketSquare />
                </span>
                <h2>PROJECTS</h2>

                <p>My Coding Project</p>
                <SectionProjects />
            </div>
            <div className={styles.section__3}>
                <span className={styles.section__2__icon}>
                    <HiFire />
                </span>
                <h2 className={styles.head}>USED TOOLS</h2>
                <SectionSkill />
            </div>
            <div className={styles.section__4}>
                <span className={styles.section__2__icon}>
                    <HiComputerDesktop />
                </span>
                <h2>CONTACT ME</h2>

                <div className={styles.section__4__links}>
                    <Link
                        className={styles.section__4__link}
                        href="https://forms.gle/jnq4WnSeYvzeV3sU6"
                    >
                        ติดต่อสอบถาม ติดต่องาน
                    </Link>
                </div>
            </div>
        </>
    );
}

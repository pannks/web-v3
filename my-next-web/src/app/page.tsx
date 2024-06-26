import SectionProjects from '@/components/SectionProjects';
import styles from './page.module.scss';
import ProjectCard from '@/components/ProjectCard';
import SectionSkill from '@/components/SectionSkill';
import { Metadata } from 'next';
import Link from 'next/link';
import { HiOutlineChevronRight } from 'react-icons/hi2';
import NavSide from '@/components/NavSide';
import Image from 'next/image';
import HomeImage from './HomeImage';
import Badge from '@/components/Badge';

export default function Home() {
    return (
        <>
            <NavSide />
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
                <div className={styles.section__1__img}>
                    <HomeImage />
                </div>
            </div>
            <div className={styles.section__2}>
                <h2>Projects</h2>
                <p>My Coding Project</p>
                <SectionProjects />
            </div>
            <div className={styles.section__3}>
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

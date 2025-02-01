import { Metadata } from "next";
import styles from "./page.module.scss";
import SectionBackLink from "@/components/SectionBackLink";

export const metadata: Metadata = {
    title: "Pann's Website | About Me",
    description: "PannKs Latest Official Website 2023"
};

const AboutPage = () => {
    return (
        <>
            <div className={styles.page}>
                <h1 className={styles.heading}>Coming Soon</h1>
                <p>รอก่อน </p>
            </div>
        </>
    );
};

export default AboutPage;

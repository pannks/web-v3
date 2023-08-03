import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
    title: "Pann's Website | About Me",
    description: "PannKs Latest Official Website 2023",
};

const AboutPage = () => {
    return (
        <div className={styles.section__1}>
            <h1 className={styles.heading}>About Me</h1>
            <p>Just someone who is lonely in the huge world</p>
        </div>
    );
};

export default AboutPage;

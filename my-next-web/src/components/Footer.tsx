import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { SiGithub, SiYoutube, SiInstagram } from "react-icons/si";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contacts}>
                <Link href="https://github.com/pannks">
                    <SiGithub size={18} />
                </Link>
                <Link href="https://www.youtube.com/channel/UCFnF4VHD1qSyraDuE1LKIFQ">
                    <SiYoutube size={18} />
                </Link>
                <Link href="./">
                    <SiInstagram size={18} />
                </Link>
            </div>
            <p>Pann Kaansadich &copy; 2023</p>
        </footer>
    );
};

export default Footer;

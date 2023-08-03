"use client";
import React from "react";
import styles from "./Navigation.module.scss";
import { useDarkMode } from "@/contexts/DarkModeContext";
import Link from "next/link";

const Navigation = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return (
        <div className={styles.nav}>
            <Link href={"/"}>PannKs</Link>
            <div className={styles.toggleTheme}>
                <label className={styles.switch}>
                    <input
                        type="checkbox"
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                    />
                    <span className={styles.slider}></span>
                </label>
            </div>
        </div>
    );
};

export default Navigation;

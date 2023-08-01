"use client";
import React from "react";
import styles from "./Navigation.module.scss";
import { useDarkMode } from "@/contexts/DarkModeContext";

const Navigation = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return (
        <div className={styles.nav}>
            <p>PannKs</p>
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

'use client';
import React from 'react';
import styles from './Navigation.module.scss';
import { useDarkMode } from '@/contexts/DarkModeContext';
import Link from 'next/link';
import { useUser } from '@/contexts/UserContext';

const Navigation = () => {
    const { user } = useUser();
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return (
        <div className={styles.navwrap}>
            <div className={styles.nav}>
                <Link href={'/'}>PannKs</Link>
                <div className={styles.displayUser}>
                    <div className={styles.user}>{user && user.username}</div>
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
            </div>
        </div>
    );
};

export default Navigation;

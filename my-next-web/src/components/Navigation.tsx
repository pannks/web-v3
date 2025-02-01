"use client";
import React from "react";
import styles from "./Navigation.module.scss";
import { useDarkMode } from "@/contexts/DarkModeContext";
import Link from "next/link";
import { useUser } from "@/contexts/UserContext";
import { signInWithGooglePopup, signOut } from "@/utils/firebase";
import { User } from "@/utils/dataType";

const Navigation = () => {
    const { user, logIn, isLogIn, logOut, loading } = useUser();
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    const signInHandler = async () => {
        const result = await signInWithGooglePopup();
        if (result?.status === "success") {
            logIn(result.user as User);
        }
    };
    const signOutHandler = async () => {
        const result = await signOut();
        logOut();
    };
    return (
        <div className={styles.navwrap}>
            <div className={styles.nav}>
                <Link href={"/"} className={styles.logo}>
                    <span className={styles.logo__icon}>
                        <img src="/icon512_maskable.png" alt="" />
                    </span>
                    <span>PannKs</span>
                </Link>
                <div className={styles.nav__right}>
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
                    {!loading && (
                        <>
                            {user && (
                                <>
                                    <div className={styles.user}>
                                        <img
                                            src={`https://api.dicebear.com/9.x/initials/svg?seed=${user?.displayName}`}
                                            alt={user?.displayName ?? "profile"}
                                            loading="lazy"
                                        ></img>
                                    </div>
                                    <button
                                        className={styles.btn_sign_out}
                                        onClick={signOutHandler}
                                    >
                                        Sign Out
                                    </button>
                                </>
                            )}
                            {!user && (
                                <button
                                    className={styles.btn_sign_in}
                                    onClick={signInHandler}
                                >
                                    Sign In with Google
                                    <img src="https://img.icons8.com/?size=100&id=xoyhGXWmHnqX&format=png&color=000000"></img>
                                </button>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navigation;

"use client";

import React, { useState } from "react";
import styles from "./FileMenuCard.module.scss";
import Modal from "@/components/Modal";
import { loginApi } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContext";

type SettingFileCardProps = {
    name: string;
    icon?: React.ReactNode;
    fg?: string;
    bg?: string;
};

const SettingFileCard: React.FC<SettingFileCardProps> = ({
    name,
    icon,
    fg = "#FFF",
    bg = "#FFF",
}) => {
    const [showModal, setShowModal] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { user, logIn, loading } = useUser();
    const router = useRouter();

    const clickManageFile = () => {
        if (user?.role === "admin") {
            router.push("./manage");
        }
        setShowModal(!showModal);
    };

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (username !== "") {
            const res = await loginApi(
                username.toString(),
                password.toString()
            );
            if (res.status === "success") {
                if (res.user) {
                    onCloseHandler();
                    setUsername("");
                    setPassword("");
                    logIn(res.user);
                    router.push("./manage");
                }
            }
        }
    };

    const onCloseHandler = () => setShowModal(false);
    return (
        <>
            <div
                data-hover="menu"
                className={styles.card}
                style={
                    {
                        "--c-svg-color": fg,
                        "--c-bg-color": bg,
                    } as React.CSSProperties
                }
                onClick={clickManageFile}
            >
                {icon}
                <h3>{name}</h3>
            </div>
            {showModal && (
                <Modal onClose={onCloseHandler}>
                    <form className={styles.form}>
                        <h4>Please Login</h4>
                        <label htmlFor="username">username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                        />
                        <label htmlFor="password">password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            autoComplete="current-password"
                        />
                        <button onClick={(e) => handleSubmit(e)}>Log In</button>
                    </form>
                </Modal>
            )}
        </>
    );
};

export default SettingFileCard;

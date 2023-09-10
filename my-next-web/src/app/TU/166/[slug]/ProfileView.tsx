"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import liff from "@line/liff";
import { User, useUser } from "@/contexts/UserContext";
import { createUser } from "@/utils/firebase";
import Spinner from "@/components/Spinner";
import SkeletonLoading from "@/components/SkeletonLoading";

type ProfileviewProps = { liffId: string };

const Profileview: React.FC<ProfileviewProps> = ({ liffId }) => {
    const { logIn, user: getUser } = useUser();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initializeLiff = async () => {
            try {
                await liff.init({
                    liffId: liffId, // Use your own liffId
                    withLoginOnExternalBrowser: true, // Enable automatic login process
                });

                if (liff.isLoggedIn()) {
                    const [idToken, profile] = await Promise.all([
                        liff.getDecodedIDToken(),
                        liff.getProfile(),
                    ]);

                    const userLiff = {
                        id: profile.userId,
                        name: profile.displayName,
                        img: profile.pictureUrl,
                        email: idToken?.email ?? "",
                        status_msg: profile.statusMessage ?? "",
                        username: profile.displayName,
                    };

                    const a = await createUser(userLiff.name, userLiff);
                    if (a.user) logIn(a?.user as User);

                    // await sleep(200).then(() => {
                    //     if (orderParam) {
                    //         navigate(`/order/${orderParam}`);
                    //     } else {
                    //         navigate("/order");
                    //     }
                    // });
                    setLoading(false);
                } else {
                    liff.login();
                    setLoading(false);
                }
            } catch (error) {
                alert(`Error initializing LIFF:",${error}`);
                setLoading(false);
            }
        };

        initializeLiff();

        //
    }, []);

    return (
        <>
            {(loading || !getUser?.name) && (
                <div className={styles.profile__container__loading}></div>
            )}
            {!loading && (
                <div className={styles.profile__container}>
                    <img
                        className={styles.profile__img}
                        src={getUser?.img}
                        alt="profile_line"
                    />
                    <div className={styles.profile__name}>
                        <h1>สวัสดีคุณ {getUser?.username}</h1>
                        {!getUser?.role && <p> สมาชิกภายนอก</p>}
                    </div>
                </div>
            )}
        </>
    );
};

export default Profileview;

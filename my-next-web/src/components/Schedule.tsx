import React from "react";
import styles from "./Schedule.module.scss";
import { ThisSemSubjs } from "@/data/subjsData";

const Schedule = () => {
    const AllSubjs = ThisSemSubjs;

    return (
        <div className={styles.table}>
            <div className={styles.table__head}>
                <p className={styles.table__head__mor}>9.30 - 12.30</p>
                <p className={styles.table__head__aft}>13.30 - 16.30</p>
            </div>
            <div className={styles.table__col}>
                <p>MO</p>
                <p>TU</p>
                <p>WE</p>
                <p>TH</p>
                <p>FR</p>
            </div>
            <div className={styles.table__frame}>
                {AllSubjs.map((subj) => (
                    <div
                        key={subj.subj}
                        className={styles.sbj}
                        style={{
                            gridArea: subj.grid,
                            backgroundColor: subj.c,
                        }}
                    >
                        <p className={styles.sbj__id}>{subj.subj}</p>
                        <span className={styles.sbj__room}>{subj.room}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Schedule;

import React from "react";
import styles from "./page.module.scss";
import JsProjCard from "./JsProjCard";
import {
    HiAcademicCap,
    HiChevronLeft,
    HiOutlineCurrencyDollar,
    HiOutlineIdentification,
    HiOutlinePresentationChartLine,
} from "react-icons/hi2";
import Link from "next/link";

const JsProjectsPage = () => {
    return (
        <>
            <div className={styles.section__1}>
                <h4 className={styles.heading}>Javascript Projects</h4>
                <div className={styles.row}>
                    <JsProjCard
                        icon={<HiOutlineCurrencyDollar />}
                        name={"MK201 Price Calculation"}
                        desc={"คำนวณการตั้งราคาแบบต่างๆ"}
                    />
                    <JsProjCard
                        icon={<HiOutlinePresentationChartLine />}
                        name={"Break Even Analysis"}
                        desc={"คำนวณจุดคุ้มทุน"}
                    />
                    <JsProjCard
                        icon={<HiOutlineIdentification />}
                        name={"Name Numeric Calculation"}
                        desc={"ดูผลรวมเลขจากชื่อ-นามสกุลของคุณ"}
                    />
                </div>
            </div>
            <div className={styles.section__2}>
                <Link href={"./../"}>
                    <HiChevronLeft /> Back to Home
                </Link>
            </div>
        </>
    );
};

export default JsProjectsPage;

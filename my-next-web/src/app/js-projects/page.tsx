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
import SectionBackLink from "@/components/SectionBackLink";

const JsProjectsPage = () => {
    return (
        <>
            <SectionBackLink />
            <div className={styles.section__1}>
                <h4 className={styles.heading}>Javascript Projects</h4>
                <div className={styles.row}>
                    <JsProjCard
                        icon={<HiOutlineCurrencyDollar />}
                        name={"MK201 Price Calculation"}
                        desc={"คำนวณการตั้งราคาแบบต่างๆ"}
                        href={
                            "https://pannks.000webhostapp.com/project/mk201.html"
                        }
                    />
                    <JsProjCard
                        icon={<HiOutlinePresentationChartLine />}
                        name={"Break Even Analysis"}
                        desc={"คำนวณจุดคุ้มทุน"}
                        href={
                            "https://pannks.000webhostapp.com/project/breakeven.html"
                        }
                    />
                    <JsProjCard
                        icon={<HiOutlineIdentification />}
                        name={"Name Numeric Calculation"}
                        desc={"ดูผลรวมเลขจากชื่อ-นามสกุลของคุณ"}
                        href={
                            "https://pannks.000webhostapp.com/project/hello.html"
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default JsProjectsPage;

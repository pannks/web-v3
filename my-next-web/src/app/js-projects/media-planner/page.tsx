"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import TriangleCalculator from "./TriangleCalculator";
import CostRelatedCalculator from "./CostRelatedCalculator";
import SectionBackLink from "@/components/SectionBackLink";

type MediaPlannerPageProps = {};

const MediaPlannerPage: React.FC<MediaPlannerPageProps> = ({}) => {
    const [globalCost, setGlobalCost] = useState<number>(10000);

    return (
        <>
            <SectionBackLink />
            <div className={styles.mp_page}>
                <h1>Media Planner Calculator</h1>
                <br />
                <div className={styles.mp_page__card__main}>
                    <label>
                        Cost:
                        <input
                            type="number"
                            value={globalCost || ""}
                            onChange={(e) =>
                                setGlobalCost(Number(e.target.value))
                            }
                        />
                    </label>
                </div>
                <br />
                <section className={styles.mp_page__grid}>
                    <div className={styles.mp_page__card}>
                        <h3 className={styles.section_cal}>
                            Cost Per Miles (1k Impressions){" "}
                        </h3>
                        <CostRelatedCalculator
                            labelA="Impressions"
                            labelC="CPM"
                            globalCost={globalCost ?? 0}
                            computeA={(b, c) => b / (c / 1000)}
                            computeC={(a, b) => b / (a / 1000)}
                        />
                    </div>
                    <div className={styles.mp_page__card}>
                        <h3 className={styles.section_cal}>Cost Per Click </h3>
                        <CostRelatedCalculator
                            labelA="Clicks"
                            labelC="CPC"
                            globalCost={globalCost ?? 0}
                            computeA={(b, c) => b / c}
                            computeC={(a, b) => b / a}
                        />
                    </div>
                    <div className={styles.mp_page__card}>
                        <h3 className={styles.section_cal}>Cost Per Lead </h3>
                        <CostRelatedCalculator
                            labelA="Conversions"
                            labelC="CPR"
                            globalCost={globalCost ?? 0}
                            computeA={(b, c) => b / c}
                            computeC={(a, b) => b / a}
                        />
                    </div>
                    <div className={styles.mp_page__card}>
                        <h3 className={styles.section_cal}>
                            Reach and Frequency
                        </h3>
                        <TriangleCalculator
                            labelA="Impressions"
                            labelB="Reach"
                            labelC="Frequency"
                            computeA={(b, c) => b * c}
                            computeB={(a, c) => a / c}
                            computeC={(a, b) => a / b}
                        />
                    </div>
                    <div className={styles.mp_page__card}>
                        <h3 className={styles.section_cal}>
                            Conversion Rate (CVR)
                        </h3>
                        <TriangleCalculator
                            labelA="Conversions"
                            labelB="Clicks"
                            labelC="CVR (%)"
                            computeA={(b, c) => (c * b) / 100}
                            computeB={(a, c) => a / (c / 100)}
                            computeC={(a, b) => (a / b) * 100}
                        />
                    </div>
                    <div className={styles.mp_page__card}>
                        <h3 className={styles.section_cal}>
                            Click-Through Rate (CTR)
                        </h3>
                        <TriangleCalculator
                            labelA="Clicks"
                            labelB="Impressions"
                            labelC="CTR (%)"
                            computeA={(b, c) => (c * b) / 100}
                            computeB={(a, c) => a / (c / 100)}
                            computeC={(a, b) => (a / b) * 100}
                        />
                    </div>
                    <div className={styles.mp_page__card}>
                        <h3 className={styles.section_cal}>
                            Gross Rating Points (GRPs)
                        </h3>
                        <TriangleCalculator
                            labelA="Reach (%)"
                            labelB="Frequency"
                            labelC="GRPs"
                            computeA={(b, c) => c / b}
                            computeB={(a, c) => c / a}
                            computeC={(a, b) => a * b}
                        />
                    </div>
                </section>
            </div>
        </>
    );
};

export default MediaPlannerPage;

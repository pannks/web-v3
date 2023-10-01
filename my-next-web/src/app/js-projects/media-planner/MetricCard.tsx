import React from "react";
import styles from "./MetricCard.module.scss";
import CostRelatedCalculator from "./CostRelatedCalculator";
import TriangleCalculator from "./TriangleCalculator";
import { HiMiniDevicePhoneMobile, HiMiniHome, HiMiniTv } from "react-icons/hi2";

type MetricCardProps = {
    name: string;
    labelArr: string[];
    computeArr: { (a: number, b: number, c?: number): number }[];
    globalCost?: number;
    categoryArr: string[];
};

const MetricCard: React.FC<MetricCardProps> = ({
    name,
    labelArr,
    computeArr,
    globalCost = undefined,
    categoryArr,
}) => {
    const ctgrInfo = (ctgr: string) => {
        switch (ctgr) {
            case "digital":
                return { i: <HiMiniDevicePhoneMobile />, c: "#27cdff" };
            case "tv":
                return { i: <HiMiniTv />, c: "#60e72b" };
            case "ooh":
                return { i: <HiMiniHome />, c: "#d056e9" };
            default:
                return { i: <HiMiniHome />, c: "#27cdff" };
        }
    };

    if (globalCost) {
        return (
            <div className={styles.card}>
                <div className={styles.card__header}>
                    <h3
                        className={styles.card__header__txt}
                        style={{ color: ctgrInfo(categoryArr[0]).c }}
                    >
                        {name}
                    </h3>
                    <span className={styles.card__header__ico}>
                        {categoryArr.map((ctg) => {
                            return ctgrInfo(ctg).i;
                        })}
                    </span>
                </div>
                <CostRelatedCalculator
                    labelA={labelArr[0]}
                    labelC={labelArr[1]}
                    computeA={computeArr[0]}
                    computeC={computeArr[1]}
                    globalCost={globalCost}
                />
            </div>
        );
    } else {
        return (
            <div className={styles.card}>
                <div className={styles.card__header}>
                    <h3
                        className={styles.card__header__txt}
                        style={{ color: ctgrInfo(categoryArr[0]).c }}
                    >
                        {name}
                    </h3>
                    <span className={styles.card__header__ico}>
                        {categoryArr.map((ctg) => {
                            return ctgrInfo(ctg).i;
                        })}
                    </span>
                </div>
                <TriangleCalculator
                    labelA={labelArr[0]}
                    labelB={labelArr[1]}
                    labelC={labelArr[2]}
                    computeA={computeArr[0]}
                    computeB={computeArr[1]}
                    computeC={computeArr[2]}
                />
            </div>
        );
    }
};

export default MetricCard;

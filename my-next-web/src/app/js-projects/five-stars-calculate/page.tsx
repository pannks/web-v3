'use client';
import React, { useState } from 'react';
import styles from './page.module.scss';
import { HiStar } from 'react-icons/hi2';

const FiveStarsCalculatePage = () => {
    const [currStars, setCurrStars] = useState([0, 0, 0, 0, 0]);

    const getDecimal = (num: number, pos: number) => {
        return Math.round(num * 10 ** pos) / Math.pow(10, pos);
    };

    const totalStarValue = [...currStars]
        .reverse()
        .reduce((a, b, i) => a + b * (i + 1), 0);

    const displayAddStar = (rate: number, toBe: number) => {
        const x = getDecimal(findAddStar(rate, toBe), 2);
        if (avgTotalStar > toBe - 0.05) return '✅';
        if (x < 0) return '🚫';
        else return x;
    };

    const totalVote = currStars.reduce((a, b, i) => a + b, 0);
    const avgTotalStar = totalStarValue / totalVote;
    const findAddStar = (rate: number, toBe: number) => {
        const y = toBe - 0.05;
        return (y * totalVote - totalStarValue) / (rate - y);
    };

    function genDisplayArr(a: number) {
        let start = Math.floor(a * 10) / 10;
        let result = [];
        let current = start;

        while (current < Math.ceil(a)) {
            result.push(parseFloat(current.toFixed(1)));
            current += 0.1;
        }

        if (result[result.length - 1] !== Math.ceil(a)) {
            result.push(Math.ceil(a));
        }

        for (let num = Math.ceil(a) + 1; num <= 5; num++) {
            result.push(num);
        }

        return result.reverse();
    }

    const widthGraph = (index: number) =>
        `${(currStars[index] / totalVote) * 100}%`;

    return (
        <div className={styles.page}>
            <section>
                <h1>Five Stars Calculation</h1>
                <p>การคำนวณค่าเฉลี่ยดาว</p>
                <h3>ปัจจุบัน</h3>
                <div className={styles.score_card}>
                    <div className={styles.score_card_sum}>
                        <h4> {getDecimal(avgTotalStar, 4)} </h4>
                        <p> {totalVote} votes </p>
                        <span>(µN : {totalStarValue})</span>
                    </div>
                    <div>
                        {[5, 4, 3, 2, 1].map((star, i) => (
                            <div key={star} className={styles.flex_stars}>
                                <span>
                                    {[...Array(star).keys()].map((s) => (
                                        <HiStar key={s} />
                                    ))}
                                </span>
                                <input
                                    key={(23 * i + star).toString()}
                                    type="number"
                                    value={currStars[i]}
                                    onChange={(e) =>
                                        setCurrStars([
                                            ...currStars.slice(0, i),
                                            parseInt(e.target.value),
                                            ...currStars.slice(i + 1),
                                        ])
                                    }
                                />
                                <span className={styles.weight}>
                                    (w = {currStars[i] * star})
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.score_card_graph}>
                        <div
                            className={styles.progress}
                            style={{ width: widthGraph(0) }}
                        />
                        <div
                            className={styles.progress}
                            style={{ width: widthGraph(1) }}
                        />
                        <div
                            className={styles.progress}
                            style={{ width: widthGraph(2) }}
                        />
                        <div
                            className={styles.progress}
                            style={{ width: widthGraph(3) }}
                        />
                        <div
                            className={styles.progress}
                            style={{ width: widthGraph(4) }}
                        />
                    </div>
                </div>
            </section>
            <section>
                <h3>ดาวที่ต้องการ</h3>
                <table>
                    <thead>
                        <tr>
                            <th>ต้องการ</th>
                            <th>ต้องได้ 5 อีก </th>
                            <th>ต้องได้ 4 อีก </th>
                            <th>ต้องได้ 3 อีก </th>
                            <th>ต้องได้ 2 อีก </th>
                            <th>ต้องได้ 1 อีก </th>
                        </tr>
                    </thead>
                    <tbody>
                        {genDisplayArr(avgTotalStar).map((tobe, i, arr) => (
                            <tr key={tobe}>
                                <td>
                                    <HiStar /> {tobe}
                                    <span className={styles.tobe}>
                                        ({getDecimal(tobe - 0.05, 2)} - {tobe})
                                    </span>
                                </td>
                                {[5, 4, 3, 2, 1].map((rate) => (
                                    <td key={rate * 13 * i}>
                                        {displayAddStar(rate, tobe)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default FiveStarsCalculatePage;

'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { LottoRestype } from './response';

const LottoPage = () => {
    const [data, setData] = useState<undefined | LottoRestype>(undefined);
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    const lottoData = data?.response?.data;

    const checkLotto = (number: any) => {
        if (!lottoData) return;
        if (number.length !== 6) return;

        const checkNumberInData = (rank: string) => {
            return !!lottoData[rank]?.number?.some(
                (num) =>
                    num.value === number ||
                    num.value === number.slice(-2) ||
                    num.value === number.slice(-3)
            );
        };

        const winLottoText = '🎉 ยินดีด้วย คุณถูกรางวัล';

        if (checkNumberInData('first')) {
            return {
                result: winLottoText + 'ที่ 1',
                reward: lottoData.first.price,
                isWin: true,
            };
        } else if (checkNumberInData('second')) {
            return {
                result: winLottoText + 'ที่ 2',
                reward: lottoData.second.price,
                isWin: true,
            };
        } else if (checkNumberInData('third')) {
            return {
                result: winLottoText + 'ที่ 3',
                reward: lottoData.third.price,
                isWin: true,
            };
        } else if (checkNumberInData('fourth')) {
            return {
                result: winLottoText + 'ที่ 4',
                reward: lottoData.fourth.price,
                isWin: true,
            };
        } else if (checkNumberInData('fifth')) {
            return {
                result: winLottoText + 'ที่ 5',
                reward: lottoData.fifth.price,
                isWin: true,
            };
        } else if (checkNumberInData('last2')) {
            return {
                result: winLottoText + 'เลขท้าย 2 ตัว',
                reward: lottoData.last2.price,
                isWin: true,
            };
        } else if (checkNumberInData('last3f')) {
            return {
                result: winLottoText + 'เลขหน้า 3 ตัว',
                reward: lottoData.last3f.price,
                isWin: true,
            };
        } else if (checkNumberInData('last3b')) {
            return {
                result: winLottoText + 'เลขท้าย 3 ตัว',
                reward: lottoData.last3b.price,
                isWin: true,
            };
        } else if (checkNumberInData('near1')) {
            return {
                result: winLottoText + 'ใกล้เคียงรางวัลที่ 1',
                reward: lottoData.near1.price,
                isWin: true,
            };
        } else {
            return {
                result: 'คุณไม่ถูกรางวัล 🥲',
                reward: '0.00',
                isWin: false,
            };
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_MIDDLEWARE_URL}`,
                {
                    cache: 'no-store',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_MIDDLEWARE_TOKEN}`,
                    },
                    // mode: 'no-cors',
                    body: JSON.stringify({
                        method: 'POST',
                        url: `${process.env.NEXT_PUBLIC_LOTTERY_API_URL}`,
                    }),
                }
            );
            const json = await res.json();
            setCount((prev) => prev + 1);
            console.log(json);
            setData(json);
        };

        if (count === 0) {
            fetchData();
        }
    }, []);
    return (
        <div className={styles.page}>
            <h1>ผลการออกรางวัลสลากกินแบ่งประจำวันที่ {data?.response?.date}</h1>
            <div className={styles.input_check}>
                <input
                    type="text"
                    placeholder="000000"
                    pattern="[0-9]{6}"
                    required
                    onChange={(e) => setInput(e.target.value)}
                    style={{
                        outline: `3px solid ${
                            !!checkLotto(input)?.isWin
                                ? 'var(--c-chip-10)'
                                : 'var(--c-danger)'
                        }`,
                    }}
                />
            </div>
            <div className={styles.check_result}>
                <p className={styles.check_result_result}>
                    {checkLotto(input)?.result}
                </p>
                <p className={styles.check_result_price}>
                    เงินรางวัล {checkLotto(input)?.reward} บาท
                </p>
            </div>
            <div className={styles.layout}>
                <div className={styles.row + ' ' + styles.first}>
                    <h2>รางวัลที่ 1</h2>
                    <span className={styles.wrap}>
                        {lottoData?.first?.number?.map((num) => (
                            <p key={num.toString()}>{num.value.toString()}</p>
                        ))}
                    </span>
                </div>
                <div className={styles.row + ' ' + styles.near_one}>
                    <h2>รางวัลที่ 1 ข้างเคียง</h2>
                    <span className={styles.wrap}>
                        {lottoData?.near1?.number?.map((num) => (
                            <p key={num.toString()}>{num.value.toString()}</p>
                        ))}
                    </span>
                </div>
                <div className={styles.row + ' ' + styles.last_two}>
                    <h2>รางวัลเลขท้าย 2 ตัว</h2>
                    <span className={styles.wrap}>
                        {lottoData?.last2?.number?.map((num) => (
                            <p key={num.toString()}>{num.value.toString()}</p>
                        ))}
                    </span>
                </div>

                <div className={styles.row + ' ' + styles.second}>
                    <h2>รางวัลที่ 2</h2>
                    <span className={styles.wrap}>
                        {lottoData?.second?.number?.map((num) => (
                            <p key={num.toString()}>{num.value.toString()}</p>
                        ))}
                    </span>
                </div>

                <div className={styles.row + ' ' + styles.third}>
                    <h2>รางวัลที่ 3</h2>
                    <span className={styles.wrap}>
                        {lottoData?.third?.number?.map((num) => (
                            <p key={num.toString()}>{num.value.toString()}</p>
                        ))}
                    </span>
                </div>
                <div className={styles.row + ' ' + styles.first_three}>
                    <h2>รางวัลเลขหน้า 3 ตัว</h2>
                    <span className={styles.wrap}>
                        {lottoData?.last3f?.number?.map((num) => (
                            <p key={num.toString()}>{num.value.toString()}</p>
                        ))}
                    </span>
                </div>
                <div className={styles.row + ' ' + styles.last_three}>
                    <h2>รางวัลเลขท้าย 3 ตัว</h2>
                    <span className={styles.wrap}>
                        {lottoData?.last3b?.number?.map((num) => (
                            <p key={num.toString()}>{num.value.toString()}</p>
                        ))}
                    </span>
                </div>
                <div className={styles.row + ' ' + styles.fourth}>
                    <h2>รางวัลที่ 4</h2>
                    <span className={styles.wrap}>
                        {lottoData?.fourth?.number?.map((num) => (
                            <p key={num.toString()}>{num.value.toString()}</p>
                        ))}
                    </span>
                </div>
                <div className={styles.row + ' ' + styles.fifth}>
                    <h2>รางวัลที่ 5</h2>
                    <span className={styles.wrap}>
                        {lottoData?.fifth?.number?.map((num) => (
                            <p key={num.toString()}>{num.value.toString()}</p>
                        ))}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LottoPage;

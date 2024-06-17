'use client';
import SectionBackLink from '@/components/SectionBackLink';
import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { calcHoro, textToNum, TransToHoroDate } from './name_data';
import CustomDatePicker from '@/components/CustomDatePicker';
import { formatLocalDate } from '@/utils/transform';
import { spawn } from 'child_process';

const NamingCalculatorPage = () => {
    const [birthDate, setBirthDate] = useState<Date | null>(null);

    const [sumN, setSumN] = useState<number>(0);
    const [sumFn, setSumFn] = useState<number>(0);
    const [sumLn, setSumLn] = useState<number>(0);
    const [calcArrN, setCalcArrN] = useState<string[]>([]);
    const [calcArrFn, setCalcArrFn] = useState<string[]>([]);
    const [calcArrLn, setCalcArrLn] = useState<string[]>([]);

    const [fieldN, setFieldN] = useState<string>('');
    const [fieldFn, setFieldFn] = useState<string>('');
    const [fieldLn, setFieldLn] = useState<string>('');

    const calcHoroFunc = (
        field: string,
        birthDate: Date | null,
        callback: (arr: string[]) => void
    ) => {
        if (birthDate) {
            const dayId = TransToHoroDate(birthDate).dayId;
            const arr = calcHoro(field, dayId);
            callback(arr);
        }
    };

    useEffect(() => {
        textToNum(fieldN, (num) => setSumN(num));
        calcHoroFunc(fieldN, birthDate, (arr) => setCalcArrN(arr));
    }, [fieldN, birthDate]);

    useEffect(() => {
        textToNum(fieldFn, (num) => setSumFn(num));
        calcHoroFunc(fieldFn, birthDate, (arr) => setCalcArrFn(arr));
    }, [fieldFn, birthDate]);

    useEffect(() => {
        textToNum(fieldLn, (num) => setSumLn(num));
        calcHoroFunc(fieldLn, birthDate, (arr) => setCalcArrLn(arr));
    }, [fieldLn, birthDate]);

    return (
        <>
            {/* <SectionBackLink /> */}
            <div className={styles.container}>
                <div className={styles.form}>
                    <h2>คำนวณชื่อ (Naming Calculator)</h2>
                    <div className={styles.row__date}>
                        <label>วันที่ / เดือน / ปี</label>
                        <div className={styles.div_1}>
                            <CustomDatePicker
                                onDateChange={(date) => setBirthDate(date)}
                            />
                            <p>({birthDate && formatLocalDate(birthDate)})</p>
                        </div>
                        {/* <span>{birthDate?.getDay()}</span> */}
                        <div className={styles.div_2}>
                            <p> ถือว่าคุณเกิดวัน</p>
                            <span>
                                {birthDate &&
                                    TransToHoroDate(birthDate).day +
                                        '  ' +
                                        TransToHoroDate(birthDate).date}
                            </span>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <label>ชื่อเล่น/ชื่อบริษัท/ชื่อเรียก</label>
                        <input
                            type="text"
                            value={fieldN}
                            onChange={(e) => setFieldN(e.target.value)}
                        />
                        <span>{sumN}</span>
                        <button>+ Add</button>
                        <p>ถอดทักษา: </p>
                        <p className={styles.val_sum}>
                            {calcArrN
                                .filter((v) => v !== ' ')
                                .map((v, i) => (
                                    <span className={styles.val} key={i}>
                                        {v}
                                    </span>
                                ))}
                        </p>
                    </div>
                    <div className={styles.row}>
                        <label>ชื่อจริง</label>
                        <input
                            type="text"
                            value={fieldFn}
                            onChange={(e) => setFieldFn(e.target.value)}
                        />
                        <span>{sumFn}</span>
                        <span></span>
                        <p>ถอดทักษา: </p>
                        <p className={styles.val_sum}>
                            {calcArrFn
                                .filter((v) => v !== ' ')
                                .map((v, i) => (
                                    <span className={styles.val} key={i}>
                                        {v}
                                    </span>
                                ))}
                        </p>
                    </div>
                    <div className={styles.row}>
                        <label>นามสกุล</label>
                        <input
                            type="text"
                            value={fieldLn}
                            onChange={(e) => setFieldLn(e.target.value)}
                        />
                        <span>{sumLn}</span>
                        <span></span>
                        <p>ถอดทักษา: </p>
                        <p className={styles.val_sum}>
                            {calcArrLn
                                .filter((v) => v !== ' ')
                                .map((v, i) => (
                                    <span className={styles.val} key={i}>
                                        {v}
                                    </span>
                                ))}
                        </p>
                    </div>
                    <div className={styles.row}>
                        <p>Total:</p>
                        <span></span>
                        <span>{sumN + sumFn + sumLn}</span>
                        <button>+ Add</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NamingCalculatorPage;

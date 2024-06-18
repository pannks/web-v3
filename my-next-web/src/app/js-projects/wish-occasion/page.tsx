'use client';
import CopyToClipboardButton from '@/hooks/useCopyToClipboard';

import React, { useState } from 'react';
import styles from './page.module.scss';
import { wishes } from './wishes';
import { PiSmileySadLight } from 'react-icons/pi';
import Script from 'next/script';

const WishOccasionPage = () => {
    const [name, setName] = useState<string>('');
    const [filterType, setFilterType] = useState<string[]>([]);
    const date = new Date();
    const year = date.getFullYear() + 1;

    const filterWishes = (type: string) => {
        if (filterType.includes(type)) {
            setFilterType(filterType.filter((x) => x !== type));
        } else {
            setFilterType([...filterType, type]);
        }
    };

    const renderFilter = (
        w: { id: number; note: string; type: string[]; title?: string },
        filterType: string[]
    ) => {
        if (filterType.length === 0) return true;

        return filterType.every((filter) => w.type.includes(filter));
    };

    const wishesArr = wishes.reduce((acc, curr) => {
        const newWish = {
            ...curr,
            note: curr.note
                .replace('%NAME%', name)
                .replace('%YEAR%', year.toString()),
        };
        acc.push(newWish);
        return acc;
    }, [] as { id: number; note: string; type: string[]; title?: string }[]);

    function rand(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <div className={styles.page}>
            <h1> 🥹🥰 Wish You Happy 🎉🎉</h1>
            <div className={styles.subhead}>
                <span>
                    ชื่อผู้รับ :
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </span>

                <div>
                    <button
                        onClick={() => filterWishes('📅')}
                        className={`${
                            filterType.includes('📅') && styles.active
                        }`}
                    >
                        📅{' '}
                    </button>
                    <button
                        onClick={() => filterWishes('🌲')}
                        className={`${
                            filterType.includes('🌲') && styles.active
                        }`}
                    >
                        🌲{' '}
                    </button>
                    <button
                        onClick={() => filterWishes('🍰')}
                        className={`${
                            filterType.includes('🍰') && styles.active
                        }`}
                    >
                        🍰{' '}
                    </button>
                    <button
                        onClick={() => filterWishes('🏆')}
                        className={`${
                            filterType.includes('🏆') && styles.active
                        }`}
                    >
                        🏆{' '}
                    </button>
                    <button
                        onClick={() => filterWishes('🪣')}
                        className={`${
                            filterType.includes('🪣') && styles.active
                        }`}
                    >
                        🪣{' '}
                    </button>
                    <button
                        onClick={() => filterWishes('🙏')}
                        className={`${
                            filterType.includes('🙏') && styles.active
                        }`}
                    >
                        🙏{' '}
                    </button>
                </div>
            </div>
            <div className={styles.grid}>
                {wishesArr
                    .filter((w) => renderFilter(w, filterType))
                    .map((w) => {
                        const ran = rand(1, 6);
                        return (
                            <div
                                className={styles.card}
                                style={{
                                    outlineColor: `var(--code-hue-${ran})`,
                                }}
                                key={w.id}
                            >
                                {w?.title && <h5>{w.title}</h5>}
                                <p>{w.note}</p>
                                <CopyToClipboardButton content={w.note} />
                            </div>
                        );
                    })}
                {wishesArr.filter((w) => renderFilter(w, filterType)).length ===
                    0 && (
                    <div className={styles.not_found}>
                        <PiSmileySadLight />
                        😭 404 🥲 ตอนนี้ยังไม่พบสิ่งที่คุณหา
                        แต่ในวันข้างหน้าอาจมี... 🥹
                    </div>
                )}
            </div>
            <div
                className="line-it-button"
                data-lang="en"
                data-type="share-a"
                data-env="REAL"
                data-url="https://pann-kaansadich.web.app/js-projects/wish-occasion/"
                data-color="default"
                data-size="small"
                data-count="true"
                data-ver="3"
            />
        </div>
    );
};

export default WishOccasionPage;

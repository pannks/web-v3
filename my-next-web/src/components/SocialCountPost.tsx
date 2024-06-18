'use client';
import React, { useState } from 'react';
import styles from './SocialCountPost.module.scss';
import { useStats } from '@/contexts/SocialCountContext';
import useLocalStorage from '@/hooks/useLocalStorage';
import SkeletonLoading from './SkeletonLoading';
import { updateBlogStatByUrl } from '@/utils/firebase';

type SocialCountPostProps = {
    slug: string;
};

type UserEngage = {
    slug: string;
    engagement: {
        like: boolean;
        haha: boolean;
        love: boolean;
        sad: boolean;
        wow: boolean;
        poop: boolean;
    };
};

const SocialCountPost: React.FC<SocialCountPostProps> = ({ slug }) => {
    const { stats, loading, revalidate } = useStats();
    const initUserEngage = [
        {
            slug: slug,
            engagement: {
                like: false,
                haha: false,
                love: false,
                sad: false,
                wow: false,
                poop: false,
            },
        },
    ] as UserEngage[];
    const [userEngage, setUserEngage] = useLocalStorage<UserEngage[]>(
        'userEngage',
        initUserEngage
    );

    // console.log(59, userEngage);
    const readSocialStats = stats?.find((stat) => stat.url === slug) ?? {
        url: slug,
        likeCount: 0,
        hahaCount: 0,
        loveCount: 0,
        sadCount: 0,
        wowCount: 0,
        poopCount: 0,
    };
    const currUserEngage: UserEngage =
        userEngage?.find((e) => e.slug === slug) ?? initUserEngage[0];
    const engages = currUserEngage?.engagement;

    // console.log(65, currUserEngage);

    if (loading) {
        return (
            <div className={styles.container + ' ' + styles.container_loading}>
                Loading...
            </div>
        );
    }

    if (!readSocialStats) {
        return (
            <div className={styles.container + ' ' + styles.container_error}>
                ❌ Something went wrong! : Social Stats Not Found
            </div>
        );
    }

    const { likeCount, hahaCount, loveCount, sadCount, wowCount, poopCount } =
        readSocialStats;

    const updateStat = async (
        metric: keyof UserEngage['engagement'],
        turnTo: boolean
    ) => {
        setUserEngage((prevUserEngage) => {
            const index = prevUserEngage.findIndex((e) => e.slug === slug);
            if (index !== -1) {
                // Update existing entry
                const updatedUserEngage = [...prevUserEngage];
                updatedUserEngage[index].engagement[metric] = turnTo;
                return updatedUserEngage;
            } else {
                // Add new entry if slug not found
                return [
                    ...prevUserEngage,
                    {
                        slug: slug,
                        engagement: {
                            ...initUserEngage[0].engagement,
                            [metric]: turnTo,
                        },
                    },
                ];
            }
        });
        await updateBlogStatByUrl(slug, { [metric + 'Count']: turnTo });
        revalidate();
    };
    return (
        <div className={styles.container}>
            <button
                className={`${engages.like && styles.active}`}
                onClick={() => updateStat('like', !engages.like)}
            >
                👍 {likeCount} <span className={styles.popup}>Like</span>
            </button>
            <button
                className={`${engages.haha && styles.active}`}
                onClick={() => updateStat('haha', !engages.haha)}
            >
                😆 {hahaCount} <span className={styles.popup}>Haha</span>
            </button>
            <button
                className={`${engages.love && styles.active}`}
                onClick={() => updateStat('love', !engages.love)}
            >
                💗 {loveCount} <span className={styles.popup}>Love</span>
            </button>
            <button
                className={`${engages.sad && styles.active}`}
                onClick={() => updateStat('sad', !engages.sad)}
            >
                😭 {sadCount} <span className={styles.popup}>Sad</span>
            </button>
            <button
                className={`${engages.wow && styles.active}`}
                onClick={() => updateStat('wow', !engages.wow)}
            >
                😲 {wowCount} <span className={styles.popup}>Wow</span>
            </button>
            <button
                className={`${engages.poop && styles.active}`}
                onClick={() => updateStat('poop', !engages.poop)}
            >
                💩 {poopCount} <span className={styles.popup}>Poop</span>
            </button>
        </div>
    );
};

export default SocialCountPost;

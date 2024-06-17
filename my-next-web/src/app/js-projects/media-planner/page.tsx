'use client';
import React, { useState } from 'react';
import styles from './page.module.scss';
import SectionBackLink from '@/components/SectionBackLink';
import MetricCard from './MetricCard';
import { metrics } from './metricData';

type MediaPlannerPageProps = {};

const MediaPlannerPage: React.FC<MediaPlannerPageProps> = ({}) => {
  const [globalCost, setGlobalCost] = useState<number>(10000);
  const [currentTab, setCurrentTab] = useState('all');

  return (
    <>
      <SectionBackLink />
      <div className={styles.mp_page}>
        <h1>Media Planner Calculator</h1>
        <br />
        <div className={styles.mp_page__card}>
          <label>
            Cost:
            <input
              type="number"
              value={globalCost || ''}
              onChange={(e) => setGlobalCost(Number(e.target.value))}
            />
          </label>
        </div>
        <br />
        <div className={styles.mp_page__tabs}>
          <button
            className={`${
              currentTab === 'all' && styles.mp_page__tabs__active
            }`}
            onClick={() => setCurrentTab('all')}
          >
            All
          </button>
          <button
            className={`${
              currentTab === 'digital' && styles.mp_page__tabs__active
            }`}
            onClick={() => setCurrentTab('digital')}
          >
            Digital
          </button>
          <button
            className={`${currentTab === 'tv' && styles.mp_page__tabs__active}`}
            onClick={() => setCurrentTab('tv')}
          >
            TV
          </button>
          <button
            className={`${
              currentTab === 'ooh' && styles.mp_page__tabs__active
            }`}
            onClick={() => setCurrentTab('ooh')}
          >
            Out Of Home
          </button>
        </div>
        <section className={styles.mp_page__grid}>
          {metrics
            .filter((metric) => {
              if (currentTab === 'all') return true;
              return metric.category.includes(currentTab);
            })
            .map((metric) => (
              <MetricCard
                key={metric.name}
                name={metric.name}
                labelArr={metric.labelArr}
                computeArr={metric.computeArr}
                globalCost={metric.use_cost ? globalCost : undefined}
                categoryArr={metric.category}
              />
            ))}
        </section>
      </div>
    </>
  );
};

export default MediaPlannerPage;

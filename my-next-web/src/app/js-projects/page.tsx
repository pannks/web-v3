import React from 'react';
import styles from './page.module.scss';
import JsProjCard from './JsProjCard';
import {
    HiAcademicCap,
    HiChevronLeft,
    HiOutlineCake,
    HiOutlineCurrencyDollar,
    HiOutlineIdentification,
    HiOutlinePresentationChartLine,
    HiOutlineStar,
    HiOutlineTv,
} from 'react-icons/hi2';
import Link from 'next/link';
import SectionBackLink from '@/components/SectionBackLink';

const JsProjectsPage = () => {
    return (
        <>
            <SectionBackLink />
            <div className={styles.section__1}>
                <h4 className={styles.heading}>Javascript Projects</h4>
                <div className={styles.row}>
                    <JsProjCard
                        icon={<HiOutlineTv />}
                        name={'Media Planner Calculator'}
                        desc={'คำนวณค่าที่เกี่ยวข้องกับการวางแผนสื่อ'}
                        href={'./media-planner/'}
                    />
                    <JsProjCard
                        icon={<HiOutlineCurrencyDollar />}
                        name={'MK201 Price Calculation'}
                        desc={'คำนวณการตั้งราคาแบบต่างๆ'}
                        href={
                            'https://pannks.000webhostapp.com/project/mk201.html'
                        }
                    />
                    <JsProjCard
                        icon={<HiOutlinePresentationChartLine />}
                        name={'Break Even Analysis'}
                        desc={'คำนวณจุดคุ้มทุน'}
                        href={'/js-projects/break-even/'}
                    />
                    <JsProjCard
                        icon={<HiOutlineIdentification />}
                        name={'Name Numeric Calculation'}
                        desc={'ดูผลรวมเลขจากชื่อ-นามสกุลของคุณ'}
                        href={'/js-projects/naming-calculate/'}
                    />
                    <JsProjCard
                        icon={<HiOutlineStar />}
                        name={'Five Stars Calculation'}
                        desc={'คำนวณค่าเฉลี่ยและคาดการณ์ดาวสำหรับผู้ประกอบการ'}
                        href={'/js-projects/five-stars-calculate/'}
                    />
                    <JsProjCard
                        icon={<HiOutlineCake />}
                        name={'Wish a Clipboard'}
                        desc={
                            'คำอวยพรที่เหมาะกับแต่ละเทศกาลเตรียมไว้ให้คุณได้คัดลอกไปใช้'
                        }
                        href={'/js-projects/wish-occasion/'}
                    />
                </div>
            </div>
        </>
    );
};

export default JsProjectsPage;

import styles from "./page.module.scss";
import { Metadata } from "next";
import { ThisSemSubjs } from "@/data/subjsData";
import SubjPageView from "./SubjPageView";

type SbjViewPageProps = {
    params: {
        slug: string;
    };
};

const SbjViewPage: React.FC<SbjViewPageProps> = ({ params }) => {
    const subj = ThisSemSubjs.find((sbj) => sbj.subj === params.slug);

    return (
        <>
            <div className={styles.page}>
                <h1 className={styles.page__title}>{subj?.subj}</h1>
                <h2 className={styles.page__desc}>{subj?.name}</h2>
                <SubjPageView slug={params.slug} />
            </div>
        </>
    );
};

export async function generateMetadata({
    params,
}: SbjViewPageProps): Promise<Metadata> {
    const subj = ThisSemSubjs.find((sbj) => sbj.subj === params.slug);

    return {
        title: `${subj?.subj} | PannKs`,
        description: subj?.name,
    };
}

export async function generateStaticParams() {
    const subjs = ThisSemSubjs;

    return subjs.map((sbj) => ({
        slug: sbj.subj,
    }));
}

export default SbjViewPage;

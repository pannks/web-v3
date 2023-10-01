import styles from "./page.module.scss";
import { Metadata } from "next";
import { ThisSemSubjs } from "@/data/subjsData";
import SubjPageView from "./SubjPageView";
import Profileview from "./ProfileView";
import { HiAcademicCap, HiMiniReceiptPercent } from "react-icons/hi2";

type SbjViewPageProps = {
    params: {
        slug: string;
    };
};

const SbjViewPage: React.FC<SbjViewPageProps> = ({ params }) => {
    const subj = ThisSemSubjs.find((sbj) => sbj.subj === params.slug);

    return (
        <>
            <Profileview liffId={subj?.liffId ?? ""} />{" "}
            <div className={styles.page}>
                <SubjPageView
                    slug={params.slug}
                    accessRoles={subj?.accessRoles}
                />
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

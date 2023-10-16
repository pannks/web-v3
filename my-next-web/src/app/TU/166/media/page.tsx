import { Metadata } from "next";
import PageView from "./PageView";

type MediaPlanPageProps = {};

const MediaPlanPage: React.FC<MediaPlanPageProps> = ({}) => {
    return <PageView />;
};

export const metadata: Metadata = {
    title: "รวมไฟล์ 463 จะเยอะไปไหน🤯",
    description:
        "เพื่อผองเพื่อนพวกพ้องและน้องพี่ ต้องเลื่อนไฟล์เปิดทียากไฉน จบปัญหาทุกข์ยากเหล่านี้ไป พบไฟล์ไวเพราะรวมไว้ที่ Pann's Website",
    themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "#161b1f" },
        { media: "(prefers-color-scheme: light)", color: "#f0c63f" },
    ],
};

export default MediaPlanPage;

import SocialShare from "@/components/SocialShare";
import { SocialCountProvider } from "@/contexts/SocialCountContext";

export default function BlogLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <SocialCountProvider>{children}</SocialCountProvider>
        </>
    );
}

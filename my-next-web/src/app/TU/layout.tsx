import SectionBackLink from "@/components/SectionBackLink";
import { FilesProvider } from "@/contexts/FilesContext";

export default function TULayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <FilesProvider>
                <SectionBackLink />
                {children}
            </FilesProvider>
        </>
    );
}

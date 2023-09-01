import SectionBackLink from "@/components/SectionBackLink";
import { FilesProvider } from "@/contexts/FilesContext";
import { TasksProvider } from "@/contexts/TasksContext";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "PannKs | TU Files",
};

export default function TULayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <FilesProvider>
                <TasksProvider>{children}</TasksProvider>
            </FilesProvider>
        </>
    );
}

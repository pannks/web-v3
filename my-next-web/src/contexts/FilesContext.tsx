"use client";

import { getAllDocuments } from "@/utils/firebase";
import { DocumentData } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

type FilesContextValue = {
    archives: DocumentData[] | undefined;
    files: DocumentData[] | undefined;
    loading: boolean;
    revalidate: () => void;
};

type FilesProviderProps = {
    children: React.ReactNode;
};

const FilesContext = createContext<FilesContextValue | undefined>(undefined);

const FilesProvider: React.FC<FilesProviderProps> = ({ children }) => {
    const [archives, setArchives] = useState<DocumentData[] | undefined>();
    const [files, setFiles] = useState<DocumentData[] | undefined>();

    const [loading, setLoading] = useState(false);

    const fetchFiles = async () => {
        setLoading(true);
        try {
            const [archives, files] = await Promise.all([
                getAllDocuments("archives"),
                getAllDocuments("files"),
            ]);
            setArchives(archives);
            setFiles(files);
        } catch (e) {
            console.log("Error Occurs:", e);
        } finally {
            setLoading(false);
        }
    };

    const revalidate = () => {
        fetchFiles();
    };

    useEffect(() => {
        if (!archives || !files) {
            fetchFiles();
        }
    }, []);

    return (
        <FilesContext.Provider value={{ archives, files, loading, revalidate }}>
            {children}
        </FilesContext.Provider>
    );
};

function useFiles() {
    const context = useContext(FilesContext);
    if (context === undefined) {
        throw new Error("use FilesContext outside provider");
    }
    return context;
}

export { FilesProvider, useFiles };

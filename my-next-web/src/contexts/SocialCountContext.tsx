'use client';

import { getAllDocuments } from '@/utils/firebase';
import { DocumentData } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';

type SocialCountContextValue = {
    stats: DocumentData[] | undefined;
    loading: boolean;
    revalidate: () => void;
};

type SocialCountProviderProps = {
    children: React.ReactNode;
};

const SocialCountContext = createContext<SocialCountContextValue | undefined>(
    undefined
);

const SocialCountProvider: React.FC<SocialCountProviderProps> = ({
    children,
}) => {
    const [stats, setStats] = useState<DocumentData[] | undefined>();
    const [loading, setLoading] = useState(false);

    const fetchFiles = async () => {
        setLoading(true);
        try {
            const tasks: DocumentData[] = await getAllDocuments('blogs_stat');
            setStats(tasks);
        } catch (e) {
            console.log('Error Occurs:', e);
        } finally {
            setLoading(false);
        }
    };

    const revalidate = () => {
        fetchFiles();
    };

    useEffect(() => {
        if (!stats) {
            fetchFiles();
        }
        // console.log(stats);
    }, []);

    return (
        <SocialCountContext.Provider value={{ stats, loading, revalidate }}>
            {children}
        </SocialCountContext.Provider>
    );
};

function useStats() {
    const context = useContext(SocialCountContext);
    if (context === undefined) {
        throw new Error('use SocialCountContext outside provider');
    }
    return context;
}

export { SocialCountProvider, useStats };

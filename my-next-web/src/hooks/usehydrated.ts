import { useState, useEffect } from 'react';

export const useHydrated = () => {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    return hydrated;
};

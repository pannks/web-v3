'use client';

import { createContext, useContext, useEffect } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';

type DarkModeContextValue = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
};

type DarkModeProviderProps = {
    children: React.ReactNode;
};

const DarkModeContext = createContext<DarkModeContextValue | undefined>(
    undefined
);

const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>(
        'isDarkMode',
        false
    );

    const toggleDarkMode = () => {
        setIsDarkMode((prevIsDarkMode: boolean) => !prevIsDarkMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark-mode');
            document.documentElement.classList.remove('light-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
            document.documentElement.classList.add('light-mode');
        }
    }, [isDarkMode]);

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

function useDarkMode() {
    const context = useContext(DarkModeContext);
    if (context === undefined) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
}

export { DarkModeProvider, useDarkMode };

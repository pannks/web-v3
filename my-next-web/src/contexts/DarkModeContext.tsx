"use client";

import { createContext, useContext, useEffect, useState } from "react";

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
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark-mode");
            document.documentElement.classList.remove("light-mode");
        } else {
            document.documentElement.classList.remove("dark-mode");
            document.documentElement.classList.add("light-mode");
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
        throw new Error("use DarkModeContext outside provider");
    }
    return context;
}

export { DarkModeProvider, useDarkMode };

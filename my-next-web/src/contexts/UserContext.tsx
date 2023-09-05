"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type User = {
    username: string;
    role: string;
    id?: string;
    name?: string;
    img?: string;
    status_msg?: string;
};

type UserContextValue = {
    user: User | undefined;
    loading: boolean;
    logIn: (user: User) => void;
    logOut: () => void;
};

type UserProviderProps = {
    children: React.ReactNode;
};

const UserContext = createContext<UserContextValue | undefined>(undefined);

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    const logOut = () => {
        setUser(undefined);
        localStorage.removeItem("user");
    };

    const logIn = (user: User | undefined) => {
        if (!user) {
            return;
        }
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    };

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false); // Set loading to false after user data is loaded
    }, []);

    return (
        <UserContext.Provider value={{ user, loading, logIn, logOut }}>
            {children}
        </UserContext.Provider>
    );
};

function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("use Usercontext outside provider");
    }
    return context;
}

export { UserProvider, useUser };

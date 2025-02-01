"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { User } from "@/utils/dataType";
import { unsubscribe } from "@/utils/firebase";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

type UserContextValue = {
    user: User | null;
    loading: boolean;
    logIn: (user: User) => void;
    logOut: () => void;
    isLogIn: boolean;
};

type UserProviderProps = {
    children: React.ReactNode;
};

const UserContext = createContext<UserContextValue | undefined>(undefined);

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useLocalStorage<User | null>("user", null);
    const [loading, setLoading] = useState(true);
    const [isLogIn, setIsLogIn] = useState(false);

    const logOut = () => {
        setUser(null);
        setIsLogIn(false);
        toast(`Bye! You're signed out now!`);
    };

    const logIn = (user: User | undefined) => {
        if (!user) {
            return;
        }
        setUser(user);
        setIsLogIn(true);
        toast.success(`Welcome ${user.displayName}!`);
    };

    useEffect(() => {
        if (user) {
            // toast.success(`You're signed in as ${user.displayName}`);
        }
        setLoading(false);
        return unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={{ user, loading, logIn, logOut, isLogIn }}>
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

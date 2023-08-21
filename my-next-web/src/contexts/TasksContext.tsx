"use client";

import { Task } from "@/utils/dataType";
import { getAllDocuments } from "@/utils/firebase";
import { DocumentData } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

type TasksContextValue = {
    tasks: DocumentData[] | undefined;
    loading: boolean;
    revalidate: () => void;
};

type TasksProviderProps = {
    children: React.ReactNode;
};

const TasksContext = createContext<TasksContextValue | undefined>(undefined);

const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
    const [tasks, setTasks] = useState<DocumentData[] | undefined>();
    const [loading, setLoading] = useState(false);

    const fetchFiles = async () => {
        setLoading(true);
        try {
            const tasks: DocumentData[] = await getAllDocuments("tasks");
            setTasks(tasks);
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
        if (!tasks) {
            fetchFiles();
        }
    }, []);

    return (
        <TasksContext.Provider value={{ tasks, loading, revalidate }}>
            {children}
        </TasksContext.Provider>
    );
};

function useTasks() {
    const context = useContext(TasksContext);
    if (context === undefined) {
        throw new Error("use TasksContext outside provider");
    }
    return context;
}

export { TasksProvider, useTasks };

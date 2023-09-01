import { Timestamp } from "firebase/firestore";

export type PostType = {
    slug: string;
    title: string;
    coverImage: string;
    desc: string;
    date?: string;
    content?: string;
    category?: string[];
};

export type Tag = {
    id: string;
    name: string;
    bg?: string;
    fg?: string;
};

export type File = {
    id: string;
    name: string;
    desc: string;
    type: string;
    sem?: string;
    url?: string;
    createAt?: Timestamp;
    subj?: string;
    password?: string;
};

export type Task = {
    id: string;
    name: string;
    desc: string;
    subj?: string;
    due: Timestamp;
    status: string;
};

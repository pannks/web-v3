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
    url?: string;
    createAt?: Date;
    subj?: string;
};

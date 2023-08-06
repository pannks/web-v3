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

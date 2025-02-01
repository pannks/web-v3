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
    author?: string;
    group?: string;
};

export type Task = {
    id: string;
    name: string;
    desc: string;
    subj?: string;
    due: Timestamp;
    status: string;
};

export type userAuth = User | {};

export type User = {
    uid: string;
    email: string;
    emailVerified: boolean;
    displayName: string;
    isAnonymous: false;
    photoURL: string;
    createdAt: Timestamp;
};

export type ProductItem = {
    id: string;
    title: string;
    desc: string;
    coverImg: string;
    thumbImg?: string;
    price: number;
    fullPrice?: number;
    isComingSoon?: boolean;
    isRecommend?: boolean;
    lifetimePerUser?: boolean;
    prodId: string;
    priceId: string;
};

export type UserCart = {
    items: {
        id: string;
        title: string;
        img: string;
        qty: number;
        price: number;
        priceId: string;
    }[];
    coupon: string | null;
};

export type UOrder = {
    id: string;
    customer_email: string;
    phone: string;
    amount_total: number;
    mode: string;
    expires_at: number;
    created: number;
    mail_sent_count: number;
    download_count: number;
    last_mail_sent_at: number | null;
    last_download_at: number | null;
    line_items: {
        id: string;
        price_id: string;
        price: {
            id: string;
            product: string;
        };
        quantity: number;
        description: string;
    }[];
};

export type ProductUrl = {
    last_updated_at: number;
    last_version: number;
    last_version_url: string;
    prod_id: string;
};

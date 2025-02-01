// src/lib/mdx/getPostBySlug.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "src", "app", "blogs", "_posts");

export interface PostData {
    title: string;
    desc: string;
    coverImage?: string;
    date: string;
    category?: string[];
    content: string; // raw MDX content
}

export function getPostBySlug(slug: string): PostData | null {
    const fullPath = path.join(POSTS_PATH, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
        title: data.title ?? "",
        desc: data.desc ?? "",
        coverImage: data.coverImage ?? "",
        date: data.date ?? "",
        category: data.category ?? [],
        content
    };
}

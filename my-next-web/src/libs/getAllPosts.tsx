// src/lib/mdx/getAllPosts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "src", "app", "blogs", "_posts");

export interface PostMeta {
    slug: string;
    title: string;
    desc: string;
    coverImage?: string;
    date: string;
    category?: string[];
}

export function getAllPosts(): PostMeta[] {
    // Read all .mdx files
    const fileNames = fs
        .readdirSync(POSTS_PATH)
        .filter((fn) => fn.endsWith(".mdx"));

    return fileNames.map((fileName) => {
        const slug = fileName.replace(/\.mdx?$/, "");
        const filePath = path.join(POSTS_PATH, fileName);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContent);

        return {
            slug,
            title: data.title ?? "",
            desc: data.desc ?? "",
            coverImage: data.coverImage ?? "",
            date: data.date ?? "",
            category: data.category ?? []
        };
    });
}

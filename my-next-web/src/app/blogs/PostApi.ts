import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "/src/app/blogs/_posts");

export type Items = {
    [key: string]: string;
};

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory); //[ 'welcome.md' ]
}

export function getPostBySlug(slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const items: Items = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === "slug") {
            items[field] = realSlug;
        }
        if (field === "content") {
            items[field] = content;
        }

        if (typeof data[field] !== "undefined") {
            items[field] = data[field];
        }
    });

    return items;
}

export function getAllPosts(fields: string[] = []) {
    const slugs = getPostSlugs(); //[ 'welcome.md' ]
    const posts = slugs.map((slug) => getPostBySlug(slug, fields));
    // sort posts by date in descending order
    // .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    return posts;
}
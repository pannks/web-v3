import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_PATH = path.join(
    process.cwd(),
    "src",
    "app",
    "useful",
    "_snippets"
);

export interface CodeSnippet {
    content: string; // raw MDX content
    [key: string]: any; // frontmatter
}

export function getCodeByName(name: string): CodeSnippet | null {
    const fullPath = ["mdx", "md"]
        .map((ext) => path.join(POSTS_PATH, `${name}.${ext}`))
        .find((p) => fs.existsSync(p));
    if (!fullPath) return null;
    if (!fs.existsSync(fullPath)) return null;

    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContent);
    return {
        content,
        ...data
    };
}

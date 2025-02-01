// import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
// import { serialize } from "next-mdx-remote/serialize";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";

import styles from "./page.module.scss";
import OtherPosts from "@/components/OtherPosts";
import { HiChevronLeft } from "react-icons/hi2";
import Link from "next/link";
import { Metadata } from "next";
import SocialCountPost from "@/components/SocialCountPost";
import SocialShare from "@/components/SocialShare";
import { getPostBySlug } from "@/libs/getPostBySlug";
import { getAllPosts } from "@/libs/getAllPosts";

type BlogPageProps = {
    params: { slug: string };
};

// interface MdxSource {
//     mdxSource: MDXRemoteSerializeResult;
//     post: {
//         slug: string;
//         title: string;
//         desc: string;
//         coverImage?: string;
//         date: string;
//         category?: string[];
//     };
//     allPosts: {
//         slug: string;
//         title: string;
//         desc: string;
//         coverImage?: string;
//         date: string;
//         category?: string[];
//     }[];
// }

const BlogPage: React.FC<BlogPageProps> = async ({ params }) => {
    const slug = (await params).slug;
    const data = getPostBySlug(slug);
    const allPosts = getAllPosts();

    // const mdxSource = await serialize(data?.content, {
    //     mdxOptions: {
    //         remarkPlugins: [remarkGfm],
    //         rehypePlugins: [rehypePrism, rehypeHighlight]
    //     },
    //     format: "mdx"
    //     // parseFrontmatter: true
    // });
    // console.log(mdxSource);

    const options = {
        mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight, rehypePrism],
            remarkRehypeOptions: { footnoteLabel: "References" }
        }
    };
    const { content } = await compileMDX({
        source: data.content,
        options: options
    });

    // console.log(post);

    return (
        <>
            <div className={styles.header}>
                <Link href={"/blogs"}>
                    <HiChevronLeft /> All Blogs
                </Link>
            </div>
            <div className={styles.page}>
                <h1 className={styles.page__title}>{data.title}</h1>
                <h2 className={styles.page__desc}>{data.desc}</h2>
                <article>{content}</article>
            </div>
            <SocialShare path={`/blogs/${data?.slug}`} />
            <SocialCountPost slug={slug} />
            <OtherPosts posts={allPosts ?? []} slug={slug} />
        </>
    );
};

export async function generateMetadata({
    params
}: BlogPageProps): Promise<Metadata> {
    const slug = (await params).slug;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: `Blog not found | PannKs`,
            description: "Blog not found"
        };
    }

    return {
        title: `${post.title} | PannKs`,
        description: post.desc,
        openGraph: {
            title: `${post.title} | PannKs`,
            description: post.desc,
            url: `https://pannks.com/blogs/${post.slug}`,
            images: [
                {
                    url: post.coverImage
                }
            ]
        }
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post) => ({
        slug: post.slug
    }));
}

// export async function getStaticPaths() {
//     const posts = getAllPosts(["slug"]);

//     return {
//         paths: posts.map((post) => {
//             // console.log(post);
//             return {
//                 params: {
//                     slug: post.slug,
//                 },
//             };
//         }),
//         fallback: false,
//     };
// }

export default BlogPage;

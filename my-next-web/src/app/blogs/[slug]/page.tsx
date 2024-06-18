import { getAllPosts, getPostBySlug } from '../PostApi';
import { compileMDX } from 'next-mdx-remote/rsc';
import styles from './page.module.scss';

import rehypeHighlight from 'rehype-highlight/lib';
import remarkGfm from 'remark-gfm';
import OtherPosts from '@/components/OtherPosts';
import { HiChevronLeft } from 'react-icons/hi2';
import Link from 'next/link';
import { Metadata } from 'next';
import SocialCountPost from '@/components/SocialCountPost';

type BlogPageProps = {
    params: {
        slug: string;
    };
};

const BlogPage: React.FC<BlogPageProps> = async ({ params }) => {
    const allPosts = getAllPosts(['slug', 'title', 'desc']);
    const post = getPostBySlug(params.slug, [
        'title',
        'desc',
        'date',
        'slug',
        'content',
    ]);
    const options = {
        mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight],
            remarkRehypeOptions: { footnoteLabel: 'References' },
        },
    };

    const { content } = await compileMDX({
        source: post.content,
        options: options,
    });

    // console.log(post);

    return (
        <>
            <div className={styles.header}>
                <Link href={'/blogs'}>
                    <HiChevronLeft /> All Blogs
                </Link>
            </div>
            <div className={styles.page}>
                <h1 className={styles.page__title}>{post.title}</h1>
                <h2 className={styles.page__desc}>{post.desc}</h2>
                <article>{content}</article>
            </div>
            <SocialCountPost slug={params.slug} />
            <OtherPosts posts={allPosts ?? []} slug={params.slug} />
        </>
    );
};

export async function generateMetadata({
    params,
}: BlogPageProps): Promise<Metadata> {
    const post = getPostBySlug(params.slug, [
        'title',
        'desc',
        'slug',
        'coverImage',
    ]);

    return {
        title: `${post.title} | PannKs`,
        description: post.desc,
        openGraph: {
            title: `${post.title} | PannKs`,
            description: post.desc,
            url: `https://pannks.com/blogs/${post.slug}`,
            images: [
                {
                    url: post.coverImage,
                },
            ],
        },
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts(['slug']);

    return posts.map((post) => ({
        slug: post.slug,
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

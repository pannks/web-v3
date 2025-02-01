import { getPostBySlug } from "@/libs/getPostBySlug";
import { getAllPosts } from "@/libs/getAllPosts";
import { Metadata } from "next";
import { sourceMaps } from "../sourceMap";
import styles from "./page.module.scss";
import TextContentView from "../TextContentView";
import LinkContentView from "../LinkContentView";
import SnippetContentView from "../SnippetContentView";
import ImageContentView from "../ImageContentView";

type SourcePageProps = {
    params: { source: string };
};

const SourcePage: React.FC<SourcePageProps> = async ({ params }) => {
    const sourceName = (await params).source;
    const sourceInfo = sourceMaps.find((s) => s.slug === sourceName);

    return (
        <div className={styles.page}>
            <div className={styles.info__wrapper}>
                <div className={styles.info__header}>
                    <h1>{sourceInfo?.label}</h1>
                    {/* <pre>{JSON.stringify(sourceInfo, null, 2)}</pre> */}
                    <p className={styles.info__detail}>{sourceInfo?.detail}</p>
                </div>
            </div>
            <div className={styles.content}>
                {sourceInfo?.content?.map((c, i) => (
                    <div key={i} className={styles.content__wrapper}>
                        {c.type === "text" && (
                            <TextContentView text={c.content} />
                        )}
                        {c.type === "snippet" && (
                            <SnippetContentView snippets={c.content} />
                        )}
                        {c.type === "link" && (
                            <LinkContentView links={c.content} />
                        )}
                        {c.type === "image" && (
                            <ImageContentView image_url={c.content.image_url} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

// export async function generateMetadata({
//     params
// }: SourcePageProps): Promise<Metadata> {
//     const slug = (await params).slug;
//     const post = getPostBySlug(slug);

//     if (!post) {
//         return {
//             title: `Blog not found | PannKs`,
//             description: "Blog not found"
//         };
//     }

//     return {
//         title: `${post.title} | PannKs`,
//         description: post.desc,
//         openGraph: {
//             title: `${post.title} | PannKs`,
//             description: post.desc,
//             url: `https://pannks.com/blogs/${post.slug}`,
//             images: [
//                 {
//                     url: post.coverImage
//                 }
//             ]
//         }
//     };
// }

export async function generateStaticParams() {
    const sources = sourceMaps;
    return sources
        .filter((s) => s.slug)
        .map((s) => ({
            source: s.slug
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

export default SourcePage;

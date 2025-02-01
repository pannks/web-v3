import React from "react";
import styles from "./page.module.scss";
import { getAllPosts } from "./PostApi";
import PostCard from "@/components/PostCard";
import { PostType } from "@/utils/dataType";
import SectionBackLink from "@/components/SectionBackLink";

const BlogsPage = () => {
    const allPosts = getAllPosts([
        "slug",
        "title",
        "desc",
        "coverImage",
        "category",
        "date"
    ]);
    return (
        <>
            <SectionBackLink />
            <div className={styles.section__1}>
                <h1 className={styles.heading}>My Blogs</h1>
                <div className={styles.card__wrap}>
                    {allPosts
                        .sort((a, b) => b?.date?.localeCompare(a?.date))
                        .map((post) => {
                            const { title, desc, slug, coverImage, category } =
                                post;
                            const postItem: PostType = {
                                title,
                                desc,
                                slug,
                                coverImage,
                                category
                            };
                            return <PostCard key={post.slug} post={postItem} />;
                        })}
                </div>
            </div>
        </>
    );
};

export default BlogsPage;

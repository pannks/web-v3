import React from "react";
import styles from "./page.module.scss";
import { getAllPosts } from "./PostApi";
import PostCard from "@/components/PostCard";
import { PostType } from "@/utils/dataType";

const BlogsPage = () => {
    const allPosts = getAllPosts(["slug", "title", "desc", "coverImage"]);
    return (
        <div className={styles.section__1}>
            <h1 className={styles.heading}>My Blogs</h1>
            <div className={styles.card__wrap}>
                {allPosts.map((post) => {
                    const { title, desc, slug, coverImage } = post;
                    const postItem: PostType = {
                        title,
                        desc,
                        slug,
                        coverImage,
                    };
                    return <PostCard key={post.slug} post={postItem} />;
                })}
            </div>
        </div>
    );
};

export default BlogsPage;

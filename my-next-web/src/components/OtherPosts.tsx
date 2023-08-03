import { PostType } from "@/utils/dataType";
import React from "react";
import styles from "./OtherPosts.module.scss";
import Link from "next/dist/client/link";
import { HiChevronRight } from "react-icons/hi2";
import { Items } from "@/app/blogs/PostApi";

type OtherPostsProps = {
    posts: Items[];
    slug: string;
};

const OtherPosts: React.FC<OtherPostsProps> = ({ posts, slug }) => {
    return (
        <section className={styles.section__other}>
            <div className={styles.content}>
                <h1>More blogs</h1>
                <div className={styles.card__wrap}>
                    {posts
                        .filter((post) => post.slug !== slug)
                        .map((post, i) => {
                            if (i > 2) return;
                            return (
                                <Link
                                    key={post.title}
                                    href={`/blogs/${post.slug}`}
                                >
                                    <div className={styles.card}>
                                        <h3>{post.title}</h3>
                                        <p>{post.desc}</p>
                                    </div>
                                </Link>
                            );
                        })}
                </div>
            </div>
        </section>
    );
};

export default OtherPosts;

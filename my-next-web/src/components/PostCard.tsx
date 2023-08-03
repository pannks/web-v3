import React from "react";
import styles from "./PostCard.module.scss";
import Link from "next/link";
import { Item } from "firebase/analytics";
import { PostType } from "@/utils/dataType";

type PostCardProps = {
    post: PostType;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <Link href={`/blogs/${post.slug}`}>
            <div className={styles.card}>
                <img src={post.coverImage} alt={post.slug} />
                <div className={styles.card__body}>
                    <h2 className={styles.card__title}>{post.title}</h2>
                    <p className={styles.card__desc}>{post.desc}</p>
                </div>
            </div>
        </Link>
    );
};

export default PostCard;

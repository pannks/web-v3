import React from "react";
import styles from "./PostCard.module.scss";
import Link from "next/link";
import { PostType } from "@/utils/dataType";
import Badge from "./Badge";
import Image from "next/image";
import getBase64 from "@/utils/base64";

type PostCardProps = {
    post: PostType;
};

const PostCard: React.FC<PostCardProps> = async ({ post }) => {
    const base64 = await getBase64("public/vercel.svg");
    return (
        <Link href={`/blogs/${post.slug}`}>
            <div className={styles.card}>
                <Image
                    src={post.coverImage}
                    alt={post.slug}
                    width={600}
                    height={400}
                    placeholder={"blur"}
                    blurDataURL={base64}
                />
                <div className={styles.card__tags}>
                    {post.category?.map((tag) => (
                        <Badge
                            key={tag}
                            text={tag}
                            bg="var(--code-hue-5)"
                            fg="#FFF"
                        />
                    ))}
                </div>

                <div className={styles.card__body}>
                    <h2 className={styles.card__title}>{post.title}</h2>
                    <p className={styles.card__desc}>{post.desc}</p>
                </div>
            </div>
        </Link>
    );
};

export default PostCard;

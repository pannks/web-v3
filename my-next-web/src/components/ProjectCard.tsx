import React from "react";
import styles from "./ProjectCard.module.scss";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import getBase64 from "@/utils/base64";
import Badge from "./Badge";
import { Tag } from "@/utils/dataType";

type ProjectCardProps = {
    title: string;
    desc: string;
    tagArray: Tag[];
    img?: string;
    href?: Url;
};

const ProjectCard: React.FC<ProjectCardProps> = async ({
    title,
    img,
    desc,
    tagArray,
    href = "./",
}) => {
    const base64 = await getBase64(`public/${img}` ?? "");
    return (
        <Link href={href} className={styles.link}>
            <div className={styles.card}>
                <div className={styles.img}>
                    <Image
                        src={`/${img}`}
                        alt={title}
                        sizes="100%"
                        priority
                        fill
                        placeholder={"blur"}
                        blurDataURL={base64}
                    />
                </div>
                <div className={styles.badge_box}>
                    {tagArray?.map((tag) => (
                        <Badge
                            key={tag.id}
                            text={tag.name}
                            bg={tag.bg}
                            fg={tag?.fg}
                        />
                    ))}
                </div>
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </Link>
    );
};

export default ProjectCard;

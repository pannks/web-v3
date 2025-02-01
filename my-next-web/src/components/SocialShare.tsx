"use client";
import React from "react";
import {
    FacebookShareCount,
    HatenaShareCount,
    OKShareCount,
    PinterestShareCount,
    RedditShareCount,
    TumblrShareCount,
    VKShareCount,
    LineShareButton,
    TwitterIcon,
    LineIcon,
    FacebookIcon,
    FacebookShareButton,
    TwitterShareButton,
    XIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";

import styles from "./SocialShare.module.scss";

const SocialShare = ({ path }: { path: string }) => {
    const DOMAIN_URL = "https://pannks.me";
    const url = DOMAIN_URL + path;
    return (
        <div className={styles.layout}>
            <div className={styles.textContainer}>
                <p>Share With:</p>
            </div>
            <div className={styles.container}>
                <LineShareButton url={url}>
                    <LineIcon size={32} round={true} />
                </LineShareButton>
                <FacebookShareButton url={url}>
                    <FacebookIcon size={32} round={true} />
                    {/* <FacebookShareCount url={url} /> */}
                </FacebookShareButton>
                <TwitterShareButton url={url}>
                    <XIcon size={32} round={true} />
                </TwitterShareButton>
                <LinkedinShareButton url={url}>
                    <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
            </div>
        </div>
    );
};

export default SocialShare;

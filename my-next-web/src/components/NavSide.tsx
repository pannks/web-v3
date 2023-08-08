import Link from "next/link";
import React from "react";
import styles from "./NavSide.module.scss";

const NavSide = () => {
    return (
        <div className={styles.quicknav}>
            <Link href={"./TU"}>TU Files</Link>
            <Link href={"./blogs"}>Blogs</Link>
            <Link href={"./about"}>About</Link>
        </div>
    );
};

export default NavSide;

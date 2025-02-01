import Link from "next/link";
import React from "react";
import styles from "./NavSide.module.scss";
import {
    HiBolt,
    HiNewspaper,
    HiOutlineBolt,
    HiOutlineBoltSlash,
    HiOutlineNewspaper,
    HiOutlineShoppingBag,
    HiOutlineUserCircle,
    HiShoppingBag,
    HiUser
} from "react-icons/hi2";

const NavSide = () => {
    return (
        <div className={styles.quicknav}>
            <Link href={"./blogs"}>
                <HiOutlineNewspaper />
            </Link>
            <Link href={"./about"}>
                <HiOutlineUserCircle />
            </Link>
            <Link href={"https://store.pannks.me"}>
                <HiOutlineShoppingBag />
            </Link>
            <Link href={"./useful"}>
                <HiOutlineBolt />
            </Link>
        </div>
    );
};

export default NavSide;

import React from "react";
import {
    HiChevronDoubleLeft,
    HiChevronLeft,
    HiOutlineShoppingCart
} from "react-icons/hi2";
import styles from "./StoreNavigation.module.scss";
import { useCart } from "@/contexts/CartContext";
import Link from "next/link";

type StoreNavigationProps = {
    onOpenCartSlide: () => void;
};

const StoreNavigation: React.FC<StoreNavigationProps> = ({
    onOpenCartSlide
}) => {
    const { calculateTotalItems } = useCart();
    return (
        <nav className={styles.nav__container}>
            <div className={styles.nav}>
                <ul className={styles.mobile_hide}>
                    <li className={styles.nav__back}>
                        <Link href="/" className={styles.back}>
                            <HiChevronLeft />
                            <span>Back</span>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/store">Store</Link>
                    </li>
                    <li>
                        <Link href="/store/my-items">My Items</Link>
                    </li>
                    <li onClick={onOpenCartSlide} className={styles.nav__cart}>
                        Cart
                        <HiOutlineShoppingCart />
                        <span className={styles.nav__cart__badge}>
                            {calculateTotalItems()}
                        </span>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default StoreNavigation;

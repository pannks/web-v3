"use client";
import React from "react";
import styles from "./ItemCard.module.scss";
import { ProductItem, UOrder, UserCart } from "@/utils/dataType";
import Link from "next/link";

interface ItemCardProps {
    orders: UOrder[];
    item: ProductItem;
    currentCart?: UserCart;
    isComingSoon?: boolean;
    onClickAddToCart: (item: ItemCardProps["item"]) => void;
}
const ItemCard: React.FC<ItemCardProps> = ({
    orders,
    currentCart,
    item,
    isComingSoon,
    onClickAddToCart
}) => {
    const {
        id,
        title,
        desc,
        price,
        coverImg,
        lifetimePerUser,
        fullPrice,
        prodId
    } = item;
    const handleOnClickAddToCart = () => {
        onClickAddToCart(item);
    };

    const isExistedInCart =
        currentCart?.items.find((item) => item.id === id) ?? false;

    const isExistedInOrders = (
        product_id: string,
        orders: UOrder[]
    ): boolean => {
        return orders.some((order) =>
            order.line_items.some((item) => item.price.product === product_id)
        );
    };

    return (
        <div
            className={
                styles.card + " " + (isComingSoon ? styles.comingSoon : "")
            }
        >
            {isComingSoon && (
                <span className={styles.comingSoon__text}>Coming Soon</span>
            )}
            <div className={styles.card__img}>
                <img src={coverImg} alt={`img_${title}`} />
            </div>
            <h1>{title}</h1>
            <p className={styles.desc}>{desc}</p>
            <div className={styles.card__btm}>
                {isExistedInOrders(prodId, orders) ? (
                    <Link href={`/store/my-items`} className={styles.btn__buy}>
                        Go To My Items
                    </Link>
                ) : (
                    <>
                        <button
                            className={styles.btn__buy}
                            onClick={handleOnClickAddToCart}
                            disabled={!!isExistedInCart && lifetimePerUser}
                        >
                            {isExistedInCart ? "Added" : ""}
                            {lifetimePerUser &&
                                !isExistedInCart &&
                                "Add to Cart"}
                            {!lifetimePerUser &&
                                !isExistedInCart &&
                                "Add to Cart"}
                        </button>
                        <span className={styles.price__full}>
                            ฿ {fullPrice}
                        </span>
                        <span className={styles.price}>฿ {price} </span>
                    </>
                )}
            </div>
        </div>
    );
};

export default ItemCard;

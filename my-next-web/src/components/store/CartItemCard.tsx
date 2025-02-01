import React from "react";
import styles from "./CartItemCard.module.scss";
import { HiTrash } from "react-icons/hi2";

type ProductCartItem = {
    id: string;
    title: string;
    img: string;
    qty: number;
    price: number;
};

const CartItemCard: React.FC<{
    item: ProductCartItem;
    onRemoveFromCart: (item: ProductCartItem) => void;
}> = ({ item, onRemoveFromCart = () => {} }) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__img}>
                <img src={item.img} alt={`img_${item.title}`} />
            </div>
            <div className={styles.card__info}>
                <h4 className={styles.card__title}>{item.title}</h4>
                <p className={styles.card__price}>THB {item.price}</p>
                <span className={styles.card__btm_row}>
                    <p className={styles.card__qty}>x {item.qty}</p>
                    <button
                        className={styles.btn__remove}
                        onClick={() => onRemoveFromCart(item)}
                    >
                        <HiTrash /> Remove
                    </button>
                </span>
            </div>
        </div>
    );
};

export default CartItemCard;

import React from "react";
import { HiChevronLeft, HiChevronRight, HiXMark } from "react-icons/hi2";
import styles from "./CartView.module.scss";
import { useCart } from "@/contexts/CartContext";
import CartItemCard from "./CartItemCard";
import { useUser } from "@/contexts/UserContext";
import Link from "next/link";

type CartViewProps = {
    onClose: () => void;
    onCheckout: () => void;
};
const CartView: React.FC<CartViewProps> = ({ onClose, onCheckout }) => {
    const { cart, removeItemFromCart } = useCart();
    const { user } = useUser();

    // const c = Object.groupBy(cart.items, (item) => item.id);
    // console.log(c);

    return (
        <div className={styles.cartView}>
            <div className={styles.cartView__close}>
                <HiChevronRight onClick={onClose} />
            </div>

            <h1>Your Cart ({cart.items.length})</h1>

            <div className={styles.cartView__items}>
                {cart.items.length === 0 && (
                    <p className={styles.cartView__empty}>Cart is empty</p>
                )}
                {cart.items.map((item) => (
                    <CartItemCard
                        key={item.id}
                        item={item}
                        onRemoveFromCart={(item) => {
                            removeItemFromCart(item.id);
                        }}
                    />
                ))}
            </div>
            <div className={styles.cartView__total__box}>
                <p>Total: </p>
                <span>THB {cart.items.reduce((a, b) => a + b.price, 0)}</span>
            </div>
            {user ? (
                <Link
                    href="/store/checkout"
                    className={`${styles.btn__checkout} ${
                        cart.items.length <= 0 && styles.disabled
                    }`}
                    onClick={onCheckout}
                >
                    Checkout
                </Link>
            ) : (
                <p className={styles.cartView__empty}>
                    Please sign in to checkout
                </p>
            )}
        </div>
    );
};

export default CartView;

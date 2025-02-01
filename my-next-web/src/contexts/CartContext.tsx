"use client";

import { createContext, useContext } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ProductItem, UserCart } from "@/utils/dataType";

type CartContextValue = {
    cart: UserCart;
    addItemToCart: (item: ProductItem) => void;
    removeItemFromCart: (id: string) => void;
    clearCart: () => void;
    setCoupon: (coupon: string | null) => void;
    calculateTotalPrice: (couponDiscount?: number) => number;
    calculateTotalItems: () => number;
};

type CartProviderProps = {
    children: React.ReactNode;
};

const initCart: UserCart = {
    items: [],
    coupon: null
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useLocalStorage<UserCart>("pannks-cart", initCart);

    // Function to add items to the cart
    const addItemToCart = (item: ProductItem) => {
        const existingItem = cart.items.find((item) => item.id === item.id);
        let updatedItems;

        if (existingItem) {
            updatedItems = cart.items.map((cartItem) =>
                cartItem.id === existingItem.id
                    ? { ...cartItem, qty: cartItem.qty + 1 }
                    : cartItem
            );
        } else {
            updatedItems = [
                ...cart.items,
                {
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    img: item.thumbImg || "",
                    qty: 1,
                    priceId: item.priceId
                }
            ];
        }

        // Updating only the `items` field in the cart
        setCart((prevCart) => ({
            ...prevCart,
            items: updatedItems
        }));
    };

    // Function to remove items from the cart
    const removeItemFromCart = (id: string) => {
        const updatedItems = cart.items.filter((item) => item.id !== id);
        setCart({
            ...cart,
            items: updatedItems
        });
    };

    // Function to clear the cart
    const clearCart = () => {
        setCart(initCart);
    };

    const setCoupon = (coupon: string | null) => {
        setCart({
            ...cart,
            coupon
        });
    };

    const calculateTotalPrice = (couponDiscount?: number) => {
        if (couponDiscount) {
            return (
                cart.items.reduce(
                    (total, item) => total + item.price * item.qty,
                    0
                ) - couponDiscount
            );
        }
        return cart.items.reduce(
            (total, item) => total + item.price * item.qty,
            0
        );
    };

    const calculateTotalItems = () => {
        return cart.items.reduce((total, item) => total + item.qty, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItemToCart,
                removeItemFromCart,
                clearCart,
                setCoupon,
                calculateTotalPrice,
                calculateTotalItems
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

export { CartProvider, useCart };

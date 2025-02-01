"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
    createOrderIfNotExists,
    getOrdersByCustomerEmail,
    getOrdersByUserId,
    getProductUrlsByProdId,
    updateOrderById
} from "../utils/firebase";
import { ProductUrl, UOrder } from "@/utils/dataType";
import { useUser } from "./UserContext";
import useFetch from "@/hooks/useFetch";
import { getUnixTime } from "date-fns";
import toast from "react-hot-toast";
import useFetchUrl from "@/hooks/useFetchUrl";

type CreateOrderResponse = {
    status: string;
    error: Error | null;
    isExists: boolean;
    order: UOrder | null;
};

type OrdersContextValue = {
    orders: UOrder[] | null;
    loading: boolean;
    refetch: () => void;
    error: Error | null;
    createOrder: (
        order_id: string,
        data: UOrder
    ) => Promise<CreateOrderResponse>;
    sendOrderMail: (data: UOrder) => Promise<void>;
    downloadOrder: (data: UOrder, prod_id?: string) => Promise<boolean>;
    getProductUrl: (prod_id: string) => Promise<Partial<ProductUrl>[]>;
};

type OrdersProviderProps = {
    children: React.ReactNode;
};

const OrdersContext = createContext<OrdersContextValue | undefined>(undefined);

const OrdersProvider: React.FC<OrdersProviderProps> = ({ children }) => {
    const { user } = useUser();
    const {
        data: orders,
        loading,
        error,
        refetch
    } = useFetch<UOrder[]>(
        () => user && (getOrdersByCustomerEmail(user?.email as string) as any),
        [user]
    );
    //--private
    const _updateOrder = async (order_id: string, data: Partial<UOrder>) => {
        const res = await updateOrderById(order_id, data);
        return res;
    };
    const _getProductUrls = async (prod_id: string, restricted = true) => {
        const prods = await getProductUrlsByProdId(prod_id);
        if (!restricted) {
            return prods as ProductUrl[];
        } else {
            return prods.map((prod) => {
                return {
                    last_updated_at: prod.last_updated_at,
                    last_version: prod.last_version,
                    prod_id: prod.prod_id
                } as Partial<ProductUrl>;
            }, []);
        }
    };

    const _openProductUrl = async (prod_id: string) => {
        const prods = await _getProductUrls(prod_id, false);
        if (prods.length !== 1) return false;
        window.open(prods[0]?.last_version_url! as string, "_blank")?.focus();
        return true;
    };
    //--
    const getProductUrl = async (prod_id: string) =>
        await _getProductUrls(prod_id, true);
    const createOrder = async (order_id: string, data: UOrder) => {
        const res = await createOrderIfNotExists(order_id, data);
        const response = {
            ...res,
            order: res.order as UOrder,
            isExists: res.isExists as boolean,
            status: res.status as string,
            error: res.error as Error
        } as CreateOrderResponse;
        return response;
    };
    const sendOrderMail = async (recentOrder: UOrder) => {
        _updateOrder(recentOrder.id, {
            mail_sent_count: recentOrder.mail_sent_count + 1,
            last_mail_sent_at: getUnixTime(new Date())
        });
        const raw = {
            email: recentOrder?.customer_email,
            to: recentOrder?.customer_email,
            toName: user?.displayName,
            from: "info@pannks.me",
            fromName: "PannKs",
            bcc: "pannrattanapong@gmail.com",
            subject: "Thank You for Ordering",
            name: user?.displayName,
            orderNumber: recentOrder.id?.toString().slice(-8),
            buttonUrl: "https://pannks.me/store/my-items",
            buttonText: "Go To My Items",
            _validate: true
        };
        console.log(raw);
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API as string}/mail/send/new-order`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(raw)
            }
        );
        return await response.json();
    };
    const downloadOrder = async (
        recentOrder:
            | UOrder
            | { id: string; download_count: number; last_download_at: number },
        prod_id?: string
    ) => {
        if (recentOrder.last_download_at) {
            const timeDiff =
                getUnixTime(new Date()) - recentOrder.last_download_at;
            if (timeDiff < 600 && recentOrder.download_count >= 3) {
                toast.error(
                    "You have exceeded the download rate limit. Please try again later."
                );
                return false;
            }
        }
        _updateOrder(recentOrder.id, {
            download_count: recentOrder.download_count + 1,
            last_download_at: getUnixTime(new Date())
        });
        toast.success(`Your order is going to be downloaded!`);
        prod_id && (await _openProductUrl(prod_id));
        return true;
    };

    return (
        <OrdersContext.Provider
            value={{
                orders,
                loading,
                error,
                refetch,
                createOrder,
                sendOrderMail,
                downloadOrder,
                getProductUrl
            }}
        >
            {children}
        </OrdersContext.Provider>
    );
};

function useOrders() {
    const context = useContext(OrdersContext);
    if (context === undefined) {
        throw new Error("use OrdersContext outside provider");
    }
    return context;
}

export { OrdersProvider, useOrders };

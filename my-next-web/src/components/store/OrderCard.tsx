"use client";
import React, { useEffect } from "react";
import styles from "./OrderCard.module.scss";
import { ProductItem, UOrder, UserCart } from "@/utils/dataType";
import { formatUnixToLocal } from "@/utils/transform";
import { IoDownloadOutline } from "react-icons/io5";
import { SiSpinnaker } from "react-icons/si";
import { PiSpinner } from "react-icons/pi";

interface OrderCardProps {
    order: UOrder;
    onDownload: (order: UOrder, prod_id?: string) => void;
    isLoading: boolean;
}
const OrderCard: React.FC<OrderCardProps> = ({
    order,
    onDownload,
    isLoading
}) => {
    const onClickDownload = (order: UOrder, prod_id?: string) => {
        onDownload(order, prod_id);
    };
    useEffect(() => {}, [isLoading]);
    return (
        <div className={styles.card}>
            {order.line_items.map((item) => (
                <div className={styles.item} key={item.id}>
                    <div>
                        <h3>{item?.description ?? ""}</h3>
                        <p className={styles.created}>
                            {`  ${formatUnixToLocal(order.created)}`}
                        </p>
                        <p className={styles.created}></p>
                    </div>

                    <div className={styles.btns}>
                        <button
                            className={styles.btn__download}
                            onClick={() =>
                                onClickDownload(order, item?.price?.product)
                            }
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <PiSpinner />
                            ) : (
                                <>
                                    <IoDownloadOutline />
                                    <span>
                                        Download ({order.download_count})
                                    </span>
                                </>
                            )}
                        </button>
                        {/* <button className={styles.btn__review}>Review</button> */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OrderCard;

"use client";
import React, { useEffect } from "react";
import styles from "./SidebarSlide.module.scss";

type SidebarSlideProps = {
    position: "LEFT" | "RIGHT";
    children: React.ReactNode;
    onClose: () => void;
    isOpen?: boolean;
};

const SidebarSlide: React.FC<SidebarSlideProps> = ({
    position = "LEFT",
    children,
    onClose,
    isOpen = false
}) => {
    const [isOpenSlide, setIsOpenSlide] = React.useState(isOpen);
    const handleSlideClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    useEffect(() => {
        setIsOpenSlide(isOpen);
    }, [isOpen]);

    return (
        <div
            className={`${styles.overlay} ${!isOpenSlide ? styles.hide : ""}`}
            onClick={onClose}
        >
            <div
                className={`${styles.slide} ${styles[position]} ${
                    isOpenSlide ? styles.show : ""
                }`}
                onClick={handleSlideClick}
            >
                {children}
            </div>
        </div>
    );
};

export default SidebarSlide;

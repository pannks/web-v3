"use client";
import { useDarkMode } from "@/contexts/DarkModeContext";
import Image from "next/image";
import React from "react";

const HomeImage = () => {
    const { isDarkMode } = useDarkMode();

    if (isDarkMode) {
        return (
            <Image
                src={"pannks_artbg1.png"}
                alt={"bg_pannks"}
                width={400}
                height={300}
            />
        );
    } else {
        return (
            <Image
                src={"pannks_artbg2.png"}
                alt={"bg_pannks"}
                width={400}
                height={300}
            />
        );
    }
};

export default HomeImage;

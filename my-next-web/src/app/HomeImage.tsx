"use client";
import { useDarkMode } from "@/contexts/DarkModeContext";
import React from "react";

const HomeImage = () => {
    const { isDarkMode } = useDarkMode();

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={`${isDarkMode ? "/pannks_artbg1.png" : "/pannks_artbg2.png"}`}
            alt={"bg_pannks"}
            width={400}
            height={300}
        />
    );
};

export default HomeImage;

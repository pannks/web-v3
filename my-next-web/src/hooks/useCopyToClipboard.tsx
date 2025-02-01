"use client";
import CopyButton from "@/components/CopyButton";
import React, { useState } from "react";
import { BsClipboard, BsClipboard2CheckFill } from "react-icons/bs";
import { IoCopy, IoCopyOutline } from "react-icons/io5";
import {
    PiCopy,
    PiCopyFill,
    PiCopySimple,
    PiCopySimpleFill
} from "react-icons/pi";

const useCopyToClipboard = () => {
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const copyToClipboard = async (content: string) => {
        try {
            await navigator.clipboard.writeText(content);
            setIsCopied(true);
            console.log("Copied to clipboard:", content);
        } catch (error) {
            setIsCopied(false);
            console.error("Unable to copy to clipboard:", error);
        }
    };

    return { isCopied, copyToClipboard };
};

const CopyToClipboardButton = ({ content }: { content: string }) => {
    const { isCopied, copyToClipboard } = useCopyToClipboard();

    return (
        <CopyButton
            isCopied={isCopied}
            onClick={() => copyToClipboard(content)}
        />
    );
};

export default CopyToClipboardButton;

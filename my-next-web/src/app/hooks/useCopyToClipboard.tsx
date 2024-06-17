'use client';
import React, { useState } from 'react';

const useCopyToClipboard = () => {
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const copyToClipboard = async (content: string) => {
        try {
            await navigator.clipboard.writeText(content);
            setIsCopied(true);
            console.log('Copied to clipboard:', content);
        } catch (error) {
            setIsCopied(false);
            console.error('Unable to copy to clipboard:', error);
        }
    };

    return { isCopied, copyToClipboard };
};

const CopyToClipboardButton = ({ content }: { content: string }) => {
    const { isCopied, copyToClipboard } = useCopyToClipboard();

    return (
        <div>
            <button onClick={() => copyToClipboard(content)}>
                {isCopied ? '✅คัดลอก!' : 'คัดลอก'}
            </button>
        </div>
    );
};

export default CopyToClipboardButton;

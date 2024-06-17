import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: '🥹 Wish Clipboards 🎉',
    description: 'คำอวยพรที่เหมาะกับแต่ละเทศกาลเตรียมไว้ให้คุณได้คัดลอกไปใช้',
};

const WishOccasionLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
            <script
                src="https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js"
                async
                defer
            ></script>
        </div>
    );
};

export default WishOccasionLayout;

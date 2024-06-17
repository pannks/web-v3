import Navigation from '@/components/Navigation';
import './globals.scss';
import type { Metadata } from 'next';
import { Rubik, JetBrains_Mono, Noto_Sans_Thai } from 'next/font/google';
import Footer from '@/components/Footer';
import { DarkModeProvider } from '@/contexts/DarkModeContext';
import { UserProvider } from '@/contexts/UserContext';
import Script from 'next/script';
import { Suspense } from 'react';

import SpinnerPage from '@/components/SpinnerPage';

const rubik = Rubik({
    subsets: ['latin'],
    variable: '--f-1',
    display: 'swap',
});
const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--f-2',
    display: 'swap',
});
const notoSansThai = Noto_Sans_Thai({
    subsets: ['latin'],
    variable: '--f-3',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Pann's Website",
    description: 'My Portfolio and Public files management Website',
    themeColor: [
        { media: '(prefers-color-scheme: dark)', color: '#161b1f' },
        { media: '(prefers-color-scheme: light)', color: '#ffe260' },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <UserProvider>
            <DarkModeProvider>
                <html
                    lang="th"
                    className={`${rubik.variable} ${jetBrainsMono.variable} ${notoSansThai.variable}`}
                >
                    <Script
                        strategy="afterInteractive"
                        src={`https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
                    />
                    <body>
                        <Suspense fallback={<SpinnerPage />}>
                            <Navigation />
                            {children}
                            <Footer />
                        </Suspense>
                    </body>
                </html>
            </DarkModeProvider>
        </UserProvider>
    );
}

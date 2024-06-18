import Navigation from '@/components/Navigation';
import { Rubik, JetBrains_Mono, Noto_Sans_Thai } from 'next/font/google';
import './globals.scss';
import type { Metadata } from 'next';

import Footer from '@/components/Footer';
import { DarkModeProvider } from '@/contexts/DarkModeContext';
import { UserProvider } from '@/contexts/UserContext';
import Script from 'next/script';
import { Suspense } from 'react';

import SpinnerPage from '@/components/SpinnerPage';
import Head from 'next/head';

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
                    <Head>
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `
                                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                'https://www.googletagmanager.com/gtm.js?id=%27+i+dl;f.parentNode.insertBefore(j,f);
                                })(window,document,'script','dataLayer','GTM-MWR4V6FF');
                                `,
                            }}
                        />
                    </Head>

                    <body>
                        <noscript
                            dangerouslySetInnerHTML={{
                                __html: `
                                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MWR4V6FF"
                                height="0" width="0" style="display:none;visibility:hidden"></iframe>
                                `,
                            }}
                        />
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

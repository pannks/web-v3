import Navigation from "@/components/Navigation";
import {
    JetBrains_Mono, // Correctly import JetBrains Mono
    Fira_Mono,
    IBM_Plex_Sans_Thai_Looped,
    Rubik,
    Noto_Serif_Thai
} from "next/font/google"; // Replace Fira_Mono with JetBrains_Mono if needed
import "./globals.scss";
import type { Metadata, Viewport } from "next";
import toast, { Toaster } from "react-hot-toast";

import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import { UserProvider } from "@/contexts/UserContext";
import Script from "next/script";
import { Suspense } from "react";

import SpinnerPage from "@/components/SpinnerPage";
import { CartProvider } from "@/contexts/CartContext";
import { ProductsProvider } from "@/contexts/ProductsContext";
import { OrdersProvider } from "@/contexts/OrdersContext";

const rubik = Rubik({
    variable: "--f-1",
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600", "700", "800", "900"]
});
const jetBrainsMono = Fira_Mono({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    variable: "--f-2",
    display: "swap"
});
const notoSansThai = IBM_Plex_Sans_Thai_Looped({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    variable: "--f-3",
    display: "swap"
});

const notoSansThaiLooped = Noto_Serif_Thai({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--f-4",
    display: "swap"
});

export const metadata = {
    title: {
        default: "PannKs"
    },
    authors: ["Pann Kaansadich"],
    description: "My Portfolio, Blogs and Public files management Website",
    manifest: "/manifest.json",
    openGraph: {
        title: "PannKs",
        description: "My Portfolio, Blogs and Public files management Website",
        url: "https://pannks.me",
        siteName: "PannKs",
        images: [
            {
                url: "https://pannks.me/cover_img_01.jpg"
            }
        ],
        locale: "th"
    }
};

export const viewport: Viewport = {
    themeColor: "#ffe260",
    colorScheme: "dark"
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <UserProvider>
            <DarkModeProvider>
                <CartProvider>
                    <ProductsProvider>
                        <OrdersProvider>
                            <html
                                lang="th"
                                className={`${rubik.variable} ${jetBrainsMono.variable} ${notoSansThai.variable} ${notoSansThaiLooped.variable}`}
                            >
                                <Script
                                    id="gtm"
                                    strategy="afterInteractive"
                                    dangerouslySetInnerHTML={{
                                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-MWR4V6FF');`
                                    }}
                                />

                                <body>
                                    <noscript>
                                        <iframe
                                            src="https://www.googletagmanager.com/ns.html?id=GTM-MWR4V6FF"
                                            height="0"
                                            width="0"
                                            style={{
                                                display: "none",
                                                visibility: "hidden"
                                            }}
                                        ></iframe>
                                    </noscript>

                                    <Toaster
                                        position="top-right"
                                        reverseOrder={false}
                                        gutter={10}
                                        containerClassName=""
                                        containerStyle={{
                                            marginTop: "6rem"
                                        }}
                                        toastOptions={{
                                            // Define default options
                                            className: "",
                                            duration: 3000,
                                            style: {
                                                background: "var(--c-white)",
                                                color: "var(--c-black)",
                                                border: "1px solid var(--c-grey-200)",
                                                fontFamily: "var(--f-1)",
                                                fontSize: "1.5rem"
                                            },

                                            success: {
                                                duration: 3000,
                                                style: {
                                                    borderLeft:
                                                        "5px solid var(--c-chip-10)"
                                                }
                                            }
                                        }}
                                    />
                                    <Suspense fallback={<SpinnerPage />}>
                                        <Navigation />
                                        {children}
                                        <Footer />
                                    </Suspense>
                                </body>
                            </html>
                        </OrdersProvider>
                    </ProductsProvider>
                </CartProvider>
            </DarkModeProvider>
        </UserProvider>
    );
}

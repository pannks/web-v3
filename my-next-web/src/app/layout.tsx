import Navigation from "@/components/Navigation";
import "./globals.scss";
import type { Metadata } from "next";
import { Rubik, JetBrains_Mono, Noto_Sans_Thai } from "next/font/google";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";

const rubik = Rubik({
    subsets: ["latin"],
    variable: "--f-1",
    display: "swap",
});
const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--f-2",
    display: "swap",
});
const notoSansThai = Noto_Sans_Thai({
    subsets: ["latin"],
    variable: "--f-3",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Pann's Website",
    description: "Generated by create next app",
    themeColor: "var(--c-primary)",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DarkModeProvider>
            <html
                lang="en"
                className={`${rubik.variable} ${jetBrainsMono.variable} ${notoSansThai.variable}`}
            >
                <body>
                    <Navigation />
                    {children}
                    <Footer />
                </body>
            </html>
        </DarkModeProvider>
    );
}

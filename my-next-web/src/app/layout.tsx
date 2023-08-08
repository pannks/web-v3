import Navigation from "@/components/Navigation";
import "./globals.scss";
import type { Metadata } from "next";
import { Rubik, JetBrains_Mono, Noto_Sans_Thai } from "next/font/google";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import NavSide from "@/components/NavSide";
import { UserProvider } from "@/contexts/UserContext";

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
    description: "My Portfolio and Public files management Website",
    themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "#161b1f" },
        { media: "(prefers-color-scheme: light)", color: "#00cbe6" },
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
                    <body>
                        <Navigation />
                        {children}
                        <Footer />
                    </body>
                </html>
            </DarkModeProvider>
        </UserProvider>
    );
}

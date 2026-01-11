import type { Metadata } from "next";

import "../styles/globals.css";
import { inter } from "@/utils/fonts";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata: Metadata = {
    title: "Brian Deng | Developer",
    authors: [
        {
            name: "Brian Deng",
        }
    ],
    description: "Full Stack Developer. Location: Edmonton, Alberta",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`} suppressHydrationWarning>{children}</body>
        </html>
    );
}

import type { Metadata } from "next";

import "../styles/globals.css";
import { openSans } from "@/utils/fonts";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata: Metadata = {
    title: "Brian Deng | Developer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${openSans.className} antialiased`}>{children}</body>
        </html>
    );
}

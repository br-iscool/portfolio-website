import type { Metadata } from "next";

import "../styles/globals.css";
import { inter } from "@/utils/fonts";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
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
            <body className={`${inter.className} antialiased`} suppressHydrationWarning>
                <noscript>
                    <div className="flex items-center text-center justify-center p-8">
                        <Link
                            className="text-lg underline underline-offset-4 opacity-90"
                            href="https://www.enable-javascript.com/"
                            target="_blank"
                        >
                            This page cannot be viewed, please enable JavaScript and try again.
                        </Link>
                    </div>
                </noscript>
                {children}
            </body>
        </html>
    );
}

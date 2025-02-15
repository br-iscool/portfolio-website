import type { Metadata } from "next";

import "../globals.css";
import fonts from "@/utils/fonts";

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
			<body className={`${fonts} antialiased`}>{children}</body>
		</html>
	);
}
